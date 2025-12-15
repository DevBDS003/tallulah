import React, { useState } from "react";
import { Box, Paper } from "@mui/material";

const cardContainerStyle = {
    perspective: "1000px",
    width: "120px",
    height: "200px",
    cursor: "pointer",
};

const cardInnerStyle = (isFlipped: Boolean) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
});

const cardFaceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "8px",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4)",
};

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
        <Box sx={cardContainerStyle} onClick={handleFlip}>
            <Box sx={cardInnerStyle(isFlipped)}>
                <Paper
                    elevation={3}
                    sx={{ ...cardFaceStyle, transform: "rotateY(0deg)" }}
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
                    sx={{ ...cardFaceStyle, transform: "rotateY(180deg)" }}
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
