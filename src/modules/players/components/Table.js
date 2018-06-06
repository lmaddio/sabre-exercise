import React from 'react';
import {
  Table
} from 'reactstrap';

const Row = ({cols})=>(
  <tr>
    {cols.map((c,i)=>(
      <td key={i.toString()}>{c}</td>      
    ))}
  </tr>
);

const TableContent = ({columns, rows})=> (
  <Table striped style={{textTransform: "capitalize"}}>
    <thead>
      <tr>
        {columns.map(c=>(
          <th key={c.key}>{c.text}</th>          
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((r, i)=>
        <Row cols={r} key={i.toString()}/>
      )}
    </tbody>
  </Table>
);

export default TableContent;