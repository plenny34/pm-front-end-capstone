import React from 'react';

const PolicyButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-block"
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  );
};

export default PolicyButton;
