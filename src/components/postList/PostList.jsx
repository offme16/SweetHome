import style from "./PostList.module.css";
import stroke from "../../assets/images/stroke.svg";
import { useState } from "react";

const PostList = () => {
    const obj = [
        {
          id: "0",
          title: "Розетка весит",
          date: "20-11-2023",
          body: "Расшаталась розетка на кухне, требуется замена.",
        },
        {
          id: "1",
          title: "Лампочка не горит",
          date: "28-12-2023",
          body: "Не горят лампочки на кухне, возможно, проблемы с электричеством.",
        },
        {
          id: "2",
          title: "Убрать снег",
          date: "05-01-2024",
          body: "Много снега во дворе, необходима оперативная уборка.",
        },
        {
          id: "3",
          title: "Течет кран",
          date: "15-02-2024",
          body: "В ванной течет кран, требуется починка или замена уплотнительных кольц.",
        },
        {
          id: "4",
          title: "Нет интернета",
          date: "03-03-2024",
          body: "Отсутствует интернет, проверьте соединение и оборудование.",
        },
        {
            id: "5",
            title: "Течет кран",
            date: "15-02-2024",
            body: "В ванной течет кран, требуется починка или замена уплотнительных кольц.",
          },
          {
            id: "6",
            title: "Нет интернета",
            date: "03-03-2024",
            body: "Отсутствует интернет, проверьте соединение и оборудование.",
          }
      ];
      

  const [visibleItems, setVisibleItems] = useState({});

  const toggleVisible = (id) => {
    setVisibleItems((prevVisibleItems) => ({
      ...prevVisibleItems,
      [id]: !prevVisibleItems[id],
    }));
  };

  return (
    <div>
      {obj.map((e) => (
        <div className={style.container} key={e.id}>
          <div className={style.record_item}>
            <div className={style.record_info}>
              <div className={style.record_info__div}>
                <span>Название:</span>
                <p>{e.title}</p>
              </div>
              <div className={style.record_info__div}>
                <span>Дата обращения:</span>
                <p>{e.date}</p>
              </div>
            </div>
            <button
              className={`${style.record_item__btn} ${
                visibleItems[e.id] ? style.rotate : ""
              }`}
              onClick={() => toggleVisible(e.id)}
            >
              <img src={stroke} alt="fff" />
            </button>
          </div>
          <div
            className={`${style.record_main_info} ${
              visibleItems[e.id] ? style.visible : ""
            }`}
          >
            <p>{e.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
