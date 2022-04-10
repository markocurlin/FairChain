import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BlockchainTable = ({ data, address }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="left">From</TableCell>
                            <TableCell align="left">Direction</TableCell>
                            <TableCell align="left">To</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data?.map((row) => (
                            <TableRow
                                key={row.to}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                color='red'
                            >
                                <TableCell component="th" scope="row">{row.date}</TableCell>
                                <TableCell align="left">{row.from}</TableCell>
                                <TableCell align="center">{row.to == address ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}</TableCell>
                                <TableCell align="left">{row.to}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default BlockchainTable;