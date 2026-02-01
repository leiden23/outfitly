import type { FC } from "react";
import styles from './style.module.css'
import { GenerationPanel } from "@/features/generation-panel";
import { GenerationResult } from "@/features/generation-result";
import { Row } from "@/shared";

export const GenerationPage: FC = () => {
    return (
        <div className={styles.page}>
            <div className={styles.wardrobeContainer}>
                <Row gap={208} >
                    <GenerationPanel />
                    <GenerationResult />
                </Row>
            </div>
        </div>
    )
}