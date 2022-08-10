import React, { useEffect, useState } from 'react';


const Customers = () => {
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('/api/customers')
        .then(data => data.json())
        .then(customers => {
            setNames([...customers])
        })
    }, [])


    return (
        <div>
            <h1>Hello</h1>
            <ul>
                 {names.length > 0 ? names.map(name => {
                    return <li key={name.id}>{name.name}</li>
                }): 'loading...'}
            </ul>
        </div>
        
       
    )
}

export default Customers;