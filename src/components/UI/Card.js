import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
  const costClass = props.className;
  const child = props.children;
  return <div className={`${classes.card} ${costClass}`}>{child}</div>;
};
export default Card;
