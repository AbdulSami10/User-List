import React, {useState} from 'react';
import Card from '../UI/Card';
import './AddUser.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import {FcAddDatabase} from 'react-icons/fc';
import {FcConferenceCall} from 'react-icons/fc';
import {FaUser} from 'react-icons/fa';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enterdFullname, setEnteredFullname] = useState('');
  const [error, setError] = useState();
  const [confrmBtn, setConfrmBtn] = useState(false);
  const [banConfrm, setBanConfrm] = useState(false);
  const [usrnameAlready, setUsrnameAlready] = useState(false);

  const confirmHanlder = (event) => {
    setConfrmBtn(true);

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enterdFullname.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'Please enter valid information',
      });
      return;
    }
    if (enterdFullname.trim().length > 128) {
      setError({
        title: 'InValid Name',
        message: 'Please enter your name in given length',
      });
      return;
    }
    if (enteredUsername.trim().length < 4) {
      setError({
        title: 'enter valid username',
        message: 'please enter your username between 4 and 8 alphabets',
      });
      return;
    }
    if (
      enteredUsername === 'sami' ||
      enteredUsername === 'maaz' ||
      enteredUsername === 'wirzan' ||
      enteredUsername === 'AbdulSami' ||
      enteredUsername === 'ABDULSAMI' ||
      enteredUsername === 'Sami'
    ) {
      setBanConfrm(true);
      setConfrmBtn(false);
      return;
    }
    if (props.usrNameExist === true) {
      setConfrmBtn(false);
      setUsrnameAlready(true);
    }

    if (enteredAge > 100) {
      setError({
        title: 'invalid age',
        message: 'Please enter a valid age (greater than 0)',
      });

      return;
    }

    // console.log(enteredUsername, enteredAge, enterdFullname);
    // props.onAddUser(enteredUsername, enterdFullname, enteredAge);
    // setEnteredAge('');
    // setEnteredUsername('');
    // setEnteredFullname('');
  };

  const AddUserHandler = (event) => {
    event.preventDefault();
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enterdFullname.trim().length === 0) {
    //   setError({
    //     title: 'invalid input',
    //     message: 'Please enter valid information',
    //   });
    //   return;
    // }
    // if (enteredAge > 100) {
    //   setError({
    //     title: 'invalid age',
    //     message: 'Please enter a valid age (greater than 0)',
    //   });
    //   return;
    // }
    // console.log(enteredUsername, enteredAge, enterdFullname);
    props.onAddUser(enteredUsername, enterdFullname, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
    setEnteredFullname('');
    setConfrmBtn(false);
  };

  const usernamBanHandler = () => {
    setBanConfrm(false);
    setUsrnameAlready(false);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const fullnameChangeHandler = (event) => {
    setEnteredFullname(event.target.value);
  };
  const errorHandler = () => {
    setConfrmBtn(false);
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className="input">
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">
            <FaUser className="icon" />
            Username
          </label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            onClick={usernamBanHandler}
            maxLength="16"
          />
          <label htmlFor="fullname">
            <FcConferenceCall className="icon" />
            Full Name
          </label>
          <input id="fullname" type="text" value={enterdFullname} onChange={fullnameChangeHandler} />
          <label htmlFor="age">
            <FcAddDatabase className="icon" />
            Age (Years)
          </label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="button" onClick={confirmHanlder}>
            Add User
          </Button>
          {confrmBtn && <Button type="submit">Confirm</Button>}
          {confrmBtn && <p className="allow">confirm for sign-up</p>}
          {banConfrm && <p className="ban">This Username Has Banned</p>}
          {usrnameAlready && <p className="ban">Username already exist</p>}
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;
