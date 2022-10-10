import React from 'react';
import Card from '../UI/Card';
import './UsersList.css';
// import {FaUserEdit} from 'react-icons/fa';
import {AiOutlineUserDelete, AiOutlineEdit} from 'react-icons/ai';
import {FcAcceptDatabase} from 'react-icons/fc';
import {FcConferenceCall} from 'react-icons/fc';
import {FaUser} from 'react-icons/fa';

const UsersList = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <span className="user-wrapper">
            <li key={user.id}>
              <FaUser />
              {user.name}
              <br />
              <FcConferenceCall />
              {user.fullname}
              <br />
              <FcAcceptDatabase /> ({user.age} Years Old)
            </li>
            <AiOutlineEdit className="user-edit-icon" />
            <AiOutlineUserDelete onClick={props.onDelete} className="user-delete-icon" />
          </span>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
