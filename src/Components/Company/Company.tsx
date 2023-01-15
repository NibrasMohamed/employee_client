import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getCompanies } from '../../API/companyAPI';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
];


const Company = () => {
  const [rows, setRows]: any = useState([]);
  const [details, setDetails]: any = useState();
  const [isLoding, setIsLoading]= useState(true);
  const [ openModal, setOpenModal] = useState(false);
    
  
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  useEffect(() => {
      getCompanies({}).then((response: any)=>{
          if (response.data.error === false) {
              setRows(response.data.message);
              setIsLoading(false);
          }        
      })
  }, [])
  return (
    <div className="container container-md">
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    </div>
    
  );
}
export default Company;
