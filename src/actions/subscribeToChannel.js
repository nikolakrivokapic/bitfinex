import Actions from '../constants/actions';

const actionCreator = (data) => ({
    type: Actions.SUBSCRIBE_SUCCESS,
    data
});

export default actionCreator;
