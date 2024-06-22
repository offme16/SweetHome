import style from "./UserList.module.css";
import stroke from "../../assets/images/stroke.svg";
import { useState } from "react";
import { Button } from "../UI/MyButton/Button";
import { useDispatch } from "react-redux";
import { fetchProgress } from "../../store/services/fetchProgressProblem";

const UserList = ({ userAllData }) => {
  const dispatch = useDispatch();
  const [visibleItems, setVisibleItems] = useState({});

  const sortedData = [...userAllData].sort((a, b) => {
    return new Date(b.dateOfsolution) - new Date(a.dateOfsolution);
  });

  const toggleVisible = (id) => {
    setVisibleItems((prevVisibleItems) => {
      if (prevVisibleItems.hasOwnProperty(id)) {
        return {
          ...prevVisibleItems,
          [id]: !prevVisibleItems[id],
        };
      }
      return {
        ...prevVisibleItems,
        [id]: true,
      };
    });
  };

   const sendInProggres = (id, progress, userId) =>  {
   async () => {
     await dispatch(fetchProgress({ id, progress, userId }));
    }
  };

  return (
    <div className={style.content}>
      {sortedData.map((e) => (
        <div className={style.container} key={e.id}>
          <div className={style.record_item}>
            <div className={style.record_info}>
              <div className={style.record_info__div}>
                <span>Название:</span>
                <p>{e.problems}</p>
              </div>
              <div className={style.record_info__div}>
                <span>Дата обращения:</span>
                <p>{e.dateOfsolution.slice(0, 10)}</p>
              </div>
              <div className={style.record_info__div}>
                <span>Адрес:</span>
                <p>{e.addres}</p>
              </div>
              <div className={style.record_info__div}>
                <span>Номер телефона:</span>
                <p>{e.phone}</p>
              </div>
            </div>
            <div className={style.record_progress}>
              <span>
                {e.progress === "in progress"
                  ? "В процессе"
                  : e.progress === "done"
                  ? "Выполнено"
                  : "В ожидании"}
              </span>
              <button
                className={`${style.record_item__btn} ${
                  visibleItems[e.id] ? style.rotate : ""
                }`}
                onClick={() => toggleVisible(e.id)}
              >
                <img src={stroke} alt="fff" />
              </button>
            </div>
          </div>
          <div
            className={`${style.record_main_info} ${
              visibleItems[e.id] ? style.visible : ""
            }`}
          >
            <p>{e.description}</p>
            <div className={style.adminPanel__btns}>
              <Button onClick={() => sendInProggres(e.id, "in progress", e.userId)}>
                В процессе
              </Button>
              <Button onClick={() => sendInProggres(e.id, "done", e.userId)}>
                Сделано
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;