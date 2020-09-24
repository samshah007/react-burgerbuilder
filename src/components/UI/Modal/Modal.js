import React from 'react';
import './Modal.css';
import Auxillary from '../../../hoc/auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    props.show ? (
        <Auxillary>
            <Backdrop show={props.show} clicked={props.modalClose}></Backdrop>
            <div className="modal" show={props.show}>
                {props.children}
            </div>
        </Auxillary>
    ):null
    
)

export default modal;