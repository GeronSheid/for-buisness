import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../../shared/UiKit/Input';
import styles from './Auth.module.scss';

import type { IAuthForm } from '../types/AuthTypes';
import { Button } from '../../../../shared/UiKit/Button';


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
            rules={
                {required: true}
            }
            control={control}
            render={({field}) => <Input {...field} placeholder='Введите логин'/>}
        />
        <Controller
            name='password'
            rules={
                {required: true}
            }
            control={control}
            render={({field}) => <Input {...field} placeholder='Введите пароль'/>}
        />
        <Button type='btn'>Войти</Button>
    </form>
  )
}
