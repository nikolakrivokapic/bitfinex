import React, { Component } from 'react';
import { connect } from 'react-redux';
import subscribeToChannel from '../../actions/subscribeToChannel';
import updateOrderBook from '../../actions/updateOrderBook';
import updateBookStructure from '../../actions/updateBookStructure';
import updateTrades from '../../actions/updateTrades';
import updateLoading from '../../actions/updateLoading';
import updateCurrentTrades from '../../actions/updateCurrentTrades';
import OrderBook from '../order-book';
import Trades from '../trades';

import {
    AppWrapper
} from './styles';

export class App extends Component {
    callBookApi() {
        this.bookConnection = new WebSocket('wss://api.bitfinex.com/ws/2');
        this.props.updateLoading(true);

        let msg = JSON.stringify({
            event: 'subscribe',
            channel: 'book',
            symbol: 'tBTCUSD',
            prec: this.props.orderBook.precisionString
        });

        this.bookConnection.addEventListener('open', () => {
            this.bookConnection.send(msg);
        });

        this.bookConnection.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);
            if(message.event && message.event === 'subscribed') {
                this.props.subscribeToChannel(message);
            }

            const chanId = this.props.channelInfo.chanId;

            if(message[1] && message[1].length > 3) {
                this.props.updateBookStructure(message[1]);
                this.props.updateLoading(false);

                return;
            }
            if(!chanId || chanId !== message[0] || !Array.isArray(message[1])) {
                return;
            }

            this.props.updateOrderBook(message[1]);
        });
    }

    callTradesApi() {
        const socket = new WebSocket('wss://api.bitfinex.com/ws/2');

        let msg = JSON.stringify({
            event: 'subscribe',
            channel: 'trades',
            symbol: 'tBTCUSD'
        });

        socket.addEventListener('open', () => {
            socket.send(msg);
        });

        socket.addEventListener('message', (event) => {
            const message = JSON.parse(event.data);

            if(message[1] && message[1].length > 3) {
                this.props.updateTrades(message[1]);
                return;
            }

            if(message[1] === 'te') {
                this.props.updateCurrentTrades(message[2]);
            }
        });
    }

    componentDidMount() {
        this.callBookApi();
        this.callTradesApi();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.orderBook.precisionString !== this.props.orderBook.precisionString) {
            this.callBookApi();
        }
    }

    render() {
        return (
            <AppWrapper>
                <OrderBook data={this.props.orderBook} precisionValue={this.props.orderBook.precisionValue} loading={this.props.loading}/>
                <Trades data={this.props.trades} />
            </AppWrapper>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    subscribeToChannel: (data) => dispatch(subscribeToChannel(data)),
    updateOrderBook: (data) => dispatch(updateOrderBook(data)),
    updateBookStructure: (data) => dispatch(updateBookStructure(data)),
    updateTrades: (data) => dispatch(updateTrades(data)),
    updateCurrentTrades: (data) => dispatch(updateCurrentTrades(data)),
    updateLoading: (data) => dispatch(updateLoading(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
