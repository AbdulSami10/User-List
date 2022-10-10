import React from 'react';
import Card from '../UI/Card';
import './UsersList.css';
// import {FaUserEdit} from 'react-icons/fa';
import {AiOutlineUserDelete, AiOutlineEdit} from 'react-icons/ai';

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <span className="user-wrapper">
            <li key={user.id}>
              username: {user.name}
              <br />
              fullname:{user.fullname}
              <br />({user.age} Years Old)
            </li>
            <AiOutlineEdit className="user-edit-icon" />
            <AiOutlineUserDelete className="user-delete-icon" />
          </span>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
