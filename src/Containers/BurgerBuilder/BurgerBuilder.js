import React, { Component } from 'react';
import Aux from '../../hocs/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    // declaring state using modern tings
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    }

    render() {
        const { ingredients } = this.state;

        return (
            <Aux>
                <Burger ingredients={ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;
