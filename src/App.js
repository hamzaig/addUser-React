import React from 'react';
import AddUser from './componenets/Users/AddUser';
import UserList from './componenets/Users/UserList';


function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
