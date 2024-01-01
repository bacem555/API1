

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    
    ;

    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('it s error:', error);
      });
  }, []); 

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
