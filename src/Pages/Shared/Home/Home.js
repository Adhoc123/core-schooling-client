import React from 'react';
import logo from '../../../assets/assets/logo.png';
import Image from 'react-bootstrap/Image';
import './Home.css';

const Home = () => {
    return (
        <div className='mt-5 d-lg-flex'>
            <Image src={logo} className="rounded-3 w-50" ></Image>
            <p className='mt-5 ms-5 p-5'><strong>coreSchooling</strong> is a place, from where you can learn domain related topic in depth.
            We have gathered many topics related IT to boost your career as an expert. We have world class module.
            Our beautiful management will help you to access anything you want.
            </p>
        </div>
        
    );
};

export default Home;