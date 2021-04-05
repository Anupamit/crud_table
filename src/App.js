import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Anupam", email: 'anupamit011@gmail.com', phone: 7737320988, address: "Daniari" },

]

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "Roll No", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone', },
    { title: "Address", field: "address", }
  ]


  return (
    <div className="App">
      <h1 align="center">Crud Table</h1>
      <MaterialTable
        title="Students Information"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default App;