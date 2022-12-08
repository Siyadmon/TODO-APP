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

  ClickedActiveBtn = (checked, val) => {
    this.setState({
      checked: [...this.state.checked, { checked: checked, val: val }],
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
          targetAndVal={this.ClickedActiveBtn}
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
