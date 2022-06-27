import React, { Component } from 'react';
import './Modal.scss'

const Modal = (props) => {




    return    <div className='wrapper'>
    <div className='modal'>
        <button onClick={props.toggleModal}>X</button>
        <h2>{props.modal.fullName}</h2>
      <h3>Salary: {props.modal.salary} €</h3>
      <h3>Seniority: {props.modal.seniority}</h3>
      <ul>
        <h3>Technologies:</h3>{" "}
        {props.modal.technology.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
</div>

}

export default Modal