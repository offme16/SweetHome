import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Admin.module.css";
import UserList from "../../components/UserList/UserList";

const userAllData = [
    {
        "id" :"1ddfb731-ccf9-4067-876b-52909008ea35",
        "problems": "gfdfgdfgdf",
        "description": "gdfgdfgdf",
        "dateOfsolution": "2024-05-16T21:00:00",
        "addres": "fffff",
        "phone": "89270387911",
        "userId": "74078409-495c-448d-8083-29d1824fc559",
    }
]



const Admin = () => {
    // const dispatch = useDispatch();
    // //const userAllData = useSelector();

    // useEffect(() => {
    //     dispatch()
    // }, [dispatch])

    return (
        <div className={style.adminPanel}>
             <UserList  userAllData={userAllData}/>
        </div>
    )
}

export default Admin;