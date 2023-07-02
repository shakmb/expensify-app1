import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Approuter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

console.log("initial", store.getState());

const expenseOne = store.dispatch(
  addExpense({ description: "Water bill", amount: 4500 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Gas bill", createdAt: 1000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "Rent", amount: 109500 })
);

console.log(expenseOne);
console.log(expenseTwo);

console.log(store.getState());

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
console.log("state", state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log("VE", visibleExpenses);

const jsx = (
  <Provider store={store}>
    <Approuter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// example of passing component/children in to another component
// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//              {/*props.content*/}
//              {props.children}
//             <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <h1>This is my page</h1>
//     </div>
// )

// ReactDOM.render((
//     <Layout>
//         <p>This is inline</p>
//         {template}
//     </Layout>
//     ), document.getElementById('app'));

// comparing old v new class syntax to show class properties

// class OldSyntax {
//     constructor() {
//         this.name = "mike";
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi, my name is ${this.name}.`
//     }
// }

// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
// console.log(oldSyntax.getGreeting());

// //--------------------

// class NewSyntax {
//     name = "tony";
//     getGreeting = () => {
//         return `Hi, my name is ${this.name}.`
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
// console.log(newSyntax.getGreeting());
