import React, { Component } from 'react';

import '../components/styles.css';

export class Header extends Component {
  state = {
    txtValue: '',
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.value(this.state.txtValue);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group container">
          <input
            type="text"
            className="form-control txt"
            placeholder="Type Here..."
            onChange={(e) => {
              this.setState({ txtValue: e.target.value });
            }}
          />
        </div>
      </form>
    );
  }
}

export default Header;
