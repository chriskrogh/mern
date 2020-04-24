import React, { useEffect, useState } from 'react';
import { makeRequest } from 'utils/request';
import { Method } from 'types/network';
import { User } from 'types/user';
import { GET_USERS } from 'common/errorMessages';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest<User[]>(Method.GET, '/api/users', GET_USERS);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [setUsers]);

  return (
    <div>
      <h1>Users from server</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
