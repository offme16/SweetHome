import { useState } from "react";
import style from "./PersonalArea.module.css";
import MyModal from "../../components/UI/MyModal/MyModal";
import { Button } from "../../components/UI/Button";
import ScrollToTop from "../../services/scroll";

const PersonalArea = () => {
    const [modal, setModal] = useState(false);
    ScrollToTop();
  return (
    <div className={style.container}>
      <h2>Личный кабинет</h2>
        <Button onClick={() => setModal(true)}>click</Button>
        <MyModal visible={modal} setVisible={setModal}>[eq</MyModal>
    </div>
  );
};

export default PersonalArea;
