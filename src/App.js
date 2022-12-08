import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

export class App extends Component {
  state = {
    txtBoxState: false,
  };
  render() {
    return (
      <div>
        <Header txtBoxState={this.state.txtBoxState} />
        <Footer />
      </div>
    );
  }
}

export default App;
