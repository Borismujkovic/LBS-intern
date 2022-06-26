import React from 'react';
import Header from '../../Components/Header/Header'
import './HiringPage.scss'

const HiringPage = (props) => {



    return <div id='hiring-page'>
        <Header togglePages={props.togglePages}/>
        <div className='put'>
            <div className='formular'>
            <form action="" method=''></form>
            <h3>Full Name:</h3>
            <input type="text" name="fullname" id="" className='name'/>
            <h3>Expected Salary:</h3>
            <input type="text" className='salary'/>
            <h3>LinkedIn:</h3>
            <input type="text" className='linkein'/>
            <h3>Lanuages:</h3>
            <input type="text" className='languages'/>
            <h3>Technologies:</h3>
            <textarea name="" id="" cols="50" rows="10"></textarea>
            </div>
            <button>Become Our Employee :)</button>
        </div>
    </div>
}
export default HiringPage