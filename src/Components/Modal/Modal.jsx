import React, { Component } from 'react';
import './Modal.scss'

const Modal = (props) => {




    return    <div className='wrapper'>
    <div className='modal'>
        <button onClick={props.toggleModal}>X</button>
    </div>
</div>

}

export default Modal