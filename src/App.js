import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CheckBox from './components/TodoListCheck';

export class App extends Component {
  state = {
    txtBoxState: false,
    value: [],
    checked: [],
    onBtnClick: null,
  };

  setTxt = () => {
    this.setState({
      txtBoxState: true,
    });
  };

  setValue = (txtValue) => {
    this.setState({
      value: [...this.state.value, txtValue],
      txtBoxState: false,
    });
  };

  targetAndVal = (checked, val) => {
    this.state.checked.filter((todo) => todo.name === val).length > 0
      ? this.setState({
          ...this.state,
          checked: this.state.checked.filter((todo) => todo.name !== val),
        })
      : this.setState({
          ...this.state,
          checked: [...this.state.checked, { name: val, selected: checked }],
        });
  };

  onBtnClick = (btnVal) => {
    this.setState({
      onBtnClick: btnVal,
    });
  };

  render() {
    return (
      <div>
        <div className="container outer">
          <div className="header border p-4 mt-5">
            <h1 className="pb-4">THINGS TO DO</h1>

            {this.state.txtBoxState === true ? (
              <Header value={this.setValue} val={this.state.value} />
            ) : null}
          </div>
        </div>

        <CheckBox
          value={this.state.value}
          checked={this.state.checked}
          targetAndVal={this.targetAndVal}
          onBtnClick={this.state.onBtnClick}
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
