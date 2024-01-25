import { useState } from "react"
import DatePicker from "react-datepicker";
import { Button } from "../UI/MyButton/Button"
import style from "./PostForm.module.css"
import "react-datepicker/dist/react-datepicker.css";
const PostForm = ({create}) => {
    const [problem, setProblem] = useState({title: '', date: null, body: ''})

    const send = () => {
        console.log(problem)
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