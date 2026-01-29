import type { FC } from "react"
import styles from './style.module.css'


export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <span>
                Главная
            </span>
            <span>
                Список пользователей
            </span> 
        </div>
    )
}