import React, { Component } from 'react';
import './Modal.css';
import Auxillary from '../../../hoc/auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    componentDidUpdate(){
        console.log('[Modal] didUpdate')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps.show, this.props.show)
        return true;
    }
    render(){
        return(
            this.props.show ? (
                <Auxillary>
                    <Backdrop show={this.props.show} clicked={this.props.modalClose}></Backdrop>
                    <div className="modal" show={this.props.show}>
                        {this.props.children}
                    </div>
                </Auxillary>
            ):null
        )
    }
}
export default Modal;