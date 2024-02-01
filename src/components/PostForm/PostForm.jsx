import { useState } from "react"
import DatePicker from "react-datepicker";
import { Button } from "../UI/MyButton/Button"
import style from "./PostForm.module.css"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const PostForm = ({create}) => {
    const [problem, setProblem] = useState({title: '', date: null, body: ''})

    const send = async () => {
        const response = await axios.post(`https://localhost:7045/Problem/createproblem`,{
            problem: "strfdfsdfdsfsding",
            description: "SSSSstrfdsfsing",
            dateOfSolution: "2024-02-26T20:03:40.883Z",
            userId: "e6b30e7a-dc34-4c99-852c-0e8811afe206"
        })
        console.log(response)
        setProblem({title: "", date: null, body: ""})

        create();
    }

    return(
        <div>
            <form onClick={e => e.preventDefault()}>
                <h3>Сообщить о проблеме</h3>
                <div className={style.minInput}>
                    <input
                        value = { problem.title } 
                        onChange = { e => setProblem({ ...problem, title: e.target.value })} 
                        placeholder="Ваша проблема" type="text" 
                    />
                    <DatePicker
                        selected={problem.date}
                        onChange={(date) => setProblem({ ...problem, date })}
                        placeholderText="Выберите дату"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                    <textarea
                        value = { problem.body }
                        onChange={ e => setProblem({ ...problem, body: e.target.value })}
                        placeholder="Пожалуйста, опишите проблему" cols="30" rows="8">
                    </textarea>
                    <Button onClick={send}>Отправить</Button>
            </form>
        </div>
    )
}
export default PostForm;