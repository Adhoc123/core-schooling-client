import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Content from '../Content/Content';

const LeftNav = () => {
    const [contents, setContents] = useState([]);
    useEffect(()=>{
        fetch('https://core-schooling-server.vercel.app/all-items')
        .then(res => res.json())
        .then(data => setContents(data))
    },[])
    return (
        <div className='mt-5'>
            {
               contents.map(content=><p><Link to={`/items/${content.id}`}>{content.title}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;