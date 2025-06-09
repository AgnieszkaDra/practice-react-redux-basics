import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/main/duck/actions';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(actions.removeUser(id));
  };

  return (
    <li>
      {name} <button onClick={handleRemove}>usuń</button>
    </li>
  );
};

export default UserItem;