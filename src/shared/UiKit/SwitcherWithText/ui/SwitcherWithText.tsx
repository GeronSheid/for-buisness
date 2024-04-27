import React, { FC, useState } from 'react';
import styles from './SwitcherWithText.module.scss';

interface ISwithcer {
    label1: string;
    label2: string;
    state: boolean;
    toggleFunction: () => void;
}

export const SwitcherWithText: FC<ISwithcer> = ({label1, label2, state, toggleFunction}): React.ReactNode => {
    const initialState = state ? state : false;
    console.log(initialState)
  return (
    <div className={styles.wrap}>
        <button className={initialState ? styles.btn : `${styles.btn} ${styles.btn_active}` } onClick={toggleFunction}>{label1}</button>
        <button className={initialState ? `${styles.btn} ${styles.btn_active}` :  styles.btn} onClick={toggleFunction}>{label2}</button>
    </div>
  )
}
