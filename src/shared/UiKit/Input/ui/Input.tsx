import styles from './Input.module.scss';

export const Input = ({value, ...props} : any) => {
  return (
    <>
      <div className={styles.inputWrapp}>
        <input type="text" placeholder={props.placeholder} value={value}/>
      </div>
    </>
  )
}
