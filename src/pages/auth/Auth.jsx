import { Button } from "../../components/UI/MyButton/Button";
import style from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()
  const {
    register,
    formState: {  },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async () => {
    try {
      const response = await axios.post(`https://localhost:7045/user/login`, {
        userName,
        password
      }, {
        'accept': "*/*",
        'Content-Type': "application/json"
      });

      if (response.status === 200) {
        navigate("/cabinet");
      } else {
        setErrorMessage("Логин или пароль неправильный");
      }
    }
    catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Логин или пароль неправильный");
      } else {
        setErrorMessage("Произошла ошибка. Пожалуйста, попробуйте снова.");
      }
    }
  };

  return (
    <div className={style.container}>
      <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Войти</p>
        <input
          {...register("userName", { required: true })}
          placeholder="Имя пользователя"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className={style.input}
        />
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={style.input}
        />
        <div className={style.error}>
          {errorMessage && <em>{errorMessage}</em>}
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Auth;
