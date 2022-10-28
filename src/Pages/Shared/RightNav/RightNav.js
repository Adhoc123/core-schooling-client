import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import './RightNav.css';

const RightNav = () => {
    const [contents, setContents] = useState([]);
    useEffect(()=>{
        fetch('https://core-schooling-server.vercel.app/all-items')
        .then(res => res.json())
        .then(data => setContents(data))
    },[])
    return (
        <div className='mt-5 cols mb-5'>
            {
                contents.map(content=><Content key={content.id} content={content}></Content>)
            }
        </div>
    );
};

export default RightNav;