import { skesTimes } from "@/interfaces"
import PlanButton from "./PlanButton"
import s from "@/styles/components/planContainer.module.css"
import TimeSlots from "./TimeSlots"

interface Props{
    skesTimes: skesTimes
}

export default async function PlanContainer({skesTimes}:Props){
    return(
            <div className={s.container}>
                <PlanButton plan={skesTimes.plan} />
                <TimeSlots timeSlots={skesTimes.times} />
            </div>
    )
}