import style from "./Header.module.css";
import icon from "../../assets/images/homeicon.svg"
import { Button } from "../UI/MyButton/Button";
import { NavLink } from "react-router-dom";
import logout from "../../assets/images/logout_icon.png"
import { useState } from "react";
import { USER_LOCALSTORAGE_KEY } from "../../store/const/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userSlice";
export const Header = () => {
    const [auth, setAuth] = useState(null);
    const dispatch = useDispatch();
    const userID = useSelector(state => state.user.userID)
    function out() {
        dispatch(userActions.logout())
    }
    return (
        <header className={style.header}>
            <NavLink to={'/'}>
                <div className={style.header__logo}>
                    <img src={icon} alt="images"/>
                    <h1>SweetHome</h1>
                </div></NavLink>
            <nav className={style.header__navigate}>
                <ul>
                    <NavLink to={`/price`}><li>Подписки</li></NavLink>
                    <NavLink to={`/service`}><li>Наши услуги</li></NavLink>
                    {userID ?  <> 
                                <NavLink to={`/cabinet`}><Button>Личный кабинет</Button></NavLink>
                                <NavLink to={`/`} className={style.logout__icon} onClick={out}><img src={logout} alt="logout"/></NavLink>
                             </>
                          : <NavLink to={`/registration`}><Button>Регистрация</Button></NavLink>
                    }
                </ul>
            </nav>
        </header>
    )
}