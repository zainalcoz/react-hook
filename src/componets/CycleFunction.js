import React, { useEffect, useState } from 'react';

function CycleFunction() {
    const [name, setName] = useState('');
    const [isUpdate, setUpdate] = useState(false);

    // like componentDidMount()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => setName(json.name));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();      
        fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: name
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => setUpdate(true));
    }

    // like componentDidUpdate()
    useEffect(() => {
        if (isUpdate) {
            alert('Nama Berhasil diubah (Func)');
            setUpdate(false)
        }
    }, [isUpdate])

    // like componentWillUnmount()
    useEffect(() => {
        return () => {
            console.log("Komponen dicopot (Func)");
        }
    }, [])

    return (
        <div>
            <h3>Name : {name}</h3>
            <hr></hr>
                <form>
                    <input type='text' placeholder='Masukkan Nama Baru' name='name' onChange={(event) => setName( event.target.value )}></input>
                </form>
                <button onClick={(event) => handleSubmit(event)}>Submit</button>
        </div>
    )
}

export default CycleFunction;
