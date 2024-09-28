import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { DataContainer } from "./style";
import { Box, Typography, Button } from "@mui/material";
import { AddDataModal } from "../AddDataModal";
import { EditDataModal } from '../EditDataModal';

import { DataTable } from "../DataTable";

export const Data = () => {
    const { setAddDataModalOpen } = useContext(DataContext);

    return (
        <DataContainer>
            <Box>
                <Typography variant="h4" color="white">Data for your data needs👍</Typography>
            </Box>
            <Box>
                <Button variant="contained" color="primary" onClick={() => setAddDataModalOpen(true)}>Add Data</Button>
            </Box>

            <Box>
                <DataTable />
            </Box>

            <AddDataModal />
            <EditDataModal />
        </DataContainer>
    )
}