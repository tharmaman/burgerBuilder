import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import Order from '../../Components/Order/Order';
import withErrorHandler from '../../hocs/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions';
import Spinner from '../../Components/UI/Spinner/Spinner';

class Orders extends Component {
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={+order.price} // adding plus converts it to number
                />
            ));
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    orders: state.orders.orders,
    loading: state.orders.loading,
});

const mapDispatchToProps = dispatch => ({
    onFetchOrders: () => dispatch(actions.fetchOrders()),

});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
