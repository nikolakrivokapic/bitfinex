import { combineReducers } from 'redux';
import orderBookReducer from './orderBookReducer';
import channelReducer from './channelReducer';
import tradesReducer from './tradesReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
    orderBook: orderBookReducer,
    channelInfo: channelReducer,
    trades: tradesReducer,
    loading: loadingReducer
});
