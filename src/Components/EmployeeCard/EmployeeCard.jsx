import React from 'react';
import './EmployeeCard.scss'

const EmployeeCard = (props) => {




    return <div id='employee-card'>
        <button onClick={props.toggleModal}>i</button>
        <div>
        <img src={props.data.image} alt="" />
        <h1>{props.data.fullName}</h1>
        <h3>Seniority: {props.data.seniority}</h3>
        <h3>Salary: {`${props.data.salary} €`}</h3>
        <ul><h3>Technologies: </h3>{props.data.technology.map(e => <li>{e}</li>)}</ul>
        </div>
    </div>
}

export default EmployeeCard