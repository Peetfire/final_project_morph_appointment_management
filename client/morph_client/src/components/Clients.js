import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Pagination } from '@mui/material';

const Clients = ({providerClients,setPage,handleSetClient}) => {
  
  const [pageSize, setPageSize] = React.useState(5);
  const rows = providerClients.map(client=>{
   
  return{
      id:client.id,
      col1: client.id,
      col2: client.firstName+" "+client.lastName,
      col3: client.dob,
      col4: client.phone,
      col5: client.email
      }
  })

  const columns = [
    
    { field: 'col1', headerName: 'Id', flex: 0.2, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 50},
    { field: 'col2', headerName: 'Name', flex: 0.8, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col3', headerName: 'Date of Birth', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col4', headerName: 'Phone Number', flex: 1, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
    { field: 'col5', headerName: 'Email', flex: 0.7, align: 'center', headerAlign: 'center', headerClassName: 'gridHeader', minWidth: 100 },
  
  ];
    
    const handleCellClick =(event)=>{
      
      handleSetClient(event.id)
      setPage("Single Client")
    
    }

    return (
    <>  
   
      
      <h2>Clients</h2>
      <div style={{width: '100%' }}>
        <div style={{flexGrow: 1}}></div>
        <DataGrid
          sx={{ 
            m: 10,
            fontSize: 12,
            '& .gridHeader': {
              backgroundColor: 'rgb(31 147 159 / 82%)',
              fontSize: 14,
            },
          }}
          onCellClick={handleCellClick}
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          components={Pagination}
        />
      </div>
    </>
    )
}

export default Clients