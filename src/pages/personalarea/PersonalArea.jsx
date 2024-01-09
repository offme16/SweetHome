import style from "./PersonalArea.module.css"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
const PersonalArea = () =>{
    const [date, setDate] = useState(new Date());
    return (
        <div className={style.container}>
             <h2>Личный кабинет</h2>
            <div className={style.container_content}>
                <Calendar  onChange={setDate} value={date}/>
            </div>
        </div>
    )
};
export default PersonalArea;