import { Link } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Login.module.css";
import {useForm} from "react-hook-form"
const Login = () => {
    const {
        register,
        watch,
        formState:{
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
      mode: "onBlur"
    });
    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
        reset();
    }
  return (
    <div className={style.container}>
     <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Регистрация</p>
      <p className={style.message}>Зарегистрируйтесь сейчас и получите полный доступ к нашему приложению.</p>
      <div className={style.flex}>
          <input {...register("name", {required: true})} placeholder="Имя" type="text" className={style.input} /> 
          <input {...register("secname", {required: true})} placeholder="Фамиллия" type="text" className={style.input} />
      </div>
      <input {...register("surname", {required: true})} placeholder="Отчество" type="text" className={style.input} />
        <input required="" placeholder="Email" type="email" className={style.input} />
        <input required="" placeholder="Телефон" type="number" className={style.input} />
        <input required="" placeholder="Адрес" type="text" className={style.input} />
        <input {...register("pass", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })} placeholder="Пароль" type="password" className={style.input} />
        <input
          {...register("confirmPassword", {
           required: true,
           validate: (value) => value === watch("pass"),
          })}
          placeholder="Подтвердите пароль"
          type="password"
          className={style.input}/>
          <div>{errors?.confirmPassword && <span>Пароли должны совпадать!</span>}</div>
          <div>
            {errors.name && errors.secname && errors.surname && <span>Все поля должны быть заполнены!</span>}
          </div>
      <Button >Зарегистрироваться</Button>
      <p className={style.signin}>
      У вас уже есть учетная запись?<Link to={'/auth'}>Авторизоваться</Link>
      </p>
     </form>
    </div>
  );
};

export default Login;
