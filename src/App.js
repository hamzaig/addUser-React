import React, { useState } from 'react';
import AddUser from './componenets/Users/AddUser';
import UserList from './componenets/Users/UserList';


function App() {
  const [userList, setUserList] = useState([]);
  const userListHander = (username, age) => {
    setUserList(prevState => {
      return [{ username, age }, ...prevState]
    })
    // console.log(userList);
  }
  return (
    <div>
      <AddUser onAddUser={userListHander} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
