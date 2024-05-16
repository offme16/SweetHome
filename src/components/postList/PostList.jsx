import style from "./PostList.module.css";
import stroke from "../../assets/images/stroke.svg";
import { useState } from "react";

const PostList = ({ userData }) => { 
  const [visibleItems, setVisibleItems] = useState({});

  const sortedData = [...userData].sort((a, b) => {
    return new Date(b.dateOfsolution) - new Date(a.dateOfsolution);
  });
  
  const toggleVisible = (id) => {
    setVisibleItems((prevVisibleItems) => ({
      ...prevVisibleItems,
      [id]: !prevVisibleItems[id],
    }));
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
            </div>
            <div className={style.record_progress}><span>{e.progress === "in progress" ? "В процессе" : (e.progress === "done") ? "Выполнено" : "В ожидании"}</span> <button
              className={`${style.record_item__btn} ${
                visibleItems[e.id] ? style.rotate : ""
              }`}
              onClick={() => toggleVisible(e.id)}
            >
              <img src={stroke} alt="fff" />
            </button></div>
            
          </div>
          <div
            className={`${style.record_main_info} ${
              visibleItems[e.id] ? style.visible : ""
            }`}
          >
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
