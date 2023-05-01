import React ,{useState,useEffect,useMemo} from 'react';
import WidgetOrders from '../components/items/WidgetOrders';
import WidgetProduct from '../components/items/WidgetProduct';
import WidgetVentes from '../components/items/WidgetVentes';
import axios from 'axios'
import WidgetStatsOrder from '../components/items/WidgetStatsUsers';
import WidgetStatsUsers from '../components/items/WidgetStatsUsers';
import WidgetStatsVentes from '../components/items/WidgetStatsVentes';
import TableOrders from '../components/items/TableOrders';
const Home = () => {
  const [usersStats,setUsersStats]=useState([])

  const MONTHS = useMemo(
  ()=>[
      'Jan',
      'Fev',
      'Mar',
      'Avr',
      'Mai',
      'Jui',
      'Juil',
      'Aou',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
  ],[])

  useEffect(()=>{
        const getDataStatystics=async()=>{
           try{
              const res = await axios.get('http://localhost:3001/authentification/stats')
                  res.data.map((item)=>(
                      setUsersStats(prev=>[
                      ...prev,
                      {name:MONTHS[item._id -1],'Active User':item.total}])
                  ))
              
           }catch(e){
              console.log(e)
           }
        }
        getDataStatystics()
  },[MONTHS])


    return (
        <div className='home'>
            <h2>Une vue d'ensemble</h2>
            {/* zone items */}
            <div className='home-container'>
                  <div className='items'>
                    <WidgetVentes/>
                  </div>
                
                  <div className='items'>
                    <WidgetOrders/>
                  </div>
                   
                  <div className='items'>
                     <WidgetProduct/>
                  </div>
            </div>

            {/* zone de statistiques */}
            <div className='stats-container'>
                <div className='widgets'>
                    <WidgetStatsUsers data={usersStats} grid dataKey='Active User'/>
                </div>
                <div className='widgets'>
                    <WidgetStatsVentes/>
                </div>
            </div>

            {/* List des commandes  */}
            <div className='table'>
             <TableOrders />
            </div>
        </div>
    );
};

export default Home;