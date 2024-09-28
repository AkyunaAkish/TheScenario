import { styled } from "@mui/material/styles";
import {
    Container,
} from "@mui/material";

export const DataContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: "2rem",
}));