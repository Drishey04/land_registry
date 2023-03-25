import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(number, owner_address, area, price, survey_no, document, verify) {
    return { number, owner_address, area, price, survey_no, document, verify };
}

const rows = [
    createData(1,'loremipsum', 350 ,12345678, 123450,'cp_pdf', 'verify')
];

const VerifyLandPage = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="center">Owner&nbsp;Address</TableCell>
                    <TableCell align="center">Area</TableCell>
                    <TableCell align="center">Survey&nbsp;No.</TableCell>
                    <TableCell align="center">Document</TableCell>
                    <TableCell align="center">Verify</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.number}
                    </TableCell>
                    <TableCell align="center">{row.owner_address}</TableCell>
                    <TableCell align="center">{row.area}</TableCell>
                    <TableCell align="center">{row.survey_no}</TableCell>
                    <TableCell align="center">{row.document}</TableCell>
                    <TableCell align="center"><Button variant="contained">{row.verify}</Button></TableCell>
                    </TableRow>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default VerifyLandPage;