import type { FC } from "react"
import styles from './style.module.css'
import { Column } from "../../../shared/ui/column"
import { Button } from "@/shared"


export const Header: FC = () => {
    return (
        <Column gap={65} className={styles.header} width={254} alignItems={"center"} >
            <h1 className={styles.logo}>outfitly</h1>
            <Column gap={20}>
                <Button variant="text" size="none">Генерация</Button>
                <Button variant="text" size="none">Гардероб</Button>
                <Button variant="text" size="none">Образы</Button>
                <Button variant="text" size="none">О проекте</Button>
            </Column>
        </Column>
    )
}