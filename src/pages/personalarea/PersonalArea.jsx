import { useEffect, useState } from "react";
import style from "./PersonalArea.module.css";
import MyModal from "../../components/UI/MyModal/MyModal";
import { Button } from "../../components/UI/MyButton/Button";
import ScrollToTop from "../../assets/scroll";
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/postList/PostList";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../store/services/getUserData";
import { Loader } from "../../components/loader/Loader";
const PersonalArea = () => {
    ScrollToTop();
    const [modal, setModal] = useState(false);
    
    const dispatch = useDispatch();
    const userData = useSelector(state => state.userData.problemsData);
    const userID = useSelector(state => state.user.userID);
    useEffect(() => {
    const getUser = async () => {
      const data = await dispatch(getUserData(userID))
    };
    getUser();
    },[dispatch, userID]);     

    const createPost =  () => {
      setModal(false);   
    }

    const updateList = () => {
     dispatch(getUserData(userID));
    }

  return (
    <div className={style.container}>
      <h2>Личный кабинет</h2>
        <div className={style.records}>
          <p>Мои обращения</p>
          <Button onClick={() => setModal(true)}>Сообщить о проблеме</Button>
        </div>
        {!!userData ? <PostList  userData={userData}/> : <p className={style.pp}>У вас нет обращений</p>}
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} updateList = {updateList} />
        </MyModal>
    </div>
  );
};

export default PersonalArea;
