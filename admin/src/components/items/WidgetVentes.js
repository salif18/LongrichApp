import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
const WidgetVentes = () => {
    return (
        <div className='widgetvente'>
        <div className='icon'>
            <PaidIcon style={{color:'blue' ,padding:10, fontSize:40}} />
        </div>
        <div className='infos'>
            <h3>Total Revenues</h3>
            <p>500 000 F</p>
        </div>
            
        </div>
    );
};

export default WidgetVentes;