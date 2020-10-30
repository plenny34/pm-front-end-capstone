import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import PolicyGrid from "./policy-grid.component";

const usePolicyState = (id) => {
  const [policy, setPolicy] = useState(null);
  const [readOnly, setReadOnly] = useState(true);

  useEffect( () => {
    async function getPolicies() {
      return await axios.get(`http://localhost:4000/api/policies/${id}`)
    }
    getPolicies()
      .then(res => {
        setPolicy(res.data);
      });
  }, []);

  const setPolicyState = (newPolicy, newReadOnly) => {
    setPolicy(newPolicy);
    setReadOnly(newReadOnly);
  }

  return {
    policy,
    readOnly,
    setPolicyState
  }

}

const PolicyDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    policy,
    readOnly,
    setPolicyState
  } = usePolicyState(id);

  const handlePolicyNameChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.name = e.target.value;
    setPolicyState(newPolicy, readOnly);
  }

  const handlePolicyTypeChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.type = e.target.value;
    setPolicyState(newPolicy, readOnly);
  }
  const handleInsuredFirstNameChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.holder_first_name = e.target.value;
    setPolicyState(newPolicy, readOnly);
  }
  const handleInsuredLastNameChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.holder_last_name = e.target.value;
    setPolicyState(newPolicy, readOnly);
  }
  const handleInsuredIdChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.holder_account_id = e.target.value;
    setPolicyState(newPolicy, readOnly);
  }
  const handleActivePolicyChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.is_active = JSON.parse(e.target.value);
    setPolicyState(newPolicy, readOnly);
  }
  const handleActiveClaimChange = (e) => {
    const newPolicy = {...policy};
    newPolicy.has_active_claim = JSON.parse(e.target.value);
    setPolicyState(newPolicy, readOnly);
  }

  const handleUpdateButtonClick = () => {
    setPolicyState(policy, !readOnly);
  }

  const handleDeleteButtonClick = async () => {
    await axios.delete(`http://localhost:4000/api/policies/${id}`);
    history.push('/policies');
  }

  const handleSaveButtonOnClick = async () => {
    const newPolicy = {...policy};
    await axios.put(`http://localhost:4000/api/policies/${id}`, newPolicy);
    setPolicyState(newPolicy, !readOnly);
  }

  return (
    <div>
      {policy ?
        <PolicyGrid
          policy={policy}
          areInputsLocked={readOnly}
          policyNameOnChange={handlePolicyNameChange}
          policyTypeOnChange={handlePolicyTypeChange}
          insuredFirstNameOnChange={handleInsuredFirstNameChange}
          insuredLastNameOnChange={handleInsuredLastNameChange}
          insuredIdOnChange={handleInsuredIdChange}
          activePolicyOnChange={handleActivePolicyChange}
          activeClaimOnChange={handleActiveClaimChange}
          updateButtonOnClick={handleUpdateButtonClick}
          deleteButtonOnClick={handleDeleteButtonClick}
          saveButtonOnClick={handleSaveButtonOnClick}
        /> : <div></div>}
    </div>
  )
}

export default PolicyDetail;
