import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/UI/MyButton/Button";
import style from "./Auth.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/services/loginUser";
import { authActions } from "../../store/authenticationSlice";
import { Loader } from "../../components/loader/Loader";
import { toast } from 'react-hot-toast';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = useSelector((state) => state.authentication);
  const handleField = useCallback((value, fieldName) => {
    dispatch(authActions.setField({ value, fieldName }));
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = useCallback(
    async () => {
      try {
        const result = await dispatch(loginUser(authData));
        if (result.meta.requestStatus === "rejected") {
          toast.error(result.payload)
        } else {
          navigate("/");
        }
      } catch (error) {
        toast.error("Произошла ошибка при входе!");
      }
    },
    [dispatch, navigate, authData]
  );

  return (
    <div className={style.container}>
      {authData.isLoading ? <Loader /> :
        <form
        className={style.form}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={style.title}>Войти</p>
        <input
          {...register("userName", { required: true })}
          placeholder="Имя пользователя"
          type="text"
          className={style.input}
          onChange={(e) => handleField(e.target.value, "username")}
        />
        <input
          {...register("password", {
            required: true,
          })}
          placeholder="Пароль"
          type="password"
          className={style.input}
          onChange={(e) => handleField(e.target.value, "password")}
        />
        <div className={style.error}>
          {errors?.password && <em>Поля не заполнены!</em>}
        </div>
        <Button>Войти</Button>
      </form> 
      }
    </div>
  );
};

export default Auth;

