import style from "./PostList.module.css";
import stroke from "../../assets/images/stroke.svg";
import { useState } from "react";

const PostList = ({obj}) => {     
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
