import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Registration.module.css";
import {useForm} from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { registActions } from "../../store/registSlice";
import { useCallback } from "react";
import { registUser } from "../../store/services/registerUser";
import { Loader } from "../../components/loader/Loader";
import { toast } from 'react-hot-toast';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector(state => state.registration)
  const handleField = useCallback((value, fieldName) => {
    dispatch(registActions.setField({ value, fieldName }));
  }, [dispatch])

    const {
        register,
        formState:{
            errors,   
        },
        handleSubmit,
    } = useForm({
      mode: "onBlur"
    });

      const onSubmit = useCallback( async () => {
        const result = await  dispatch(registUser(authData));
         if(result.meta.requestStatus === "fulfilled") {
            navigate("/");
          } else {
            toast.error(result.payload);
          }
      },[dispatch, navigate, authData]);
      
  return (
    <div className={style.container}>
      { authData.isLoading ? <Loader /> : <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
      <p className={style.title}>Регистрация</p>
      <p className={style.message}>Зарегистрируйтесь сейчас и получите доступ к нашему приложению.</p>
      <div className={style.flex}>
          <input {...register("name", {required: true})}  placeholder="Имя пользователя" type="text" className={style.input} onChange={e => handleField(e.target.value, "username")}/> 
          <input {...register("lastname", {required: true})} placeholder="Фамиллия" type="text" className={style.input} onChange={e => handleField(e.target.value, "lastname")}/>
      </div>
      <input {...register("surname", {required: true})} placeholder="Отчество" type="text" className={style.input} onChange={e => handleField(e.target.value, "surname")}/>
        <input {...register("email", {required: true})} placeholder="Email" type="email" className={style.input} onChange={e => handleField(e.target.value, "email")}/>
        <input {...register("number", {required: true})} placeholder="Телефон" type="number" className={style.input} onChange={e => handleField(e.target.value, "phonenumber")}/>
        <input {...register("address", {required: true})} placeholder="Адрес" type="text" className={style.input} onChange={e => handleField(e.target.value, "address")}/>
        <input {...register("pass", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })} placeholder="Пароль" type="password" className={style.input} onChange={e => handleField(e.target.value, "password")}/>
          <div>{errors?.pass && <em>"Пароль должен содержать минимум 8 символов, включая только буквы и цифры только на латинице."</em>}</div>
          <div>
            {errors.name && errors.secname && errors.surname && <em>Все поля должны быть заполнены!</em>}
          </div>
      <Button >Зарегистрироваться</Button>
      <p className={style.signin}>
      У вас уже есть учетная запись?<Link to={'/auth'}>Авторизоваться</Link>
      </p>
     </form>}
    </div>
  );
};

export default Registration;
