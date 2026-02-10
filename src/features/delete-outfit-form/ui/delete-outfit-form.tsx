import type { FC } from "react";
import styles from './style.module.css'
import { Button, Card, Column, Row } from "@/shared";

type DeleteOutfitFormProps = {
    onClose: () => void;
}

export const DeleteOutfitForm: FC<DeleteOutfitFormProps> = ({onClose}) => {    
    return (
        <Card color='white' className={styles.card}>
            <Column gap={20} alignItems="center">
                <p className={styles.title}>удаление сохраненного образа</p>
                <div className={styles.window}>outfit</div>
                <Row gap={26}>
                    <Button variant="filled-gray" size="small" onClick={onClose}>Отменить</Button>
                    <Button variant="filled-danger" size="small">Удалить</Button>
                </Row>
            </Column>
        </Card>
    )
}