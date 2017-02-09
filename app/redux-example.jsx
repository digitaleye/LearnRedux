var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {

    switch (action.type){
        case 'CHANGE_NAME':
            return {
                ...state,
                name:action.name
            };
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fahar'
});

console.log('Name should be Fahar', store.getState());
