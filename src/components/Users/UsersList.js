import React from 'react';
import Card from '../UI/Card';
import './UsersList.css';
import {v4 as uuidv4} from 'uuid';
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
          <span key={uuidv4()} className="user-wrapper">
            <li>
              <FaUser />
              {user.username}
              <br />
              <FcConferenceCall />
              {user.fullname}
              <br />
              <FcAcceptDatabase /> ({user.age} Years Old)
            </li>
            <AiOutlineEdit className="user-edit-icon" />
            <AiOutlineUserDelete onClick={() => props.onDelete(user.username)} className="user-delete-icon" />
          </span>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
