import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableRow, StyledTableContainer, StyledTable } from './style';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Data } from '../../context/DataContext';
import CircularProgress from '@mui/material/CircularProgress';

export const DataTable = () => {
    const { data, removeData, dataIsLoading, setEditDataModalOpen, setDataToEdit } = useContext(DataContext);

    return (
        <StyledTableContainer>
            <StyledTable aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Data</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataIsLoading ? <StyledTableRow><StyledTableCell><CircularProgress size={15} /></StyledTableCell></StyledTableRow> : (
                        data.map((dataValue: Data) => (
                            <StyledTableRow key={dataValue._id}>
                                <StyledTableCell component="th" scope="row">
                                    {dataValue.data}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <Fab color="secondary" aria-label="edit" onClick={() => {
                                        setDataToEdit(dataValue)
                                        setEditDataModalOpen(true)
                                    }}>
                                        <EditIcon />
                                    </Fab>
                                    <Fab color="error" aria-label="delete" onClick={() => removeData(dataValue._id)}>
                                        <DeleteIcon />
                                    </Fab>
                                </StyledTableCell>
                            </StyledTableRow>
                        )))}

                    {!data || !data.length && !dataIsLoading ? (
                        <StyledTableRow>
                            <StyledTableCell>
                                No data... yet
                            </StyledTableCell>
                        </StyledTableRow>)
                        : <></>}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
}
