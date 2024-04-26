import { FC, useState } from "react";
import styles from './AuthorizationWindow.module.scss';
import { Auth } from "../../../features/Auth/AuthByEmail";



export const AuthorizationWindow: FC = (): React.ReactNode => {
  const [authReg, authRegToggle] = useState<boolean>(true);
  return (
    <div className={styles.authWrap}>
        <div>
          {/* Переключатель авторизации + регистрации */}
        </div>
        {authReg
          ?
          <Auth/>
          :
          <span>
            Регистрация
          </span> 
        }
        <div>
          {/* Другие варианты для авторизации */}
        </div>
    </div>
  )
}
