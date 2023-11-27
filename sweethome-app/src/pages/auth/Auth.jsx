import { Button } from "../../components/UI/Button";
import style from "./Auth.module.css";
import {useForm} from "react-hook-form"
const Auth = () => {
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
      <p className={style.title}>Войти</p>
        <input required="" placeholder="Email" type="email" className={style.input} />
        <div>{errors?.email && <span>Все поля должны быть</span>}</div>
        <input {...register("pass", {required: true})} required="" placeholder="Пароль" type="password" className={style.input} />
        <div>{errors?.pass && <span>Все поля должны быть заполнены!</span>}</div>
      <Button>Войти</Button>
     </form>
    </div>
  );
};

export default Auth;
