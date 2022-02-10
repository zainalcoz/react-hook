import React, { Component } from 'react';

export default class Cycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         isUpdate: false
      }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => this.setState({
            name: json.name
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: this.state.name
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => this.setState({
            isUpdate: true
        }));
    }

    componentDidUpdate() {
        const { isUpdate } = this.state;
        if (isUpdate) {
            alert('Nama Berhasil diubah');
            this.setState({
                isUpdate: false
            })
        }
    }

    componentWillUnmount() {
        console.log("Komponen dicopot");
    }
    
    render() {
        return (
            <div>
                <h3>Name : {this.state.name}</h3>
                <hr></hr>
                <form>
                    <input type='text' placeholder='Masukkan Nama Baru' name='name' onChange={(event) => this.setState({ name: event.target.value})}></input>
                </form>
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </div>
        )
    }
}
