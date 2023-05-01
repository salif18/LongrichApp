import React ,{ useEffect, useState }from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MarkunreadIcon from '@mui/icons-material/Markunread';
const userId =`641b35d6b18243d7cab7dc21`
const InfosUser = () => {
  const [order ,setOrder] = useState([])
    const [user,setUser] = useState([])
    const {id} = useParams()

   useEffect(()=>{
    axios.get(`http://localhost:3001/authentification/${id}`)
    .then(res => res.data)
    .then(data => setUser(data))
    .catch((err)=>console.log(err))
   },[])

   useEffect(()=>{
      axios.get(`http://localhost:3001/orders`)
      .then(res => res.data)
      .then(data => setOrder(data))
      .catch(err => console.log(err))
   },[])
   console.log(order)
    return (
        <div className='infos-user'>
        <h2>Informations du client</h2>
        <div className='identite-container'>
            <div className='indite'>
              <div className='imag-identite'>
                <img src='' alt='' />
              </div>
              <div className='info-identite'>
                <h3>Prenom:</h3>
                <h3>Nom:</h3><span className='identite-span'>{user.username}</span>
                <h3>Numero:</h3><span className='identite-span'>{user.numero}</span>
                <h3>Email:</h3><span className='identite-span'></span>
                <h3>Address:</h3><span className='identite-span'></span>
              </div>
              
                
              
            </div>
        </div>
         <button className='btn email'>
         <a href={`mailto:${user.email}`} >
         Envoyer <MarkunreadIcon style={{marginLeft:10}}/>
         </a>
         </button>
            <div className='achats'>
               <h2>Achats</h2>
               <div className='tableau'>
                   <table>
                    <thead>
                      <tr className='lin1'>
                        <th className='ite-h'>Produits</th>
                        <th className='ite-h'>price</th>
                        <th className='ite-h'>Quantites</th>
                        <th className='ite-h'>Total</th>
                        <th className='ite-h'>Date</th>
                        <th className='ite-h'>Status</th>
                      </tr>
                    </thead>
                   {/* {order.map((item)=>( */}
                    <tbody >
                      <tr className='lin2'>
                        <td className='ite-nam'></td>
                        <td className='ite-nam'></td>
                        <td className='ite-nam'></td>
                        <td className='ite-nam'></td>
                        <td className='ite-nam'></td>
                        <td className='ite-nam'></td>
                      </tr>
                    </tbody>
                   {/* ))} */}
                    <tfoot></tfoot>
                   </table>
               </div>
            </div>
        </div>
    );
};

export default InfosUser;