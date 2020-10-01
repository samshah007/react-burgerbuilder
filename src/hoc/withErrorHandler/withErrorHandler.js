import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxillary from '../auxillary';

const withErrorHandler = (WrapperComponet, axios) => {
    return class extends Component {
        state = {
            error:null
        }
        UNSAFE_componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(req =>{
                this.setState({error:null});
                return req;
            })
            this.resInterceptors = axios.interceptors.response.use(null,error =>{
                this.setState({error:error});
            });
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
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