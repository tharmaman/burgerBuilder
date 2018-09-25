import React, { Component } from 'react';
import Aux from '../../hocs/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    // declaring state using modern tings
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
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
