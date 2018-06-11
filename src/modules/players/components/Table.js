import React from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
  cols: PropTypes.arrayOf(PropTypes.string)
};

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

TableContent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    key: PropTypes.string
  })),
  rows: PropTypes.arrayOf(PropTypes.array),
};

export default TableContent;