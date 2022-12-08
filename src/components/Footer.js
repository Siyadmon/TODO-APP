import React, { Component } from 'react';

import '../components/styles.css';

export class Footer extends Component {
  render() {
    return (
      <div className="container footer form-group column">
        <button
          type="button"
          className="btn btn-primary add"
          onClick={this.props.setTxtState}
          disabled={this.props.btnDisable}
        >
          Add
        </button>
        <div className="btn-group">
          <button
            type="button"
            className="btn border btn-secondary"
            onClick={() => {
              this.props.onBtnClick(1);
            }}
          >
            All
          </button>
          <button
            type="button"
            className="btn border btn-success"
            onClick={() => {
              this.props.onBtnClick(2);
            }}
          >
            Active
          </button>
          <button
            type="button"
            className="btn border btn-warning"
            onClick={() => {
              this.props.onBtnClick(3);
            }}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
