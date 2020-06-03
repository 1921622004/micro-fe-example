import { createStore } from "redux";

const initState = {
  items: []
}

const reducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (action.type) {
    case 'add':
      let items = state.items.concat(payload);
      return { ...state, items }
    case 'remove':
      return { ...state, items: state.items.filter((v, i) => i !== payload) }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store