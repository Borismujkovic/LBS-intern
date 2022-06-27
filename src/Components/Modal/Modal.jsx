import React from 'react';
import './Modal.scss'

const Modal = (props) => {




    return    <div className='wrapper'>
    <div className='modal'>
        <button onClick={props.toggleModal}>X</button>
        <div className="modal-details">
        <h1>{props.modal.fullName}</h1>
        {props.modal.title && <h3>Seniority: {props.modal.title}</h3>}
        {props.modal.education && <h3>Seniority: {props.modal.education}</h3>}
      <h3>Salary: {props.modal.salary} €</h3>
      {props.modal.seniority && <h3>Seniority: {props.modal.seniority}</h3>}
      {props.modal.languages && <h3>Languages: {props.modal.languages}</h3>}
      {props.modal.technology && <ul>
        <h3>Technologies:</h3>{" "}
        {props.modal.technology.map((e) => (
          <li>{e}</li>
        ))}
      </ul>}
      {props.modal.skills && <ul>
        <h3>Skills:</h3>{" "}
        {props.modal.skills.map((e) => (
          <li>{e}</li>
        ))}
      </ul>}
      </div>
    </div>
</div>

}

export default Modal