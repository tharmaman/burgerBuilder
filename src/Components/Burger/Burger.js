import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const { ingredients } = props;
    const transformedIngredients = Object.keys(ingredients)
    // keys returns us an array
        .map(ingKey => (
            // spread operator then Array(3) gives array with 3 undefined spaces
            // _ indicates blank don't care
            [...Array(props.ingredients[ingKey])].map((_, i) => (
                <BurgerIngredient key={ingKey + i} type={ingKey} />
            ))
        ));

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
