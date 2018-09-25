import React from 'react';
import Aux from '../../../hocs/Aux';
import Button from '../../UI/Button/Button';

// eslint-disable-next-line
const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => (
            <li key={ingKey}>
                <span
                    style={{ textTransform: 'capitalize' }}
                >
                    {/* // eslint-disable-next-line */}
                    {ingKey}
                    :
                    {props.ingredients[ingKey]}
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
                    Total Price: {props.price.toFixed(2)}
                </strong>
            </p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCanceled}
            >
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}
            >
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;
