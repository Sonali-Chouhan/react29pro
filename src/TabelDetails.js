import React from 'react'
import './App.css';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core'

const TableDetails = (props) => {
  return (
    <div>
    <Table style={{width:"100%" ,border:"2px solid #ccc" }} area-label>
        <TableHead>
            <TableRow>
                <TableCell className='ETableCellText'> Loan Amount</TableCell>
                <TableCell className='ETableCellval'>{props.pAmount} </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'> Interest %</TableCell>
               <TableCell className='ETableCellval'>{props.interest} </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'>Tenure</TableCell>
               <TableCell className='ETableCellval'>{props.duration} </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'>TOtal Interest</TableCell>
               <TableCell className='ETableCellval'>{props.TotalAmountOfInt} </TableCell>
            </TableRow>
            <TableRow>
                <TableCell className='ETableCellText'>TOtal Payment<br/>(Loan+interest)</TableCell>
               <TableCell className='ETableCellval'>{props.totalAmt ? props.totalAmt:0} </TableCell>
            </TableRow>
        </TableHead>
    </Table>
    </div>
  )
}

export default TableDetails