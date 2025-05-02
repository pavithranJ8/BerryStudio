import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


function createData(
    transaction_date: Date,
    transaction_type: string,
    description: string,
    day: string,
    total_amount: number,
    adjustment: number,
    charges: number,
    charges_plus_payment: number,
    balance: number,
    id: number,
  ) {
    return {
      transaction_date,
      transaction_type,
      description,
      day,
      total_amount,
      adjustment,
      charges,
      charges_plus_payment,
      balance,
      id,
      subDescription: [
        {
          reference_no: 'XXXX-XXXX-7898',
          Note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          id: 1,
        },
        // {
        //   reference_no: 'XXXX-XXXX-7898',
        //   Note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //   amount: 1,
        // },
      ],
    };
  }

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    // console.log(row,'row');
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' }, background: '#FBFBFC' }} >
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" sx={{color: '#1C1C1C', fontWeight: '400', fontSize: '14px'}}>
            {row.transaction_date.toDateString()}
            <Typography variant="body2" sx={{fontSize: '12px', fontWeight: '400', color: '#747474'}}>
            {row.day}
          </Typography>
          </TableCell>
          <TableCell component="th" scope="row" sx={{color: '#1C1C1C', fontWeight: '500', fontSize: '14px'}}>
            {row.transaction_type} 
            <Typography variant="body2" sx={{fontSize: '12px', fontWeight: '400', color: '#747474'}}>
            {row.description}
          </Typography>
          </TableCell>
          <TableCell align="right" sx={{color: '#1C1C1C', fontWeight: '500', fontSize: '14px'}}>{row.total_amount ? row.total_amount : '-'}</TableCell>
          <TableCell align="right" sx={{color: '#1C1C1C', fontWeight: '400', fontSize: '14px'}}>{row.adjustment}</TableCell>
          <TableCell align="right" sx={{color: '#1C1C1C', fontWeight: '400', fontSize: '14px'}}>{row.charges}</TableCell>
          <TableCell align="right" sx={{color: '#1C1C1C', fontWeight: '400', fontSize: '14px'}}>{row.charges_plus_payment}</TableCell>
          <TableCell align="right" sx={{color: '#1C1C1C', fontWeight: '400', fontSize: '14px'}}>{row.balance}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, width: '908px'}}>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                    {row.subDescription.map((historyRow) => (
                      <TableRow key={historyRow.id}>
                      <TableCell sx={{ width: '300px', marginLeft: '28px' }}> 
                        <Typography variant="body2" sx={{fontSize: '12px', fontWeight: '400', color: '#747474', marginTop: '2px'}}>
                      Reference Number
                      </Typography>
                      {historyRow.reference_no}</TableCell>
                        <TableCell>  <Typography variant="body2" sx={{fontSize: '12px', fontWeight: '400', color: '#747474', marginTop: '2px'}}>
                        Notes
                      </Typography> {historyRow.Note}</TableCell>
                        <TableCell><EditOutlinedIcon></EditOutlinedIcon></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const rows = [
    createData(new Date('2024-12-02'), 'New Treatment Fee', '4th Month Charge', 'A', 1590.19, 655.0, 234, 422.0, 316.99, 100),
    createData(new Date('2024-11-02'), 'Contract Charge', '4th Month Charge', 'TF', 237, 9.0, 37, 4.3, 4.99, 2),
    createData(new Date('2024-08-02'), 'Principal Payment 9/18 (X1471)', '4th Month Charge', 'V', 262, 16.0, 24, 742.19, 0.0, 3),
    createData(new Date('2024-09-02'), 'Visa (XXXX 8366)', '4th Month Charge', 'A', 305, 3.7, 67, 4.3, 2.5, 4),
    createData(new Date('2024-10-02'),'Contract Charge', '4th Month Charge', 'A', 356, 16.0, 49, 3.9, 1.5, 5),
  ];

  export default function CollapsibleTable() {
    return (
      <TableContainer component={Paper} sx={{maxWidth: '956px'}}>
        <Table aria-label="collapsible table">
          <TableHead sx={{background: '#FBFBFC'}}>
            <TableRow>
              <TableCell />
              <TableCell className='pt-10' sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>Date</TableCell>
              <TableCell sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>Transaction Type</TableCell>
              <TableCell align="right" sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>Total Acc. 
              <Typography variant="body2" sx={{fontSize: '16px', fontWeight: '500', color: '#1C1C1C'}}>
              $5730.00
              </Typography>
              </TableCell>
              <TableCell align="right" sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>Adjustment
              <Typography variant="body2" sx={{fontSize: '16px', fontWeight: '500', color: '#1C1C1C'}}>
              $300.00
              </Typography>
              </TableCell>
              <TableCell align="right" sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>Charges  <Typography variant="body2" sx={{fontSize: '16px', fontWeight: '500', color: '#1C1C1C'}}>
              $125.00
              </Typography></TableCell>
              <TableCell align="right" sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>+Payments <Typography variant="body2" sx={{fontSize: '16px', fontWeight: '500', color: '#1C1C1C'}}>
              ($125.00)
              </Typography></TableCell>
              <TableCell align="right" sx={{color: '#747474', borderColor: '#ECECEC', fontWeight: '400', fontSize: '14px'}}>=Balance  <Typography variant="body2" sx={{fontSize: '16px', fontWeight: '500', color: '#1C1C1C'}}>
              $0.00
              </Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
