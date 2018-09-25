import React from 'react';
import Aux from '../../../hocs/Aux';

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
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;
