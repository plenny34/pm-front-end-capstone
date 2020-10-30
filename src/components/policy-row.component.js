import React from 'react';

const PolicyRow = (props) => {
  return (
    <div className="row">
      <div className="col-sm col-form-label">
        <label htmlFor="name">{props.label}</label>
      </div>
      {props.areInputsLocked ?
        !props.isABoolean ?
          <div className="col-sm">
            <input
              type='text'
              readOnly
              className="form-control-plaintext"
              id={props.label}
              value={props.data}
            />
          </div> :
            <div className="col-sm">
              <input
                type='text'
                readOnly
                className="form-control-plaintext"
                id={props.label}
                value={props.data ? "True" : "False"}
              />
            </div> :
        !props.isABoolean ?
          <div className="col-sm">
            <input
              type='text'
              className="form-control-plaintext"
              id={props.label}
              defaultValue={props.data}
              onChange={props.handleChange}
            />
          </div> :
          <div className="col-sm">
            <select
              className="form-control-plaintext"
              id={props.label}
              name={props.label}
              defaultValue={props.data}
              onChange={props.handleChange}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
      }
    </div>
  );
};

export default PolicyRow;
