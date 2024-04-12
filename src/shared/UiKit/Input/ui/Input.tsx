import { InputProps } from '../types/InputType';
import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = ({value, onChange, ...props}) => {
  return (
    <>
      <div className={styles.inputWrapp}>
        <input
          type="text" 
          placeholder={props.placeholder} 
          value={value} 
          onChange={onChange}/>
      </div>
    </>
  )
}
