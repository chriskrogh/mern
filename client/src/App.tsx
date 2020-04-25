import React, { useEffect, useState } from 'react';
import { makeRequest } from 'utils/request';
import { Method } from 'types/network';
import { User, UserData } from 'types/user';
import { GET_USERS, CREATE_USER } from 'common/errorMessages';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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

  const createUser = async () => {
    await makeRequest<UserData>(Method.POST, '/api/users', CREATE_USER, { name, email });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <div>
        <h1>Create User</h1>
        <p>Name</p>
        <input value={name} onChange={e => setName(e.target.value)} />
        <p>Email</p>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <div style={{ marginTop: 10 }}>
          <button onClick={createUser}>Create</button>
        </div>
      </div>
      <div>
        <h1>Users from database</h1>
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
