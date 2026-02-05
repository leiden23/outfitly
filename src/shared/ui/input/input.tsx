import type { FC } from "react";
import styles from './style.module.css'

type InputProps = {
    placeholder: string;
}

export const Input: FC<InputProps> = ({placeholder}) => {
    return (
        <input className={styles.input} type="text" placeholder={placeholder}/>
    )
}