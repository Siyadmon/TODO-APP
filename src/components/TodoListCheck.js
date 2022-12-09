import React, { Component } from 'react';
import '../components/styles.css';
export class CheckBox extends Component {
  handleChange = (e, val) => {
    this.props.targetAndVal(e.target.checked, val);
  };
  render() {
    let value = this.props.value;
    let checked = this.props.checked.map((val) => val.name);

    if (this.props.onBtnClick === 1) {
      value = this.props.value;
    }
    if (this.props.onBtnClick === 2) {
      value = this.props.value.filter((data) => !checked.includes(data));
    }
    if (this.props.onBtnClick === 3) {
      value = this.props.value.filter((data) => checked.includes(data));
    }

    const data = value.map((val, index) => {
      return (
        <div className="form-check container CheckBox" key={index}>
          <input
            className="form-check-input me-2"
            type="checkbox"
            onChange={(e) => this.handleChange(e, val)}
            checked={checked.includes(val)}
          />
          <label className="form-check-label">{val}</label>
          <br />
        </div>
      );
    });
    return <div className="mt-2">{data}</div>;
  }
}

export default CheckBox;
