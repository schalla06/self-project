import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.svg';

const Welcome = () => (
    <>
        <div className="logo">
            <img src={logo} alt="company logo"></img>
        </div>
        <div className="content">
            <h1 className="content__heading">Welcome</h1>
            <p className="content__subheading">Please tell us a bit yourself to get started</p>
        </div>
    </>
);

export default Welcome;