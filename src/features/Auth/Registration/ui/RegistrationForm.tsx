import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../../shared/UiKit/Input';
import styles from './RegistrationForm.module.scss';
import { Button } from '../../../../shared/UiKit/Button';

interface IRegistrationForm {
    login: string;
    email: string;
    password: string;
    checkPassword: string;
}

export const RegistrationForm = () => {

    const {
            control, 
            handleSubmit,
            formState: {
                errors
            } 
        } = useForm({
        defaultValues: {
            login: '',
            email: '',
            password: '',
            checkPassword: ''
        }
    })

    const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
        console.log(data)
        console.log('Прошла регистрация')
    }

  return (
    <form 
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
    >
        <Controller
            name='login'
            rules={
                {required: 'Введите логин'}
            }
            control={control}
            render={({ field }) => <Input {...field} placeholder='Введите логин' message={errors.login?.message}/> }
        />
        <Controller
            name='email'
            rules={
                {required: 'Введите ваш email'}
            }
            control={control}
            render={({ field }) => <Input {...field} placeholder='Введите email' message={errors.email?.message}/> }
        />
        <Controller
            name='password'
            rules={
                {
                    required: 'Введите пароль',
                    minLength: {
                        value: 4,
                        message: 'Пароль должен быть длиннее 4 символов'
                    }
                }
            }
            control={control}
            render={({ field }) => <Input {...field} placeholder='Введите пароль' message={errors.password?.message}/>}
        />
        <Controller
            name='checkPassword'
            rules={
                {
                    required: 'Введите пароль',
                    minLength: {
                        value: 4,
                        message: 'Пароль должен быть длиннее 4 символов'
                    }
                }
            }
            control={control}
            render={({ field }) => <Input {...field} placeholder='Повторите пароль' message={errors.checkPassword?.message}/>}
        />
        <div className={styles.btn}>
                <Button type='btn'>Зарегистрироваться</Button>
            </div>
    </form>
  )
}
