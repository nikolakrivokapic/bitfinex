import Actions from '../constants/actions';

export default (state = false, action) => {
    switch (action.type) {
        case Actions.UPDATE_LOADING:
            return action.value;
        default:
            return state;
    }
}
