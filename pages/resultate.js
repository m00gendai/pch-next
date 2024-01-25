import Link from "next/link";
import Header from "../components/header";
import { useRouter } from "next/router";
import s from "../styles/Resultate.module.css";
import getFile from "../functions/getFile";

export default function Resultate({ sortedYearDirectoryList, fileList, setShow }) {
  
  const router = useRouter();
  const headUrl = `https://pistolenclub-hallau.ch${router.pathname}`;

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <main className="main">
      <Header
        title={"PC Hallau - Resultate"}
        content={
          "Diesjährige Resultate und Ranglisten der Schützen vom Pistolenclub Hallau"
        }
        url={headUrl}
      />
      <section className="section">
        <h1>Resultate</h1>
        <div className={s.introContainer}>
          <p>
            Hier sind alle Resultate der auswärtigen Schiessen für das aktuelle
            Jahr <span>{`${currentYear}`}</span> aufgelistet. Ältere Resultate
            vergangener Jahre finden sich im Archiv am Ende der Seite. Die
            Resultate sind nach Aktualität geordnet.
          </p>
        </div>
        {
          sortedYearDirectoryList.length == 0 
          ? 
          <h2>{`${currentYear} war noch nichts los...`}</h2>
          :
          sortedYearDirectoryList.map((years) => {
            const title = years.path.split("/")[2]
            return (
              <div className={s.container} key={`fragment_${years.id}`}>
                <h2 key={`resultTitle_${title}`}>
                  {title}
                </h2>
                <div key={`linkContainer_${title}`} className={s.linkContainer}>
                  {fileList.map(fileObject => {
                    return fileObject.data.map(file=>{
                      if(file.parent_id == years.id){
                        const name = file.name.replaceAll("_", " ").replace(".pdf", "");
                        return (
                          <div key={`result_${file.id}`} className="link" onClick={() => getFile(file.id, setShow)}>
                            <div className={s.text}>
                              {name}
                            </div>
                          </div>
                        );
                      }
                    });
                  })}
                </div>
              </div>
            );
          })
        }
        <hr />
        <Link
          className={s.archiv}
          href={`https://kdrive.infomaniak.com/app/share/608492/e3b365ba-9347-441c-ac26-ad9a9d6c72c5`}
          target={"_blank"}
        >
          <span className={s.archivText}>Archiv</span>
        </Link>
      </section>
    </main>
  );
}

export async function getStaticProps() {

  const date = new Date();
  const currentYear = date.getFullYear();

  // searches all folders with {currentYear} as directory name and includes the directory path (to extract the parent directory name easier)
  const getYearDirectoryList = await fetch(
    `https://api.infomaniak.com/2/drive/608492/files/search?with=path&directory_id=15&depth=unlimited&types[]=dir&query="${currentYear}"&per_page=1000`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.KDRIVE}`,
        "Content-Type": "application/json",
      },
    }
  );
  const yearDirectoryList = await getYearDirectoryList.json();
  console.log(yearDirectoryList)

  // sorts the year folders by last_modified_at (latest first)
  const sortedYearDirectoryList = yearDirectoryList.data.sort((a, b) => {
    const x = a.added_at;
    const y = b.added_at;
    return x < y ? 1 : x > y ? -1 : 0;
  })

  // gets all files within the year directories
  const fileList = await Promise.all(sortedYearDirectoryList.map(async directory =>{
    const getFiles = await fetch(
      `https://api.infomaniak.com/2/drive/608492/files/${directory.id}/files`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.KDRIVE}`,
          "Content-Type": "application/json",
        },
      }
    );
    return await getFiles.json();
  }))

  return {
    props: {
      sortedYearDirectoryList, 
      fileList
    },
    revalidate: 10,
  };
}
