import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./Admin.module.css";
import { getUserAllData } from "../../store/services/getUserAllData";
import { Loader } from "../../components/loader/Loader";
import stroke from "../../assets/images/stroke.svg";
import { useState } from "react";
import { Button } from "../../components/UI/MyButton/Button"
import { fetchProgress } from "../../store/services/fetchProgressProblem";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAllData());
  }, [dispatch]);
   
  
  const userAllData = useSelector((state) => state.admin.problemsData);
  const [visibleItems, setVisibleItems] = useState({});

  const sortedData = [...userAllData].sort((a, b) => {
    return new Date(b.dateOfsolution) - new Date(a.dateOfsolution);
  });

  const toggleVisible = (id) => {
    setVisibleItems((prevVisibleItems) => ({
      ...prevVisibleItems,
      [id]: !prevVisibleItems[id],
    }));
  };

  const sendInProggres = (id, progress, userId) => {
    dispatch(fetchProgress({ id, progress, userId }));
    dispatch(getUserAllData());
  };

  if (!userAllData) {
    return <Loader />;
  }

  return (
    <div className={style.adminPanel}>
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
                  {e.status === "В работе"
                    ? "В работе"
                    : e.status === "готово"
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
    </div>
  );
};

export default Admin;
