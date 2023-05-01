import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import axios from 'axios'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import {NavLink, useNavigate} from 'react-router-dom'
import {format} from 'timeago.js'
import AddIcon from '@mui/icons-material/Add';
import BackspaceIcon from '@mui/icons-material/Backspace';
const ListUsers = () => {
    const navigate = useNavigate()
const [data,setData] = useState([])



useEffect(()=>{
    const getUsers = async()=>{
     try{
        const res = await axios.get(`http://localhost:3001/authentification`)
        if(res){
         const data = await res.data
         setData(data)
        }
     }catch(e){
       console.log(e)
     }
    }
    getUsers()
  },[])
console.log(data)
    const handleDelete =(id)=>{
        axios.delete(`http://localhost:3001/authentification/${id}`)
      setData(data.filter(x => x._id !==id))
    }
    const columns = [
        { field: "_id", headerName: "ID", width: 200 },
        { field: "client", headerName: "Client", width: 220 ,renderCell:(params)=>{
            return(
                <div className="products">
                <img className="products-img" src={params.row.image} alt='' />
                {params.row.username}
                </div>
            )
        }},
        {
          field:'numero',
          headerName:'Numero',
          width:200,
          renderCell:(params)=>{
            return(
              <p>{params.row.numero}</p>
            )
          }
        },
        { field: "email",
         headerName: "Email",
         width: 200,renderCell:(params)=>(
            <p>{params.row.email}</p>
         ) },
       
        {
          field: "address",
          headerName: "Address",
          width: 200,
        },
        {
            field:'action',
            headerName:'Action',
            width:250 ,
            renderCell:(params)=>{
                return(
                    <>
                    <NavLink to={`/users/${params.row._id}`}>
                    <button className="products-btn-edit">
                    <BorderColorIcon className="edit-btn" style={{fontSize:18}} /></button>
                    </NavLink>
                    <button className="products-btn-delete"
                    onClick={()=>handleDelete(params.row._id)}>
                    <BackspaceIcon style={{color:'#fff',fontSize:18}} className='del'/></button>
                    </>
                )
            }
        }
      ];


    return (

              <div className='list' style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={data}
          getRowId={(row)=>row._id}
          disableSelectionOnclick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        <div>
            <button className='btn-prod' onClick={()=>navigate('/addproducts')}><AddIcon/>Ajouter de nouveaux produits</button>
        </div>
        </div>
    );
};

export default ListUsers;