import React from 'react';
import './EmployeeCard.scss'

const EmployeeCard = (props) => {

  const deleteEmployee = () =>{
    fetch(`https://62b47af3da3017eabb0b778e.mockapi.io/frontend/${props.data.id}`, {
      method : 'DELETE',
      headers : {
        'content-type' : 'application/json'
      }
    })
    .then(res => res.json)
    .then(res => props.activateFetch())
  }




    return <div id='employee-card'>
      <div className='buttons'>

        <button className='button' onClick={() => {
          props.toggleModal();
          props.selectEmployee(props.data);
        }}>i</button>
        <button className='delete-button' onClick={deleteEmployee}>X</button>
        </div>
        <div className='profile-details'>
        <img src={props.data.image} alt="" />
        <h1>{props.data.fullName}</h1>
        </div>
    </div>
}

export default EmployeeCard