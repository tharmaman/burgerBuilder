import React, { Component } from 'react';
import Aux from '../../hocs/Aux/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'; // our axios instance to firebase
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hocs/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    // declaring state using modern tings
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingKey => (
                ingredients[ingKey]
            ))
            .reduce(((acc, el) => acc + el), 0);
        this.setState({
            purchasable: sum > 0,
        });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            // eslint-disable-next-line
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            // eslint-disable-next-line
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        });
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Danny Tharmz',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41231',
                    country: 'Germany',
                },
                email: 'test@test.com',
            },
            deliveryMethod: 'fastest',
        };
        axios.post('./orders.json', order) // for firebase always remember .json
            .then((response) => {
                console.log(response);
                this.setState({
                    loading: false,
                    purchasing: false,
                });
            })
            .then((error) => {
                console.log(error);
                this.setState({
                    loading: false,
                    purchasing: false,
                });
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };

        // eslint-disable-next-line
        for (const key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }
        const { ingredients } = this.state;

        let orderSummary = (
            <OrderSummary
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />
        );

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                <Burger ingredients={ingredients} />
                {/* Passing down addIngredientHandler to BuildControls */}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
