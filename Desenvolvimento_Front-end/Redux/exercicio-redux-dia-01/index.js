const redux = require('redux');

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

const fazerLogin = (email) => ({ type: "LOGIN", email });

console.log(store.getState());

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());