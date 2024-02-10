import { dateTime } from "@/interfaces"
import { convertDate } from "@/utils"
import s from "@/styles/components/timeSlots.module.css"

interface Props{
    timeSlots: dateTime[]
}

export default function TimeSlots({timeSlots}:Props){
    return(
        <div className={s.slots}>
            {timeSlots.map(timeSlot =>{
                return(
                    <div className={s.row}>
                        <div className={s.dateRow}>
                            <p>{convertDate(timeSlot.date)}</p>
                        </div>
                        <div className={s.timeRow}>
                            {timeSlot.timeslot.map((time, index)=>{
                                return <p className={s.time}>{index === 0 ? time : index%2 !==0 ? ` - ${time} ` : ` und ${time}`}</p>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}