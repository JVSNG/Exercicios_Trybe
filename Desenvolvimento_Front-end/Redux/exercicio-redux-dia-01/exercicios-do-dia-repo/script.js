const INITIAL_STATE = {color: 'black'}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: return state;
  }
};

const store = Redux.createStore(reducer);
console.log(store);
