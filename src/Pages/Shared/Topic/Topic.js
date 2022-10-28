import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ReactToPrint from 'react-to-print';
import ReactToPdf from 'react-to-pdf';
import { useRef } from 'react';

const Topic = () => {
    const ref = React.createRef();
    const data = useLoaderData();
    return (
        <div className='single p-4 rounded'>
            <div className='d-flex'>
                <div >
                    <div ref={ref}>
                    <img style={{height:'150px',borderRadius:'10px', width:'250px'}} src={data.picture}/>
                    <br></br>
                    <strong className='fs-3'>{data.title}</strong>
                    <p>{data.about}</p>
                    </div>
                    
                    <Button variant="outline-info" className='fs-5'>
                    <Link to={`/checkout/${data.id}`} style={{ textDecoration: 'none' }}>Get premium access.</Link>
                    </Button>
                </div>
                <div>
                  
                <ReactToPdf targetRef={ref} filename="About.pdf">
                   {({ toPdf }) => <Button variant="outline-info" className='fs-5' onClick={toPdf} style={{ textDecoration: 'none' }}>DownLoad PDF</Button>}
               </ReactToPdf>
                </div>
            </div>
           
      </div>
    );
};

export default Topic;