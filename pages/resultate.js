export default function Resultate(data){
    
   console.log(data.data.entries)

    return(
        <div>Hello</div>
    )
}

export async function getServerSideProps() {
    const data = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
        method : "POST",
        headers: {
            Authorization : `Bearer ${process.env.DROPBOX}`,
            'Content-Type' : "application/json; charset=utf-8"
        },
        body: JSON.stringify({path: "", recursive: true})
    }).then(res => res.json())
 
    return { props: { data } }
}

