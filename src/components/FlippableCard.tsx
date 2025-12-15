import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import "../styles/flippableCard.css";

interface FlippableCardProps {
    card: string;
    cardName: string;
    back: string;
    initialFlipped?: boolean;
    onFlip?: () => void;
}

const FlippableCard = ({
    card,
    cardName,
    back,
    initialFlipped = false,
    onFlip,
}: FlippableCardProps) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipped);

    const handleFlip = () => {
        const newFlipped = !isFlipped;
        setIsFlipped(newFlipped);
        if (onFlip && newFlipped) {
            onFlip();
        }
    };

    return (
        <Box className="cardContainerStyle" onClick={handleFlip}>
            <Box className={isFlipped ? "cardFlippedStyle" : "cardStyle"}>
                <Paper
                    elevation={3}
                    className="cardFaceStyle"
                >
                    <img
                        src={back}
                        alt="Verso da Carta de Tarô"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                        }}
                    />
                </Paper>
                <Paper
                    elevation={3}
                    className="cardFaceStyleMirror"
                >
                    <img
                        src={card}
                        alt={cardName}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                        }}
                    />
                </Paper>
            </Box>
        </Box>
    );
};
export default FlippableCard;
