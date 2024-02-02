import { useEffect, useState } from "react";
import style from "./PersonalArea.module.css";
import MyModal from "../../components/UI/MyModal/MyModal";
import { Button } from "../../components/UI/MyButton/Button";
import ScrollToTop from "../../assets/scroll";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/postList/PostList";
const PersonalArea = () => {
  const obj = [
    /*{
        id: "0",
        title: "Течет кран",
        date: "18-02-2023",
        body: "В ванной течет кран, требуется починка или замена уплотнительных кольц.",
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
      }*/
  ];
    const [modal, setModal] = useState(false);

    ScrollToTop();

    const createPost = (create) => {
      setModal(false);
    }

  return (
    <div className={style.container}>
      <h2>Личный кабинет</h2>
        <div className={style.records}>
          <p>Мои обращения</p>
          <Button onClick={() => setModal(true)}>Сообщить о проблеме</Button>
        </div>
        {(obj.length) ? <PostList obj={obj}/> : <p>У вас нет обращений</p>}
        <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>
    </div>
  );
};

export default PersonalArea;
