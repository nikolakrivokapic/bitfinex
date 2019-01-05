import Actions from '../constants/actions';

export default (state = {precisionString: 'P0', precisionValue: 3}, action) => {
    switch (action.type) {
        case Actions.UPDATE_ORDER_BOOK_STRUCTURE:
            return {...state, bids: action.data, asks: action.data, copyBids: action.data, copyAsks: action.data};
        case Actions.UPDATE_ORDER_BOOK:

            const price = action.data[0] || 0;
            const count = action.data[1] || 0;
            const amount = action.data[2] || 0;

            if(count > 0 ) {
                if(amount > 0) {
                    let hasItem = false;
                    let arr = state.bids.map((item) => {
                        if(item[0] === price) {
                            hasItem = true;
                            return [price, count, amount];
                        }
                        return item;
                    });

                    if(!hasItem) {
                        arr.unshift([price, count, amount]);
                    }
                    return {...state, bids: arr, copyBids: arr};
                } else if (amount < 0) {
                    let hasItem = false;
                    let arr = state.asks.map((item) => {
                        if(item[0] === price) {
                            hasItem = true;
                            return [price, count, amount];
                        }
                        return item;
                    });

                    if(!hasItem) {
                        arr.unshift([price, count, amount]);
                    }
                    return {...state, copyAsks: arr};
                }
            } else if (count === 0) {
                if(amount === 1) {
                    const arr = state.bids.filter((item) => item[0] !== price);
                    return {...state, bids: arr, copyBids: arr};
                } else if (amount === -1) {
                    const arr = state.asks.filter((item) => item[0] !== price);
                    return {...state, asks: arr, copyAsks: arr};
                }
            }

            return state;

        case Actions.UPDATE_PRECISION:
            const newPrecision =  action.data === 'minus' ? state.precisionValue - 1 : state.precisionValue + 1;

            let precisionString;

            if(newPrecision === 3) {
                precisionString = 'P0';
            } else if (newPrecision === 2 ) {
                precisionString = 'P1';
            } else if (newPrecision === 1 ) {
                precisionString = 'P2';
            } else if (newPrecision === 0 ) {
                precisionString = 'P3';
            }

            return {...state, precisionValue: newPrecision, precisionString };
        default:
            return {...state};
    }
}
