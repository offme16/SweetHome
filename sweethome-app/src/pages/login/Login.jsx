import { Link } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import style from "./Login.module.css";
import {useForm} from "react-hook-form"
const Login = () => {
    const {
        register,
        formState:{
            errors,
        },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
    }
  return (
    <div className={style.container}>
     <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Регистрация</p>
      <p className={style.message}>Зарегистрируйтесь сейчас и получите полный доступ к нашему приложению.</p>
      <div className={style.flex}>
          <input {...register("name", {required: true})} placeholder="Имя" type="text" className={style.input} /> 
          <input required="" placeholder="Фамиллия" type="text" className={style.input} />
      </div>
        <input required="" placeholder="Email" type="email" className={style.input} />
        <input required="" placeholder="Пароль" type="password" className={style.input} />
        <input required="" placeholder="Подтвердите пароль" type="password" className={style.input} />
        <div>{errors?.name && <span>Все поля должны быть заполнены!</span>}</div>
      <Button>Зарегистрироваться</Button>
      <p className={style.signin}>
      У вас уже есть учетная запись?<Link to={'/auth'}>Авторизоваться</Link>
      </p>
     </form>
    </div>
  );
};

export default Login;
