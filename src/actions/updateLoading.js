import Actions from '../constants/actions';

const actionCreator = (value) => ({
    type: Actions.UPDATE_LOADING,
    value
});

export default actionCreator;
