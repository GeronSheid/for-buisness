import { FC, useState } from "react";
import styles from './AuthorizationWindow.module.scss';
import { Auth } from "../../../features/Auth/AuthByEmail";
import { RegistrationForm } from "../../../features/Auth/Registration";
import { SwitcherWithText } from "../../../shared/UiKit/SwitcherWithText";



export const AuthorizationWindow: FC = (): React.ReactNode => {
  const [authReg, authRegToggle] = useState<boolean>(false);
  return (
    <div className={styles.authWrap}>
        <div>
          <SwitcherWithText
            label1="Авторизация"
            label2="Регистрация"
            state={authReg}
            toggleFunction={() => authRegToggle(!authReg)}
          />
        </div>
        {authReg
          ?
          <RegistrationForm/>
          :
          <Auth/>
        }
        <div>
          {/* Другие варианты для авторизации */}
        </div>
    </div>
  )
}
