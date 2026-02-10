import type { FC } from "react"
import styles from './style.module.css'
import { Button, Card, Column, Row } from "@/shared"

type AddClothesFormProps = {
    onClose: () => void;
}

export const AddClothesForm: FC<AddClothesFormProps> = ({onClose}) => {
    return (
        <Card className={styles.card} width={551} height={407} color="white">
            <Column gap={22} alignItems="center">
                <p className={styles.title}>Добавление элемента одежды</p>
                <div className={styles.window}>
                    <p className={styles.text}>для загрузки фото перетащите его<br/>или<span className={styles.blueText}> откройте в файлах </span></p>
                </div>
                <Row gap={20}>
                    <Button variant="filled-gray" size="small" onClick={onClose}>Отменить</Button>
                    <Button variant="filled-beige" size="small">Добавить</Button>
                </Row>
            </Column>
        </Card>
    )
}