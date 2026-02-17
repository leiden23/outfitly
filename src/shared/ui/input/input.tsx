import type { FC, InputHTMLAttributes } from "react";
import styles from './style.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
}

export const Input: FC<InputProps> = ({placeholder, ...props}) => {
    return (
        <input {...props} className={styles.input} type="text" placeholder={placeholder}/>
    )
}