import { Button } from "../../components/UI/MyButton/Button";
import style from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/AsyncAction/login";

const Auth = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    loginUser(data);
    navigate("/cabinet");
  };

  return (
    <div className={style.container}>
      <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Войти</p>
        <input
          {...register("userName", { required: true })}
          placeholder="Имя пользователя"
          type="text"
          className={style.input}
        />
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Пароль"
          type="password"
          className={style.input}
        />
        <div className={style.error}>
          {errors?.password && <em>!</em>}
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Auth;
