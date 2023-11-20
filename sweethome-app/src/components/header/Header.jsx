import style from "./Header.module.css";
import icon from "../../assets/images/homeicon.svg"
import { Button } from "../UI/Button";
import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to={'/main'}><div className={style.header__logo}>
                <img src={icon} alt="images"/>
                <h1>SweetHome</h1>
            </div></NavLink>
            <nav className={style.header__navigate}>
                <ul>
                    <NavLink to={``}><li>Подписки</li></NavLink>
                    <NavLink to={``}><li>Наши услуги</li></NavLink>
                    <NavLink to={`/login`}><Button>Регистрация</Button></NavLink>
                </ul>
            </nav>
        </header>
    )
}