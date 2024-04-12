import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../../shared/UiKit/Input';
import styles from './Auth.module.scss';

import type { IAuthForm } from '../types/AuthTypes';


export const Auth = () => {

    const {control, handleSubmit} = useForm({
        defaultValues: {
            login: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        console.log(data)
    }

  return (
    <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
    >
        <label>Авторизация</label>
        <Controller
            name='login'
            control={control}
            render={({field}) => <Input {...field} placeholder='Введите логин'/>}
        />
        <Controller
            name='password'
            control={control}
            render={({field}) => <Input {...field} placeholder='Введите пароль'/>}
        />
        <input type="submit"/>
    </form>
  )
}
