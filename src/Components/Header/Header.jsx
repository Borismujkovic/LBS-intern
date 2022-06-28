import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = (props) => {




    return <div id='header'>
        <div>
            <Link to='/' className='img'><img src="https://lbs.com.my/wp-content/uploads/2020/05/lbg-logo-large.png" alt="" /></Link>
        </div>
        <div className='hiring-page'>
            <Link to='/new-developer' className='button'>Hire New Staff</Link>
        </div>
        
    </div>
}

export default Header