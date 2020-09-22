import { UserDoc } from '@mern/shared';

import React, { useEffect, useState } from 'react';
import { createUser, getUsers } from './utils/user';

const App: React.FC = () => {
  const [users, setUsers] = useState<UserDoc[]>([]);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };
    fetchUsers();
  }, [setUsers]);

  const submit = async () => createUser(email, name);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <h1>Create User</h1>
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div style={{ marginTop: 10 }}>
          <button onClick={submit}>Create</button>
        </div>
      </div>
      <div>
        <h1>Users from database</h1>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
