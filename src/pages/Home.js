import React, { Component } from 'react';
import Hitung from '../componets/Hitung';
import Lifecycle from '../componets/Lifecycle';

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isHide: false
      }
    }
    
  render() {
      const { isHide } = this.state
    return (
        <div style={{ padding: '50px' }}>
            <header>
                <h1>Aplikasi Hook</h1>
            </header>
            <hr></hr>
            <Hitung></Hitung>
            <hr></hr>
            <button onClick={() => this.setState({ isHide: !isHide })}>
                { isHide ? 'Tampilkan' : 'Sembunyikan' }
            </button>
            { !isHide && <Lifecycle></Lifecycle> }
            <hr></hr>
            <footer>
                <p>By Zainal A.</p>
            </footer>
        </div>
    )
  }
}
