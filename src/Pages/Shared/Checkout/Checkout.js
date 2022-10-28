import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='d-flex'>
            <h1 className='me-5'>{data.title}</h1>
            <h1>{data.id}</h1>
        </div>
    );
};

export default Checkout;