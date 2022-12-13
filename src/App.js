import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CheckBox from './components/TodoListCheck';

export class App extends Component {
  state = {
    txtBoxState: false,
    value: [], // array ,object inside array ,isSelected = checked/uncheck , isEditMode = true
    checked: [],
    onBtnClick: null,
    isEditMode: false,
    isAddMode: false,
  };

  setTxt = () => {
    this.setState({
      txtBoxState: true,
      isAddMode: true,
    });
  };

  setValue = (txtValue) => {
    this.setState({
      value: [
        ...this.state.value,
        {
          name: txtValue,
          isSelected: false,
        },
      ],
      txtBoxState: false,
    });
  };

  targetAndVal = (val, index) => {
    this.setState({
      value: this.state.value.map((obj, indexPos) => {
        return {
          ...obj,
          isSelected: indexPos === index ? val.target.checked : obj.isSelected,
        };
      }),
    });
  };

  onBtnClick = (btnVal) => {
    this.setState({
      onBtnClick: btnVal,
    });
  };

  Deletion = (index) => {
    this.setState({
      value: this.state.value.filter((ind, i) => i !== index), //index is always 2nd arguement
    });
  };

  editElement = (editVal, index) => {
    console.log(editVal, index);
    // if (this.state.value.includes(editVal)) {
    this.setState({
      isEditMode: true,
      editVal: editVal,
    });
    //   }
  };

  render() {
    console.log(this.state.isAddMode);
    //console.log('value', this.state.value);
    console.log(this.state.value);

    // console.log('checked', this.state.checked);
    // console.log(this.state.value.map((d) => d.name));

    return (
      <div>
        <div className="container outer">
          <div className="header border p-4 mt-5">
            <h1 className="pb-4">THINGS TO DO</h1>

            {this.state.txtBoxState === true ? (
              <Header value={this.setValue} />
            ) : null}

            {/* {this.state.editValState === true ? (
              <Header value={this.setEditValue} editVal={this.state.editVal} />
            ) : null} */}
          </div>
        </div>

        <CheckBox
          value={this.state.value}
          checked={this.state.checked}
          targetAndVal={this.targetAndVal}
          onBtnClick={this.state.onBtnClick}
          forStrikeStyle={this.state.forStrikeStyle}
          DeleteValue={this.Deletion}
          editElement={this.editElement}
        />

        <Footer
          setTxtState={this.setTxt}
          btnDisable={this.state.txtBoxState}
          onBtnClick={this.onBtnClick}
        />
      </div>
    );
  }
}

export default App;
