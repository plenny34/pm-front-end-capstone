import React from 'react';
import PolicyButton from "./policy-button.component";

const ButtonRow = (props) => {
  const readOnlyButtons = () => {
    return (
      <div className="row">
        <div className="col-sm">
          <PolicyButton value='Update Policy' handleClick={props.updateButtonOnClick}/>
        </div>
        <div className="col-sm">
          <PolicyButton value='Delete Policy' handleClick={props.deleteButtonOnClick}/>
        </div>
      </div>
    );
  };

  const saveButton = () => {
    return (
      <div className="row">
        <div className="col-sm">
          <PolicyButton value='Save Policy' handleClick={props.saveButtonOnClick}/>
        </div>
      </div>
    );
  };

  return (
    <div>
      {props.areInputsLocked ? readOnlyButtons() : saveButton()}
    </div>
  );
};

export default ButtonRow;
