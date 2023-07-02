import { createStore } from "redux";

// const add = ({a, b}) => {
//     return a + b;
// };

// console.log(add({ a: 1, b: 12 }));


// action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
        incrementBy
    });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


// reducers
// they're pure functions
// never change state or action

const countReducer = (state = { count: 0 }, action) => {
    console.log("running");
    switch (action.type) {
      case "INCREMENT":
          // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
          // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
          const decrementBy = action.decrementBy;
        return {
          count: state.count - decrementBy,
        };
        case 'SET':
            return {
                count: action.count
            };
      case "RESET":
        return {
          count: 0,
        };
      default:
        return state;
    }
  }

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - an object that gets sent to the store

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// store.dispatch({
//   type: "INCREMENT",
// });

store.dispatch(incrementCount());

// store.dispatch({
//   type: "RESET",
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: "DECREMENT",
//   });

// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));