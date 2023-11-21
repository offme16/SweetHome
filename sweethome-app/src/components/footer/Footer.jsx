import style from "./Footer.module.css";
import icon from "../../assets/images/homeicon.svg"
import { NavLink } from "react-router-dom";
export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__box}>
            <NavLink to={'/'}><div className={style.footer__logo}>
                <img src={icon} alt="images"/>
                <h2>SweetHome</h2>
            </div></NavLink>
            <nav className={style.footer__navigate}>
                <ul>
                    <NavLink to={`/price`}><li>Подписки</li></NavLink>
                    <NavLink to={`/service`}><li>Наши услуги</li></NavLink>
                </ul>
            </nav>
            </div>
            <div className={style.called}>
                <h5>Связаться с нами</h5>
                <div className={style.call}><span>E-MAIL: </span><p> hi@sweethome.com</p></div>
                <div className={style.call}><span>ПОЗВОНИТЬ: </span><p> 8(927)-033-69-39</p></div>
            </div>
        </footer>
    )
}