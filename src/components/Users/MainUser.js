import React, {useState} from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

const MainUser = (props) => {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};
export default MainUser;
