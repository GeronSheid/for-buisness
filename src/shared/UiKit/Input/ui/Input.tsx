import {forwardRef} from 'react';
import { InputProps } from '../types/InputType';
import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, InputProps>(({value, onChange, ...props}, ref) => {
  return (
      <div className={styles.inputWrapp}>
        <input
          ref={ref}
          type="text" 
          placeholder={props.placeholder} 
          value={value} 
          onChange={onChange}/>
          <span className={styles.inputError}>{props.message}</span>
      </div>
  )
})
