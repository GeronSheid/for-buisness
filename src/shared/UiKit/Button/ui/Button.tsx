import { IButton } from "../types/ButtonTypes";
import styles from './Button.module.scss';

export const Button: React.FC<IButton> = ({type, btnType, children, href, onClick }) => {
  return (
    <>
        {type === 'link'
            ?
            <a className={styles.btn} href={href}>
                {children}
            </a>
            :
            null
        }
        {type === 'btn'
            ?
            <button onClick={onClick} className={styles.btn} type={btnType}>
                {children}
            </button>
            :
            null
        }
    </>
  )
}
