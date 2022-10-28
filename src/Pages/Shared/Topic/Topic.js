import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Topic = () => {
    const data = useLoaderData();
    return (
        <div className='single p-4 rounded'>
            <div className='d-flex'>
                <div>
                <img style={{height:'150px',borderRadius:'10px', width:'250px'}} src={data.picture}/>
                <br></br>
                <strong className='fs-3'>{data.title}</strong>
                <p>{data.about}</p>
                <Button variant="outline-info" className='fs-5'>
                <Link to={`/checkout/${data.id}`} style={{ textDecoration: 'none' }}>Get premium access.</Link>
                </Button>
                </div>
                <div>
                    <Button variant="outline-info" className='fs-5'><Link to='/contents' style={{ textDecoration: 'none' }}>DownLoad PDF</Link></Button>
                    
                </div>
            </div>
           
      </div>
    );
};

export default Topic;