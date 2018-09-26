import React, { Component } from 'react';
import Aux from '../../../hocs/Aux/Aux';
import Button from '../../UI/Button/Button';

// eslint-disable-next-line
class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingKey => (
                <li key={ingKey}>
                    <span
                        style={{ textTransform: 'capitalize' }}
                    >
                        {/* // eslint-disable-next-line */}
                        {ingKey}
                        :
                        {this.props.ingredients[ingKey]}
                    </span>
                </li>
            ));
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>
                    <strong>
                        {/* eslint-disable-next-line */}
                        Total Price: {this.props.price.toFixed(2)}
                    </strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCanceled}
                >
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
