import { Table } from "@/interfaces"
import s from "@/styles/components/tableContainer.module.css"

interface Props{
    table: Table[]
}

export default function Table({table}:Props){
    return(
        <div className={s.container}>
            <table className={s.table}>
                <thead className={s.head}>
                    {table.map((column, itemIndex)=>{
                        return(
                            <tr className={s.headRow} key={`row_${itemIndex}`}>
                                {Object.values(column).map((value, index) =>{
                                    if(itemIndex < 1){
                                        return <th className={s.headItem} key={`head_${index}`}>{value}</th>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody className={s.body}>
                    {table.map((column, itemIndex)=>{
                        return(
                            <tr className={s.bodyRow} key={`row_${itemIndex}`}>
                                {Object.values(column).map((value, index) =>{
                                    if(itemIndex > 0){
                                        return <td className={s.bodyItem} key={`value_${index}`}>{value}</td>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}