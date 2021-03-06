import React, { Component } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

// eslint-disable-next-line
const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use((req) => {
                this.setState({
                    error: null,
                });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, (error) => {
                this.setState({
                    error,
                });
            });
        }

        // ! for when we don't need the burger builder component anymore => important later on
        // ejecting the interceptors once component is monuted
        // disappears after a while
        // removing intereceptors which prevent memory links
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null,
            });
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    };
};

export default withErrorHandler;
