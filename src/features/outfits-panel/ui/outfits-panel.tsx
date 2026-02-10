import type { FC } from "react";
import styles from './style.module.css'
import { OutfitsCard } from "@/entities/outfits/outfits-card";
import { ArrowButton, Button, Column, Row } from "@/shared";

type OutfitsPanelProps = {
    onDeleteClick: () => void;
}

export const OutfitsPanel: FC<OutfitsPanelProps> = ({onDeleteClick}) => {
    return (
        <Column gap={55}>
            <div style={{position: 'relative'}}>
                <OutfitsCard rotate={1.67} className={styles.card1} />
                <OutfitsCard rotate={1.08} className={styles.card2} />
                <OutfitsCard rotate={0} className={styles.card3} />
                <OutfitsCard rotate={0} className={styles.card4} />
                <OutfitsCard rotate={0} className={styles.card5} />
                <OutfitsCard rotate={1.67} className={styles.card6} />
                <OutfitsCard rotate={0} className={styles.card7} />
                <OutfitsCard rotate={0} className={styles.card8} />
                <OutfitsCard rotate={0} className={styles.card9} />
                <OutfitsCard rotate={0} className={styles.card10} />
            </div >
            <div className={styles.buttonPanel}>
                <Row gap={256}>
                    <Row gap={10}>
                        <ArrowButton variant="rounded-left" color="white"/>
                        <ArrowButton variant="rounded-right" color="white"/>
                    </Row>
                    <Button variant="outlined-white" size="medium" onClick={(onDeleteClick)}>Удалить</Button>
                </Row>
            </div>
        </Column>
    )
}