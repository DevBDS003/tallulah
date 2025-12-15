import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import "../styles/pageContainer.css";

interface PageContainerProps {
    children: ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <Box className="container">
            <Box className="table">{children}</Box>
        </Box>
    );
};
export default PageContainer;
