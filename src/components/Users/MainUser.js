import React, {useState} from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

const MainUser = (props) => {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (userName, userfullname, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {name: userName.toLowerCase(), fullname: userfullname, age: userAge, id: Math.random().toString()},
      ];
      // let find = setUsersList.find((s) => s.userName === userName);
      // console.log(find);
    });
    // let name = [{name: 'kameena', fullname: '', age: ''}];
    // let find = usersList.find((c) => c.userName === name);
    // console.log(find);
    // if (find === undefined) {
    //   console.log('Not present');
    // } else {
    //   console.log(find.userName);
    // }
  };
  const deleteUserHandler = (indx) => {
    usersList.splice(indx, 1);
    setUsersList([...usersList]);
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
};
export default MainUser;
