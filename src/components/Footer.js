import React, { Component } from 'react';

import '../components/styles.css';

export class Footer extends Component {
  AddTextBox = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div className="container footer">
        <button
          type="button"
          className="btn btn-primary add"
          onClick={(e) => this.AddTextBox(e)}
        >
          Add
        </button>
        <div className="btn-group">
          <button type="button" className="btn border btn-secondary">
            All
          </button>
          <button type="button" className="btn border btn-success">
            Active
          </button>
          <button type="button" className="btn border btn-warning">
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
