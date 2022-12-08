import React, { Component } from 'react';

import '../components/styles.css';

export class Header extends Component {
  render() {
    return (
      <form>
        <div className="container outer">
          <div className="header border p-4 mt-5">
            <h1 className="pb-4">THINGS TO DO</h1>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add New"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Header;
