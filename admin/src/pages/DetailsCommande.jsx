import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  {format} from 'timeago.js'
import PrintIcon from '@mui/icons-material/Print';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const DetailsCommande = () => {
    const [order,setOrder] = useState([])
    const {id} = useParams()
   useEffect(()=>{
    axios.get(`http://localhost:3001/orders/${id}`)
    .then(res => res.data)
    .then(data => setOrder(data))
    .catch((err)=>console.log(err))
   },[])
   console.log(order)
    
    return (
        <div className='singleorder'>
        <button className='btn-ba'>Retour aux commandes</button>
            <div className='container-ord'>
               
               <div className='or-header'>
                 <div className='lef'>
                 <h2 className='ti'>Date de commandes</h2>
                 <p><CalendarMonthIcon style={{color:'#333',marginRight:10}} />{format(order.createdAt)}</p>
                 </div>
                 <div className='rgt'>
                    <form className='for-header'>
                        <select className='select-head'>
                            <option>Status</option>
                        </select>
                    </form>
                    <button className='btn-print' onClick={()=>window.print()}><PrintIcon /></button>
                 </div>
               </div>

               <div className='infos-or'>
                  <div className='customer'>
                  <div className='icon-addres'>
                    <PersonIcon style={{padding:20, color:'green',fontSize:30}} />
                  </div>
                    <p>{order.userId}</p>
                  </div>
                  <div className='address'>
                  <div className='icon-addres'>
                    <LocalShippingIcon style={{padding:20,color:'green', fontSize:30}} />
                  </div>
                  <div className='wrap'>
                  <h2>Livré à :</h2>
                   <p ><LocationOnIcon style={{color:'green'}}/>{order.address}</p>
                  </div>
                  </div>
               </div>

               <div className='array'>
                    <table className='ta'>
                        <thead>
                            <tr className='lin1'>
                                <th className='ite-h'>Produits</th>
                                <th className='ite-h'>prix</th>
                                <th className='ite-h'>Quantites</th>
                                <th className='ite-h'>Total</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr className='lin2'>
                                <td className='ite-nam'>Pommade</td>
                                <td className='ite-nam'>5000</td>
                                <td className='ite-nam'>2</td>
                                <td className='ite-nam'>10000</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Grand total: 10 000</td>
                            </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>

               </div>

            </div>
                   
                    <div className='date-liv'>
                    <div className='liv'>
                    <h4 className='h3'>Date de livraison ,le 12/03/2023</h4>
                    </div>
                        
                    </div>
                    {/* <a href={`mailto:salifmoctarkonate@yahoo.fr`}>envoyer mail</a> */}
        </div>
    );
};

export default DetailsCommande;