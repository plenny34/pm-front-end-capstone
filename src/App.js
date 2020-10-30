import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import PolicyList from "./components/policies-list.component";
import AddPolicy from "./components/policy-add.component";
import PolicyDetail from "./components/policy-detail.component"

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to='/policies' className="nav-link">Policies</Link>
            </li>
            <li className="navbar-item">
              <Link to='/addPolicy' className="nav-link">Add Policy</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path={ ['/', '/policies'] } component={PolicyList} />
          <Route exact path={ '/addPolicy' } component={AddPolicy} />
          <Route path={'/policies/:id'} children={<PolicyDetail />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
