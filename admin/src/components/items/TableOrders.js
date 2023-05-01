import React from 'react';
import CardTable from '../constants/CardTable';

const TableOrders = () => {
    return (
            <div className='table-container'>
              <h2 className='titre'>Les Commandes</h2>
              <table className='table'>
                <thead>
                <tr className='ligne1'>
                    <th className='title'>Numero</th>
                    <th className='title'>Montants</th>
                    <th className='title'>Status</th>
                    <th className='title'>Dates</th>
                    <th className='title'>Actions</th>
                </tr>
                </thead>
                <tbody>
                   <CardTable/>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>

    );
};

export default TableOrders;