import Actions from '../constants/actions';

const actionCreator = (data) => ({
    type: Actions.UPDATE_PRECISION,
    data
});

export default actionCreator;
