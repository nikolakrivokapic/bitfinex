import Actions from '../constants/actions';

export default (state = {}, action) => {
    switch (action.type) {
        case Actions.SUBSCRIBE_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
