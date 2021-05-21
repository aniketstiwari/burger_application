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

        //component did mount will only be called once the component is called
        // below as WrappedComponent. TO fix it change it change ComponentDidMount
        //to ComponentWillMount. Also, in future ComponentWillMount wont be supported
        // so instead you can make use of constructor
        //General idea is we want below codes gets executed as soon as the component
        //is created

        //Here we have a problem whenever we will call WillErrorHandler component
        //with other component then componentWillMount will be called again & again
        //And we will have old interceptors which will exist in memory or it can leak 
        // memory. So, we should actually remove the interceptors when this component
        // get unmounted. To do this we can make use of componentWillUnmount
        //TO remove interceptors we need to save in the property of class
        UNSAFE_componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            console.log("will Unmount", this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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