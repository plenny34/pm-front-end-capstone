import React from 'react';
import PolicyRow from "./policy-row.component";
import ButtonRow from "./button-row.component";

const PolicyGrid = (props) => {
  return (
    <div className="container">
      <PolicyRow
        label='Policy Name'
        data={props.policy.name}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.policyNameOnChange}
      />
      <PolicyRow
        label='Policy Type'
        data={props.policy.type}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.policyTypeOnChange}
      />
      <PolicyRow
        label='Insured First Name'
        data={props.policy.holder_first_name}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.insuredFirstNameOnChange}
      />
      <PolicyRow
        label='Insured Last Name'
        data={props.policy.holder_last_name}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.insuredLastNameOnChange}
      />
      <PolicyRow
        label='Insured ID'
        data={props.policy.holder_account_id}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.insuredIdOnChange}
      />
      <PolicyRow
        label='Active Policy'
        data={props.policy.is_active}
        isABoolean={true}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.activePolicyOnChange}
      />
      <PolicyRow
        label='Active Claim'
        data={props.policy.has_active_claim}
        isABoolean={true}
        areInputsLocked={props.areInputsLocked}
        handleChange={props.activeClaimOnChange}
      />
      <ButtonRow
        areInputsLocked={props.areInputsLocked}
        updateButtonOnClick={props.updateButtonOnClick}
        deleteButtonOnClick={props.deleteButtonOnClick}
        saveButtonOnClick={props.saveButtonOnClick}
      />
    </div>
  );
};

export default PolicyGrid;
