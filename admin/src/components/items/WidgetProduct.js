import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
const WidgetProduct = () => {
    return (
        <div className='widgetpoduct'>
             <div className='widgetpoduct-icon'>
            <StoreIcon style={{color:'orange' ,padding:10, fontSize:40}} />
        </div>
        <div className='infos'>
            <h3>Total Produits</h3>
            <p>100</p>
        </div>
        </div>
    );
};

export default WidgetProduct;