import React, { Component } from 'react';
import './Header.scss'

const Header = (props) => {




    return <div id='header'>
        <div>
        <img src="https://lbs.com.my/wp-content/uploads/2020/05/lbg-logo-large.png" alt="" />
        <h2></h2>
        </div>
        <div className='hiring-page'>
            <button onClick={props.togglePages}>Hire New Staff</button>
        </div>
        
    </div>
}

export default Header