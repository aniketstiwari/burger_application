import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

//the reason we converted it to class component because this component
// was rendering even though if it is not visible
// Also, if we render the wrapping parent element then the child component will only
// render if the parent components props changes as shown below
// Below if the modal component doesn't update the child component OrderSummary will
// not render

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    commponentWillUpdate() {
        console.log('[Modal] Willupdate')
    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
   
};

export default Modal;