import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../auxillary';

const withErrorHandler = (WrapperComponet, axios) => {
    return class extends Component {
        state = {
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req =>{
                this.setState({error:null});
                return req;
            })
            axios.interceptors.response.use(null,error =>{
                this.setState({error:error});
            });
        }
        errorConfirmHandler = () => {
            this.setState({error:null})
        }
        render(){
            return(
                <Auxillary>
                    <Modal show={this.state.error}>
                        {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrapperComponet {...this.props}></WrapperComponet>
                </Auxillary>
            )
        }
    } 
}

export default withErrorHandler;