import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const PolicyComponent = () => {
  const [policy, setPolicy] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    const res = await axios.get(`http://localhost:4000/api/policies/${id}`)
    setPolicy(res.data);
  }, []);

  const showPolicy = (policy) => {
    return (
      <form>
        <div className="form-group row">
          <div className="col-sm-1" />
          <label htmlFor="name" className="col-sm-2 col-form-label">Policy Name</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="name" value={policy.name}/>
          </div>
          <div className="col-sm-1"/>
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Policy Type</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type" value={policy.type}/>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Insured First Name</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type" value={policy.holder_first_name}/>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Insured Last Name</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type" value={policy.holder_last_name}/>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Insured ID</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type" value={policy.holder_account_id}/>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Active Policy</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type"
                   value={policy.is_active ? "True" : "False"}/>
          </div>
          <div className="col-sm-1" />
          <div className="col-sm-1" />
          <label htmlFor="type" className="col-sm-2 col-form-label">Active Claim</label>
          <div className="col-sm-8">
            <input type="text" readOnly className="form-control-plaintext" id="type"
                   value={policy.has_active_claim ? "True" : "False"}/>
          </div>
          <div className="col-sm-1" />
        </div>
      </form>
    )
  }

  return (
    <div>
      {policy ? showPolicy(policy) : <div></div>}
    </div>
  )
}

export default PolicyComponent;
