import Actions from '../constants/actions';

export default (state = [], action) => {
    switch (action.type) {
        case Actions.UPDATE_TRADES:
            return action.data.sort((x, y) => y[1] - x[1]);
        case Actions.UPDATE_CURRENT_TRADES:
            const result = [...state, ...[action.data]].sort((x, y) => y[1] - x[1]);
            return result.slice(0, 30);
        default:
            return state;
    }
}
