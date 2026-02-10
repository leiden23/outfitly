import { useState, type FC } from "react";
import styles from './style.module.css'
import { OutfitsPanel } from "@/features/outfits-panel";
import { Modal } from "@/shared";
import { DeleteOutfitForm } from "@/features/delete-outfit-form";


export const OutfitsPage: FC = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    
    return (
        <div className={styles.page}>
            <OutfitsPanel onDeleteClick={() => setIsDeleteOpen(true)}/>
            <Modal isOpen={isDeleteOpen}>
                <DeleteOutfitForm onClose={() => setIsDeleteOpen(false)}/>
            </Modal>
        </div>
    )
}