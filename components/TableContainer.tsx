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
                            <tr className={s.headRow}>
                                {Object.values(column).map(value =>{
                                    if(itemIndex < 1){
                                        return <th className={s.headItem}>{value}</th>
                                    }
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody className={s.body}>
                    {table.map((column, itemIndex)=>{
                        return(
                            <tr className={s.bodyRow}>
                                {Object.values(column).map(value =>{
                                    if(itemIndex > 0){
                                        return <td className={s.bodyItem}>{value}</td>
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