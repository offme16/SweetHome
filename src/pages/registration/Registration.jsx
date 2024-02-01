import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Registration.module.css";
import {useForm} from "react-hook-form"
import { sendUser } from "../../services/AsyncAction/registration";
const Registration = () => {
  const navigate = useNavigate()
    const {
        register,
        formState:{
            errors,   
        },
        handleSubmit,
        reset,
    } = useForm({
      mode: "onBlur"
    });
    const onSubmit = ( data ) => {
        sendUser(data);
        reset();
        navigate("/cabinet");
      }

  return (
    <div className={style.container}>
     <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Регистрация</p>
      <p className={style.message}>Зарегистрируйтесь сейчас и получите доступ к нашему приложению.</p>
      <div className={style.flex}>
          <input {...register("name", {required: true})}  placeholder="Имя пользователя" type="text" className={style.input} /> 
          <input {...register("lastname", {required: true})} placeholder="Фамиллия" type="text" className={style.input} />
      </div>
      <input {...register("surname", {required: true})} placeholder="Отчество" type="text" className={style.input} />
        <input {...register("email", {required: true})} placeholder="Email" type="email" className={style.input} />
        <input {...register("number", {required: true})} placeholder="Телефон" type="number" className={style.input} />
        <input {...register("address", {required: true})} placeholder="Адрес" type="text" className={style.input} />
        <input {...register("pass", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })} placeholder="Пароль" type="password" className={style.input}/>
          <div>{errors?.pass && <em>"Пароль должен содержать минимум 8 символов, включая только буквы и цифры только на латинице."</em>}</div>
          <div>
            {errors.name && errors.secname && errors.surname && <em>Все поля должны быть заполнены!</em>}
          </div>
      <Button >Зарегистрироваться</Button>
      <p className={style.signin}>
      У вас уже есть учетная запись?<Link to={'/auth'}>Авторизоваться</Link>
      </p>
     </form>
    </div>
  );
};

export default Registration;
