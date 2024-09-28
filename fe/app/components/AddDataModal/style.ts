import { styled } from "@mui/material/styles";
import {
    Box,
} from "@mui/material";

export const ModalContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    padding: 4,
    outline: "none",
    borderRadius: "8px",
    "h2": {
        marginBottom: 5,
        padding: 5
    }
}));

export const ModalFooter = styled(Box)(({ theme }) => ({
    marginTop: 3,
    display: "flex",
    justifyContent: "flex-end",
    "button": {
        margin: 10
    }
}));