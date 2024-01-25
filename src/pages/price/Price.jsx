import style from "./Price.module.css";
import curve from "../../assets/images/curveprice.svg"
import curvew from "../../assets/images/curvewhite.svg"
import foto from "../../assets/images/shild.png"
import { Link } from "react-router-dom";
import ScrollToTop from "../../services/scroll";
const Price = () => {
    ScrollToTop();
    return (
        <div className={style.container}>
            <div className={style.slogan}>
                  <h1>Попрощайтесь со списком дел.</h1>
                  <p>От небольших работ до неожиданного ремонта — мы поможем вам.</p>  
            </div>
            <div className={style.curve}><img src={curve} alt="rr"/></div>
            <div className={style.options}>
                <div className={style.options__descr}>
                    <h2>Вариант подписки</h2>
                    <p>Стоимость членства варьируется в зависимости от местоположения <br />и размера дома.
                         Узнайте точную цену, когда запланируете бесплатную встречу.</p>
                </div>
                <div className={style.options__card}>
                    <div className={style.options__card_box}>
                        <span>ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ</span>
                        <h3>Годовое членство</h3>
                        <p>От 10`000 рублей в месяц, 120`000 рублей в год оплачиваются авансом. Сэкономьте два месяца!</p>
                    </div>                   
                </div>
                <Link to={'/login'}><button className={style.btn}>Начать</button></Link>
                <div className={style.list}>
                <ul>
                    <li>Один опытный, проверенный мастер</li>
                    <li>2 посещения каждые 4-5 недель</li>
                    <li>Профилактический уход за домом</li>
                    <li>Полезные бонусы и сезонные предложения</li>
                    <li>Неограниченная координация третьих сторон</li>
                </ul>
                </div>
            </div>
            <div className={style.curveW}><img src={curvew} alt="rr"/></div>
            <div className={style.garant}>
                <div><img src={foto} alt="w"/></div>
                <div className={style.garant__descr}>
                    <h2>Гарантия удовлетворения</h2>
                    <p>Счастье участника стоит на первом месте. Будьте спокойны с нашей гарантией качества обслуживания.
                        Если вы не будете полностью удовлетворены в течение первых 30 дней,
                        мы полностью вернем вам деньги. После этого вы можете отменить свое членство в любое время без каких-либо штрафов.</p>
                </div>
            </div>
        </div>
    )
}
export default Price;