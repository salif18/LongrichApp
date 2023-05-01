import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const CardTable = () => {
    return (
        <tr className='lignes'>
                    <td className='titles'>+223 45678903</td>
                    <td className='titles'>25 000</td>
                    <td className='titles'>Payer</td>
                    <td className='titles'>12/03/2023</td>
                    <td className='titles'><RemoveRedEyeIcon style={{fontSize:26}}/></td>
        </tr>
    );
};

export default CardTable;