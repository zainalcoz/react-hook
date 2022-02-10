import React, { useState } from 'react';

// use Hook-state in Function
export default function Hitung() {
    const [pengunjung, setPengunjung] = useState(0);
  return (
    <div>
        <p>Jumlah Pengunjung: {pengunjung}</p>
        <button onClick={() => setPengunjung(pengunjung + 1)}>Tambah Pengunjung</button>
    </div>
  )
}

/*
import React, { Component } from 'react';

export default class Hitung extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         pengunjung: 0
      }
    }
    
    render() {
        const { pengunjung } = this.state
        return (
            <div>
                <p>Jumlah Pengunjung: {pengunjung}</p>
                <button onClick={() => this.setState({ pengunjung: pengunjung + 1 }) }>Tambah Pengunjung</button>
            </div>
        )
    }
}
*/
