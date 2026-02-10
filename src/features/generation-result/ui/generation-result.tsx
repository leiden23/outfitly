import type { FC } from "react"
import styles from './style.module.css'
import { Button, Column } from "@/shared"

type GenerationResultProps = {
    onSaveClick: () => void;
    children?: React.ReactNode;
}

export const GenerationResult: FC<GenerationResultProps> = ({onSaveClick, children}) => {
    return (
        <Column gap={20} width={210} height={640} alignItems="center" style={{marginTop:'180px'}} className={styles.result}>
            <div className={styles.window}> 
                {children}
            </div>
            <Button variant="outlined-white" size="medium" onClick={onSaveClick}>Сохранить</Button>
        </Column>
    )
}
