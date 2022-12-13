import React, { Component } from 'react';
import '../components/styles.css';
export class CheckBox extends Component {
  handleChange = (e, index) => {
    this.props.targetAndVal(e, index);
  };
  deleteElement = (index) => {
    this.props.DeleteValue(index);
  };
  editElement = (dataname, index) => {
    this.props.editElement(dataname, index);
  };
  render() {
    let Items = this.props.value;

    if (+this.props.onBtnClick === 1) {
      Items = this.props.value;
    }
    if (+this.props.onBtnClick === 2) {
      Items = this.props.value.filter((data) => data.isSelected === false);
    }
    if (+this.props.onBtnClick === 3) {
      Items = this.props.value.filter((data) => data.isSelected === true);
    }

    let data = Items.map((data, index) => {
      return (
        <div className="form-check container CheckBox" key={index}>
          <input
            className="form-check-input me-2"
            type="checkbox"
            onChange={(e) => this.handleChange(e, index)}
            checked={data.isSelected === true}
          />

          <label
            className={data.isSelected ? 'striked' : 'notStriked'}
            // style={{ textDecorationLine: this.props.forStrikeStyle }}
          >
            {data.name}
          </label>
          <div className="EditDeleteBtn">
            <button
              onClick={() => this.editElement(data.name, index)}
              className="btn btn-warning"
            >
              Edit
            </button>
            <button
              onClick={() => this.deleteElement(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
          <br />
        </div>
      );
    });
    return <div className="mt-2">{data}</div>;
  }
}

export default CheckBox;
