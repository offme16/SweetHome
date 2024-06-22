import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./Admin.module.css";
import UserList from "../../components/UserList/UserList";
import { getUserAllData } from "../../store/services/getUserAllData";
import { Loader } from "../../components/loader/Loader";

const Admin = () => {
  const dispatch = useDispatch();
  const userAllData = useSelector(state => state.admin.problemsData);

  useEffect(() => {
    dispatch(getUserAllData());
  }, [dispatch]);


  return (
    <div className={style.adminPanel}>
        {!userAllData ?  <Loader /> :
      <UserList userAllData={userAllData} /> }
    </div>
  );
};

export default Admin;