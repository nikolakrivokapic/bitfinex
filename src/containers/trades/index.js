import React, { Component } from 'react';

import {
    Container,
    Content,
    Row,
    Header,
} from './styles';

export class Trades extends Component {
    render() {
        return (
            <Container>
                <div>TRADES</div>
                <Content>
                    <Header>
                        <div>Time</div>
                        <div>Price</div>
                        <div>Amount</div>
                    </Header>
                    <div>
                        {
                            this.props.data && this.props.data.map((item, i) => {
                                return <Row key={i}>
                                    <div><span>{this.formatTime(item[1])}</span></div>
                                    <div><span>{item[3].toFixed(1)}</span></div>
                                    <div><span>{item[2].toFixed(4)}</span></div>
                                </Row>
                            })
                        }
                    </div>
                </Content>
            </Container>
        );
    }

    formatTime(timestamp) {
        let date = new Date(timestamp);
        let hours = date.getHours();
        let minutes = `0${date.getMinutes()}`;
        let seconds =  `0${date.getSeconds()}`;
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
}

export default Trades;
