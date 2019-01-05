import Actions from '../constants/actions';

const actionCreator = (data) => ({
    type: Actions.UPDATE_CURRENT_TRADES,
    data
});

export default actionCreator;
