import Actions from '../constants/actions';

const actionCreator = (data) => ({
    type: Actions.UPDATE_TRADES,
    data
});

export default actionCreator;
