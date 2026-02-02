import type { FC } from "react"
import styles from './style.module.css'
import { Button, Column } from "@/shared";

type ChangeAvatarProps = {
    imageSrc: string;
}

export const ChangeAvatar: FC<ChangeAvatarProps> = ({imageSrc}) => {
    return (
        <Column gap={20} alignItems="center" className={styles.panel}>
            <div className={styles.window}>
                <img src={imageSrc} alt="Аватар"/>
            </div>
            <Button variant="outlined-white" size="large">Изменить аватар</Button>
        </Column>
    )
}