import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';
import axios from '../../axios-orders';

const withErrorHandler = (WrappedComponent, axios) => {
    // return (props) => {
    //     return (
    //         <Aux>
    //           <Modal show>
    //               Something didn't work
    //           </Modal>
    //           <WrappedComponent  {...props} />
    //         </Aux>
    //     )
    // }
    
    //converting it to class base component
    //The class will be anonymous class

    return class extends Component {
        state = {
            error: null
        }
        componentDidMount() {
            axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                  <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                  </Modal>
                  <WrappedComponent  {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;