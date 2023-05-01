import React from 'react';
import ListUsers from '../components/items/ListUsers';

const Users = () => {
    return (
        <div className='users-page'>
        <h2>Mes Clients</h2>

        <div className='list-user'>
             <ListUsers/>
        </div>
            
        </div>
    );
};

export default Users;