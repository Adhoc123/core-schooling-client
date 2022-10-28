import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Content.css'
const Content = ({content}) => {
    
    return (
      <div className='single p-4 rounded'>
        <img style={{height:'150px',borderRadius:'10px', width:'250px'}} src={content.picture}/>
        <br></br>
        <strong className='fs-3'>{content.title}</strong>
        <p>{content.about.slice(0,100)} . . .</p>
      </div>
    );
};

export default Content;