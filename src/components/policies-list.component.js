import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


const PolicyList = (props) => {
  const [policies, setPolicies] = useState([]);
  const [currentPolicy, setCurrentPolicy] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const history = useHistory();

  useEffect(async () => {
    const res = await axios.get('http://localhost:4000/api/policies/')
    const newPolicies = [];
    res.data.forEach(policy => {
      newPolicies.push(policy);
    })
    setPolicies(newPolicies);
  }, []);

  const rowClick = (id) => {
    history.push(`/policies/${id}`);
  };

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr key="header">
            <th>Policy Name</th>
            <th>Policy Type</th>
            <th>Insured First Name</th>
            <th>Insured Last Name</th>
            <th>Insured ID</th>
            <th>Active Policy</th>
            <th>Active Claim</th>
          </tr>
        </thead>
        <tbody>
        {policies.map(policy => {
          return (
            <tr key={policy._id} onClick={() => rowClick(policy._id)}>
              <td>{policy.name}</td>
              <td>{policy.type}</td>
              <td>{policy.holder_first_name}</td>
              <td>{policy.holder_last_name}</td>
              <td>{policy.holder_account_id}</td>
              <td>{policy.is_active ? "True" : "False"}</td>
              <td>{policy.has_active_claim ? "True" : "False"}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default PolicyList;
