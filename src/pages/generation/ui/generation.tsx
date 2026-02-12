import { useState, type FC } from "react";
import styles from './style.module.css'
import { GenerationPanel } from "@/features/generation-panel";
import { GenerationResult } from "@/features/generation-result";
import { Modal, Row } from "@/shared";
import { SaveOutfitForm } from "@/features/save-outfit-form";


export const GenerationPage: FC = () => {
    const [isSaveOpen, setIsSaveOpen] = useState<boolean>(false)

    return (
        <div className={styles.page}>
            <div>
                <Row gap={207} >
                    <GenerationPanel />
                    <GenerationResult
                        onSaveClick={() => setIsSaveOpen(true)} />
                </Row>
                <Modal isOpen={isSaveOpen}>
                    <SaveOutfitForm onClose={() => setIsSaveOpen(false)} />
                </Modal>
            </div>
        </div>
    )
}