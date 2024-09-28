import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    'button': {
        marginRight: theme.spacing(1),
        height: '40px',
        width: '40px',
    }
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

export const StyledTable = styled(Table)(({ theme }) => ({
    minWidth: 415,
    backgroundColor: theme.palette.background.paper,
}));