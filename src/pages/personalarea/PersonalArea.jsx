import style from "./PersonalArea.module.css"
const PersonalArea = () =>{
    return (
        <div className={style.container}>
            <div className={style.container_content}>
                <h2>Личный кабинет</h2>
                <section>setting</section>
                <h5>таблица календарь</h5>
            </div>
        </div>
    )
};
export default PersonalArea;