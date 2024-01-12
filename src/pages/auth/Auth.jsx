import { Button } from "../../components/UI/Button";
import style from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data)
    if (username === 'offmemyg@gmail.com' && password === '12345678a') {
        navigate('/cabinet') 
    }
    else alert("пароль или емаил неправильный")
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Войти</p>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          onChange={(e) => setUsername(e.target.value)}
          className={style.input}
        />
        <input
          {...register("pass", {
            required: true,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Пароль должен содержать минимум 8 символов, включая только буквы и цифры только на латинице.",
            },
          })}
          required=""
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={style.input}
        />
        <div>
          {errors?.pass && <span>{errors.pass.message}</span>}
        </div>
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Auth;
