import React, {useState} from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

const MainUser = (props) => {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (userName, userfullname, userAge) => {
    let find = usersList.find((c) => c.username === userName);
    console.log(find);
    if (find === undefined) {
      setUsersList((prevUsersList) => {
        return [
          ...prevUsersList,
          {username: userName.toLowerCase(), fullname: userfullname, age: userAge, id: Math.random().toString()},
        ];
      });
    } else {
      console.log('error');
    }
  };

  // const deleteUserHandler = (indx) => {
  //   usersList.splice(indx, 1);
  //   setUsersList([...usersList]);
  // };
  const deleteUserHandler = (userName) => {
    setUsersList((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.username !== userName);
      return updatedGoals;
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} onDelete={deleteUserHandler} />
    </div>
  );
};
export default MainUser;
