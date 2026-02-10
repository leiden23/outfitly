import { useState, type FC } from "react"
import styles from './style.module.css'
import { WardrobePanel } from "@/features/wardrobe-panel"
import { ChangeAvatar } from "@/features/change-avatar"
import { Row } from "@/shared"
import { Modal } from "@/shared"
import { AddClothesForm } from "@/features/add-clothes-form"
import { DeleteClothesForm } from "@/features/delete-clothes-form"
import { ChangeAvatarForm } from "@/features/change-avatar-form"

export const WardrobePage: FC = () => {

    const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [isChangeOpen, setIsChangeOpen] = useState<boolean>(false);

    return (
        <div className={styles.page} >
            <div className={styles.container}>
                <Row gap={99}>
                    <WardrobePanel 
                        onAddClick={() => setIsAddOpen(true)} 
                        onDeleteClick={() => setIsDeleteOpen(true)}
                    />
                    <ChangeAvatar
                        imageSrc="/img/avatar.png"
                        onClick={() => setIsChangeOpen(true)}
                    />
                </Row>
            <Modal isOpen={isAddOpen}>
                <AddClothesForm onClose={() => setIsAddOpen(false)}/>
            </Modal>
            <Modal isOpen={isDeleteOpen}>
                <DeleteClothesForm onClose={() => setIsDeleteOpen(false)}/>
            </Modal>
            <Modal isOpen={isChangeOpen}>
                <ChangeAvatarForm onClose={() => setIsChangeOpen(false)}/>
            </Modal>
            </div>
        </div>
        
    )
}