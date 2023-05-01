import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CategoryIcon from '@mui/icons-material/Category';
import Shop2Icon from '@mui/icons-material/Shop2';
import GroupIcon from '@mui/icons-material/Group';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PaidIcon from '@mui/icons-material/Paid';
import StoreIcon from '@mui/icons-material/Store';
import { MyStore } from '../../context/store';
const SideBar = () => {
    const {isDark,theme } = useContext(MyStore)
    return (
        <div className='sidebar' style={{background:theme.background}}>
            <div className='container' style={{background:theme.background}} >
               <div className='dashbord'>
                <NavLink className='dashbord' to='/'><DashboardIcon className='icons' style={{fontSize:34, color:theme.text}}/><h2 style={{color:theme.text}}>Vue d'ensemble</h2></NavLink>
                
               </div>
               <div className='links'>
                  <NavLink className='liens' to='/products'><StoreIcon className='icons' style={{fontSize:34, color:theme.text }} /><h3 style={{color:theme.text}}>Produits</h3></NavLink>
                  <NavLink className='liens' to='/Category'><CategoryIcon className='icons' style={{fontSize:34 , color:theme.text}}/><h3 style={{color:theme.text}}>Categories</h3></NavLink>
                  <NavLink className='liens' to='/orders'><Shop2Icon className='icons' style={{fontSize:34 , color:theme.text}}/><h3 style={{color:theme.text}}>Commandes</h3></NavLink>
                  <NavLink className='liens' to='/users'><GroupIcon className='icons' style={{fontSize:34 , color:theme.text}}/><h3 style={{color:theme.text}}>Clients</h3></NavLink>
                  <NavLink className='liens' to='/sales'><MonitorHeartIcon className='icons' style={{fontSize:34 , color:theme.text}}/><h3 style={{color:theme.text}}>Ventes</h3></NavLink>
                  <NavLink className='liens' to='/transactions'><PaidIcon className='icons' style={{fontSize:34, color:theme.text }}/><h3 style={{color:theme.text}}>Transactions</h3></NavLink>
               </div>
                

            </div>
        </div>
    );
};

export default SideBar;