import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'; // our axios instance to firebase

export const addIngredient = name => ({
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name,
});

export const removeIngredient = name => ({
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name,
});

export const setIngredients = ingredients => ({
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
});

export const fetchIngredientsFailed = () => ({
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
});

export const initIngredients = () => (dispatch) => { // thunk allows us to pass dispatch
    axios.get('https://react-my-burger-fa689.firebaseio.com/ingredients.json')
        .then((response) => {
            dispatch(setIngredients(response.data));
        })
        .catch(() => {
            dispatch(fetchIngredientsFailed());
        });
};
