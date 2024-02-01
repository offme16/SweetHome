import style from "./Header.module.css";
import icon from "../../assets/images/homeicon.svg"
import { Button } from "../UI/MyButton/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
    const { userId } = useSelector((state) => state.registration);
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
                    {userId ? <NavLink to={`/cabinet`}><Button>Личный кабинет</Button>
                    </NavLink> : <NavLink to={`/registration`}><Button>Регистрация</Button></NavLink>}
                </ul>
            </nav>
        </header>
    )
}