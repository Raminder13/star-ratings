import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star(props) {
  const { selected = false, onClick = f => f } = props;
  return (
    <FaStar color={selected ? 'red' : 'gray'} onClick={onClick} />
  );
}

export default Star;
