import React from 'react'
import DataTable from 'react-data-table-component';



// const rows = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing' },
//   ];

export default function Table({columns, rows}) {
  return (
    <div style={{ height: 700, width: '100%', padding:'1em' }}>
      <DataTable direction="auto"
        fixedHeaderScrollHeight="300px"
        highlightOnHover
        pagination
        responsive
        selectableRows
        subHeader
        subHeaderAlign="right"
        subHeaderWrap 
        data={rows} 
        columns={columns} 
        style={{ backgroundColor: 'white'}} />
    </div>
  )
}
