import React, { Component } from 'react';
import Layout from './hocs/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

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
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
