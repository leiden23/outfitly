import type { FC } from "react"
import styles from './style.module.css'
import { Button, Column } from "@/shared";

type ChangeAvatarProps = {
    imageSrc: string;
    onClick: () => void;
}

export const ChangeAvatar: FC<ChangeAvatarProps> = ({imageSrc, onClick}) => {
    return (
        <Column gap={20} alignItems="center" className={styles.panel}>
            <div className={styles.window}>
                <img src={imageSrc} alt="Аватар"/>
            </div>
            <Button 
                variant="outlined-white" 
                size="large" 
                style={{width: '135px'}}
                onClick={onClick}>
                    Изменить аватар
            </Button>
        </Column>
    )
}