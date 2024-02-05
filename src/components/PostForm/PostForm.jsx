import {  useState } from "react";
import DatePicker from "react-datepicker";
import { Button } from "../UI/MyButton/Button";
import style from "./PostForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { addProblem } from "../../store/services/addProblem";
import { useDispatch, useSelector } from "react-redux";

const PostForm = ({ create, updateList }) => {
  const [problemData, setProblemData] = useState({
    problem: "",
    date: null,
    description: "",
  });

  const userID = useSelector(state => state.user.userID);
  const dispatch = useDispatch();

  const send = async () => {
    try {
      const data = await dispatch(addProblem({ problemData, userID }));
      clearInput();
      create();
      updateList();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  function clearInput() {
    setProblemData({ problem: "", date: null, description: "" });
  }

  return (
    <div>
      <form onClick={e => e.preventDefault()}>
        <h3>Сообщить о проблеме</h3>
        <div className={style.minInput}>
          <input
            value={problemData.problem}
            onChange={(e) =>
              setProblemData({ ...problemData, problem: e.target.value })
            }
            placeholder="Ваша проблема"
            type="text"
          />
          <DatePicker
            selected={problemData.date}
            onChange={(date) => setProblemData({ ...problemData, date })}
            placeholderText="Выберите дату"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <textarea
          value={problemData.description}
          onChange={(e) =>
            setProblemData({ ...problemData, description: e.target.value })
          }
          placeholder="Пожалуйста, опишите проблему"
          cols="30"
          rows="8"
        />
        <Button onClick = { send }>Отправить</Button>
      </form>
    </div>
  );
};

export default PostForm;
