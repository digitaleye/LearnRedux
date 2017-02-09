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
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

//subscribe to changes
var unsuscribe = store.subscribe(()=>{
    var state = store.getState();

    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
})
//unsuscribe();

console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Fahar'
});



store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
})
console.log('Name should be Fahar', store.getState());
