import React from 'react';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
const WidgetOrders = () => {
    return (
        <div className='widgetorders'>
        <div className='widgetorders-icon'>
            <CasesRoundedIcon style={{color:'green' ,padding:10, fontSize:40}} />
        </div>
        <div className='infos'>
            <h3>Total Commandes</h3>
            <p>20</p>
        </div>
            
        </div>
    
    );
};

export default WidgetOrders;