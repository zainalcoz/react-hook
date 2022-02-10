import React, { Component } from 'react';
import Cycle from './Cycle';
import CycleFunction from './CycleFunction';

export default class Lifecycle extends Component {
  render() {
    return (
        <div>
            <h1>Belajar LifeCycle</h1>
            <Cycle></Cycle>
            <hr></hr>
            <CycleFunction></CycleFunction>
        </div>
    )
  }
}
