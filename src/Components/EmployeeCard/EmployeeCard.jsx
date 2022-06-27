import React from 'react';
import './EmployeeCard.scss'

const EmployeeCard = (props) => {




    return <div id='employee-card'>
        <button onClick={() => {
          props.toggleModal();
          props.selectEmployee(props.data);
        }}>i</button>
        <div className='profile-details'>
        <img src={props.data.image} alt="" />
        <h1>{props.data.fullName}</h1>
        </div>
    </div>
}

export default EmployeeCard