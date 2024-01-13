import { useState } from "react";
import style from "./PersonalArea.module.css";
import MyModal from "../../components/UI/MyModal/MyModal";
import { Button } from "../../components/UI/MyButton/Button";
import ScrollToTop from "../../services/scroll";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/postList/PostList";
const PersonalArea = () => {

    const [modal, setModal] = useState(false);

    ScrollToTop();

    const createPost = (create) => {
      setModal(false);
    }
  return (
    <div className={style.container}>
      <h2>Личный кабинет</h2>
        <Button onClick={() => setModal(true)}>Сообщить о проблеме</Button>
        <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost}/></MyModal>
        <PostList />
    </div>
  );
};

export default PersonalArea;