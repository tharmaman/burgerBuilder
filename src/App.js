import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hocs/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';

// eslint-disable-next-line
class App extends Component {
    // state = {
    //     show: true,
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             show: false,
    //         });
    //     }, 5000);
    // }

    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/orders" component={Orders} />
                        <Route path="/auth" component={Auth} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
