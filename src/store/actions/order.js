import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => ({
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData,
});

export const purchaseBurgerFail = error => ({
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error,
});

export const purchaseBurgerStart = () => ({
    type: actionTypes.PURCHASE_BURGER_START,
});

export const purchaseBurger = (orderData, token) => (dispatch) => {
    dispatch(purchaseBurgerStart());
    console.log("INSIDE purchaseBurger");
    console.log(token);
    axios.post(`/orders.json?auth=${token}`, orderData) // for firebase always remember .json
        .then((response) => {
            console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch((error) => {
            dispatch(purchaseBurgerFail(error));
        });
};

export const purchaseInit = () => ({
    type: actionTypes.PURCHASE_INIT,
});

export const fetchOrdersSuccess = orders => ({
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
});

export const fetchOrdersFail = error => ({
    type: actionTypes.FETCH_ORDERS_FAIL,
    error,
});

export const fetchOrdersStart = () => ({
    type: actionTypes.FETCH_ORDERS_START,
});

export const fetchOrders = token => (dispatch) => {
    dispatch(fetchOrdersStart());
    axios.get(`/orders.json?auth=${token}`)
        .then((res) => {
            const fetchedOrders = [];

            // eslint-disable-next-line
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key,
                });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        })
        .catch((err) => {
            dispatch(fetchOrdersFail(err));
        });
};
