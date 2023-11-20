import { Button } from "../../components/UI/Button";
import style from "./Main.module.css";
import im from "../../assets/images/group.png"
import SimSlider from "../../components/slider/SimSlider";
import { NavLink } from "react-router-dom";
const Main = () => {
    return(
        <div>
            <section className={style.container}>
                <div className={style.container__informbox}>
                    <h2>Присоединяйтесь к SweetHome и избавьтесь от хлопот, связанных с текущим содержанием и обслуживанием дома.</h2>
                    <NavLink to={'/login'}><Button>Присоединиться</Button></NavLink>
                </div>
            </section>

            <section className={style.infoblock}>
                <div className= {style.description__block}>
                    <h3>Наше дело без стресса</h3>
                    <p>SweetHome делает жизнь лучше для занятых семей, пожилых людей и всех, кто находится между ними. 
                        Начиная с 12000 рублей в месяц, 
                        наслаждайтесь 2 посещениями каждые 4-5 недель и неограниченной поддержкой и координацией.</p>
                </div>
                <div className= {style.block_box}>
                    <div className= {style.block_box__item}>
                        <h4>Ежемесячные визиты с вашим мастером</h4>
                        <span>РАБОТА ПО ДОМУ</span>
                        <p>Мелкие электромонтажные и сантехнические работы, мелкий ремонт бытовой техники, установка телевизоров и устройств,
                         сборка мебели, регулировка дверей, подвешивание произведений искусства, герметизация и затирка, заделка и покраска и т. д.</p>
                    </div>
                    <div className= {style.block_box__item}>
                        <h4>Проактивное обслуживание дома</h4>
                        <span>ПРОФИЛАКТИКА</span>
                        <p>Замена воздушного фильтра, чистка вентиляционных отверстий, чистка змеевика холодильника пылесосом, чистка вывоза мусора,
                             чистка стирально-сушильной машины и т. д.</p>
                    </div>
                    <div className= {style.block_box__item}>
                        <h4>Координация специализированной работы</h4>
                        <span>СПЕЦИАЛИЗИРОВАННЫЙ РЕМОНТ</span>
                        <p>Для вакансий, требующих присутствия специалиста, мы от вашего имени найдём и назначим надежных поставщиков.</p>
                        <span>СЕЗОННАЯ РАБОТА</span>
                        <p>Мы предлагаем и полностью координируем такие льготы, как чистка ковров, мытье окон и развешивание праздничных гирлянд!</p>
                    </div>
                </div>
            </section>

            <section className={style.recomend}>
                <h2>SweetHome - лучший выбор.</h2>
                <p>Присоединяйтесь к более чем 1 000 домовладельцев, которые экономят<br /> время, деньги и стресс с помощью Honey Homes.</p>
                <img src={im} alt="images"/>
            </section>
            <section className={style.slider}>
                <h2>Наши подписчики</h2>
                <div className={style.slider__box}>
                    <SimSlider />
                </div>
                    
            </section>
        </div>
        
    )
}
export default Main;