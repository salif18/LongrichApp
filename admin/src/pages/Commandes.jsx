import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { format } from 'timeago.js';
const Commandes = () => {
  const [orders,setOrders] =useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/orders`)
    .then(res => res.data)
    .then(data => setOrders(data))
    .catch((err)=>console.log(err))
  })
    const selection = ['Status','Livrer','En attente','Annuler']
    const selcectionNumber = ['Show',5,10,20,50,100]
    return (
        <div className='orders'>
        <div>
          <form className='headers'>
            <div>
                <select className='select'>
                    {selection.map((item,index)=> (<option className='option' key={index} value={item}>{item}</option>))}
                </select>
            </div>

            <div>
                <select className='select'>
                    {selcectionNumber.map((item,index)=>(<option className='option' value={item} key={index}>{item}</option>))}
                </select>
            </div>
          </form>
        </div>
            <div className='tableaux'>
               <table className='tab'>
               <thead >
                 <tr className='mythead'>
                    <th className='title-tab'>Name</th>
                    <th className='title-tab'>Numeros</th>
                    <th className='title-tab'>Montants</th>
                    <th className='title-tab'>Date</th>
                    <th className='title-tab'>Status</th>
                    <th className='title-tab'>Actions</th>
                 </tr>
                 </thead>
                 {orders.map((item)=>
                  (<tbody className='tbody' key={item._id}>
                   <tr>
                    <td className='name-tab'>{item.userId}</td>
                    <td className='name-tab'>+223 78303208</td>
                    <td className='name-tab'>{item.amount}</td>
                    <td className='name-tab'>{format(item.createdAt)}</td>
                    <td className='name-tab'>{item.status}</td>
                    <td className='name-tab'>
                    <button className='btn-view'>
                     <NavLink to={`/orders/${item._id}`}><VisibilityIcon style={{fontSize:20}}/></NavLink>
                    </button>
                    </td>
                   </tr>
                 </tbody>
                 ))}
                 <tfoot></tfoot>
               </table>
            </div>
        </div>
    );
};

export default Commandes;