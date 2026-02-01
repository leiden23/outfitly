import type { FC } from "react"
import { Button, Column } from "@/shared"
import styles from './style.module.css'

type GenerationResultProps = {
    children?: React.ReactNode;
}

export const GenerationResult: FC<GenerationResultProps> = ({children}) => {
    return (
        <Column gap={20} width={210} height={640} alignItems="center" style={{marginTop:'180px'}} className={styles.result}>
            <div className={styles.window}> 
                {children}
            </div>
            <Button variant="outlined-white" size="medium">Сохранить</Button>
        </Column>
    )
}