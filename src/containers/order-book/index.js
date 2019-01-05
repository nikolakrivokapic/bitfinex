import React, { Component } from 'react';
import { connect } from 'react-redux';
import updatePrecision from '../../actions/updatePrecision';

import {
    Container,
    BookBids,
    Books,
    BookAsks,
    BookHeader,
    BookRow,
    Controls,
    Control
} from './styles';

export class OrderBook extends Component {
    constructor(props) {
        super(props);

        this.increasePrecision = this.increasePrecision.bind(this);
        this.decreasePrecision = this.decreasePrecision.bind(this);
    }

    increasePrecision() {
        this.props.updatePrecision('plus');
    }

    decreasePrecision() {
        this.props.updatePrecision('minus');
    }

    render() {
        return (
            <Container>
                <Controls>
                    <Control onClick={this.decreasePrecision} active={this.props.precisionValue !== 0}>-</Control>
                    <Control onClick={this.increasePrecision} active={this.props.precisionValue !== 3}>+</Control>
                </Controls>
                <Books >
                    <BookBids loading={this.props.loading}>
                        <BookHeader>
                            <div>Count</div>
                            <div>Amount</div>
                            <div>Total</div>
                            <div>Price</div>
                        </BookHeader>
                        <div>
                            {
                                this.props.data.bids && this.props.data.bids.map((item, i) => {
                                    return <BookRow key={i}>
                                        <div><span>{item[1]}</span></div>
                                        <div><span>{item[2]}</span></div>
                                        <div><span></span></div>
                                        <div><span>{item[0]}</span></div>
                                    </BookRow>
                                })
                            }
                        </div>

                    </BookBids>
                    <BookAsks loading={this.props.loading}>
                        <BookHeader>
                            <div>Price</div>
                            <div>Total</div>
                            <div>Amount</div>
                            <div>Count</div>
                        </BookHeader>
                        <div>
                            {
                                this.props.data.asks && this.props.data.asks.map((item, i) => {
                                    return <BookRow key={i}>
                                        <div><span>{item[0]}</span></div>
                                        <div><span></span></div>
                                        <div><span>{item[2]}</span></div>
                                        <div><span>{item[1]}</span></div>
                                    </BookRow>
                                })
                            }
                        </div>
                    </BookAsks>
                </Books>
            </Container>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updatePrecision: (choice) => dispatch(updatePrecision(choice))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook);
