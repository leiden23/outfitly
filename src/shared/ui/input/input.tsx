import type { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from './style.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string;
    error?: boolean;
    errorMessage?: string;
}

export const Input: FC<InputProps> = ({placeholder, error, errorMessage, ...props}) => {
    return (
        <div>
            <input {...props} className={clsx(styles.input, error && styles.error)} placeholder={placeholder}/>
            {error && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
    )
}