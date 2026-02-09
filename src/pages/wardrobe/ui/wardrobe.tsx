import { useState, type FC } from "react"
import styles from './style.module.css'
import { WardrobePanel } from "@/features/wardrobe-panel"
import { ChangeAvatar } from "@/features/change-avatar"
import { Row } from "@/shared"
import { Modal } from "@/shared"
import { AddClothesForm } from "@/features/add-clothes-form"

export const WardrobePage: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onAddClick = () => {
        setIsOpen(true);
    }
   

    return (
        <div className={styles.page} >
            <div className={styles.container}>
                <Row gap={99}>
                    <WardrobePanel onAddClick={onAddClick}/>
                    <ChangeAvatar imageSrc="/img/avatar.png"/>
                </Row>
            <Modal isOpen={isOpen}>
                <AddClothesForm onClose={() => setIsOpen(false)}/>
            </Modal>
            </div>
        </div>
        
    )
}