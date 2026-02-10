import type { FC } from "react";
import styles from './style.module.css'
import { Button, Card, Column, Row } from "@/shared";

type DeleteClothesFormProps = {
    onClose: () => void;
}

export const DeleteClothesForm: FC<DeleteClothesFormProps> = ({onClose}) => {
    return (
        <Card color="white" className={styles.card}>
            <Column gap={22} alignItems="center">
                <p className={styles.title}>Удаление элемента одежды</p>
                <div className={styles.window}>
                    clothes
                </div>
                <Row gap={20}>
                    <Button variant="filled-gray" size="small" onClick={onClose}>Отменить</Button>
                    <Button variant="filled-danger" size="small">Удалить</Button>
                </Row>
            </Column>
        </Card>
    )
}