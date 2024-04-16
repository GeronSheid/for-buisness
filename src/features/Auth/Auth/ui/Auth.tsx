import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../../shared/UiKit/Input';
import styles from './Auth.module.scss';

import type { IAuthForm } from '../types/AuthTypes';
import { Button } from '../../../../shared/UiKit/Button';
import { useAuth } from '../../../../entities/viewer/model/selectors';

export const Auth = () => {
    const isAuth = useAuth();
    const {
        control,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            login: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = (data) => {
        console.log(data)
        console.log(isAuth)
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
                    { required: 'Введите логин' }
                }
                control={control}
                render={({ field }) => <Input {...field} placeholder='Введите логин' message={errors.login?.message} />}
            />
            <Controller
                name='password'
                rules={{
                    required: 'Введите пароль',
                    minLength: {
                        value: 4,
                        message: 'Пароль должен быть больше 4 символов'
                    }
                }}
                control={control}
                render={({ field }) => <Input {...field} placeholder='Введите пароль' message={errors.password?.message} />}
            />
            <div className={styles.btn}>
                <Button type='btn'>Войти</Button>
            </div>
        </form>
    )
}
