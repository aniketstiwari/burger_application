import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

//the reason we converted it to class component because this component
// was rendering even though if it is not visible
// This component should only be render when the props purchasing is true
class OrderSummary extends Component {
    //this can be now converted back to functional component
    componentWillUpdate() {
        console.log('[OrderSummary] willUpdate')
    }

    render() {
        const ingredentSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredentSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
    
};

export default OrderSummary;