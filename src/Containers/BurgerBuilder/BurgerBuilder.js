import React, { Component } from 'react';
import Aux from '../../hocs/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

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
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;
