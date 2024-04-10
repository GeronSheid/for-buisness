import { useLocation, useNavigate } from "react-router-dom";
import { authorize } from "../../../app/store/authSlice";
import { useAppDispatch } from "../../../shared/utils/hooks/reduxHooks";
import Input from "../../../shared/UiKit/Input";
import { FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function AuthPage() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location?.state?.from ? location.state.from.pathname : '/auth';

  interface FormInterface {
    email: string;
    password: string;
  }

  const {register, handleSubmit, watch, formState: { errors }} = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = (data) => console.log(data);

  

  return (
    <div className="container">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('email', {required: true})}/>
        {errors.email && <span style={{color: 'red'}}>Это обязательное поле</span>}
        <input type="password" {...register('password', {required: true})}/>
        {errors.email && <span style={{color: 'red'}}>Это обязательное поле</span>}
        <input type="submit" value={'Нажми'}/>
      </form>
      
    </div>
  )
}

export default AuthPage