import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enterdFullname, setEnteredFullname] = useState('');
  const [error, setError] = useState();
  const [confrmBtn, setConfrmBtn] = useState(false);
  const [banConfrm, setBanConfrm] = useState(false);

  const confirmHanlder = (event) => {
    setConfrmBtn(true);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enterdFullname.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'Please enter valid information',
      });
      return;
    }
    if (enteredUsername === 'sami') {
      setBanConfrm(true);
      setConfrmBtn(false);
      return;
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
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} maxLength="8" />
          <label htmlFor="fullname">fullname</label>
          <input id="fullname" type="text" value={enterdFullname} onChange={fullnameChangeHandler} max="256" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="button" onClick={confirmHanlder}>
            Add User
          </Button>
          {confrmBtn && <Button type="submit">Confirm</Button>}
          {confrmBtn && <p>confirm for sign-up</p>}
          {banConfrm && <p>this username has banned</p>}
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
