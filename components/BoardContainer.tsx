import { Board } from "@/interfaces"
import s from "@/styles/components/boardContainer.module.css"
import BoardMember from "./BoardMember"

interface Props{
    board: Board[]
}

export default function BoardContainer({board}:Props){
    return(
        <div className={s.container}>
        {board.map(member=>{
            return <BoardMember member={member} />
        })}
        </div>
    )
}