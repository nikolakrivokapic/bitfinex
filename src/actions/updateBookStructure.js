import Actions from '../constants/actions';

const actionCreator = (data) => ({
    type: Actions.UPDATE_ORDER_BOOK_STRUCTURE,
    data
});

export default actionCreator;
