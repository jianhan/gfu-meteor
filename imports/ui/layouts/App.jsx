import React, { Component } from "react";
import AccountsUIWrapper from "../components/AccountsUIWrapper";

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <AccountsUIWrapper />
      </div>
    );
  }
}
