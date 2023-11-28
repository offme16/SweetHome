import { Button } from "../../components/UI/Button";
import style from "./Auth.module.css";
import { useForm } from "react-hook-form";

const Auth = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={style.title}>Войти</p>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className={style.input}
        />
        <div>{errors?.email && <span>Поле должно быть заполнено!</span>}</div>
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
