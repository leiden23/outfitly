import type { FC } from "react";
import styles from './style.module.css'
import { Button, Card, Column, Row } from "@/shared";

type ChangeAvatarFormProps = {
    onClose: () => void;
}

export const ChangeAvatarForm: FC<ChangeAvatarFormProps> = ({onClose}) => {
    return (
        <Card color="white" className={styles.card}>
            <Column gap={19}>
                <p className={styles.title}>добавление изображения в полный рост</p>
                <Row gap={22}>
                    <div className={styles.window}>
                        <p className={styles.textWindow}>Для загрузки фото<br/>перетащите его<br/>или <span className={styles.textBlue}>откройте в файлах</span></p>
                    </div>
                    <Column gap={28}>
                        <Column gap={124}>
                            <p className={styles.text}>
                                нейросеть создаёт одежду поверх вашего фото,<br/>сохраняя фигуру и внешность<br/>
                                <br/>Требования к фото:<br/><br/>

                                -  фото в полный рост полностью помещается в кадр<br/>
                                -  Хорошее освещение<br/>
                                -  Нет других людей в кадре<br/>
                                -  Без крупной одежды, перекрывающей фигуру<br/>
                                -  формат фото: x y
                            </p>
                            <p className={styles.text}>
                                Я согласна(ен) на <span className={styles.textBlue}>обработку персональных данных</span><br/>
                                Я согласна(ен) на <span className={styles.textBlue}>обработку фото нейросетью</span> 
                            </p>
                        </Column>
                        <Row gap={21}>
                            <Button variant="filled-gray" size="small" onClick={onClose}>Отменить</Button>
                            <Button variant="filled-beige" size="small">Добавить</Button>
                        </Row>
                    </Column>
                </Row>
            </Column>
        </Card>
    )
}