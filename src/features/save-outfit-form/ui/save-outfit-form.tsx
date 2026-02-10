import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from './style.module.css'
import { Button, Card, Column, Row } from "@/shared";

type SaveOutfitFormProps = {
    onClose: () => void;
}

export const SaveOutfitForm: FC<SaveOutfitFormProps> = ({onClose}) => {
    const navigate = useNavigate();
    
    return (
        <Card color='white' className={styles.card}>
            <Column gap={20} alignItems="center">
                <p className={styles.title}>Образ успешно сохранен</p>
                <div className={styles.window}>outfit</div>
                <Row gap={26}>
                    <Button variant="filled-gray" size="small" onClick={onClose}>Закрыть</Button>
                    <Button variant="filled-beige" size="small" onClick={() => navigate('/outfits')}>Перейти</Button>
                </Row>
            </Column>
        </Card>
    )
}