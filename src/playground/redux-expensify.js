import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0,} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  },
});


const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


const editExpense = ({ id, updates }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
        // return state.concat(action.expense);
        return [
            ...state,
            action.expense
        ];
    case 'REMOVE_EXPENSE':
        return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
        return state.map(expense => {
            if (expense.id === action.id) {
                console.log('hey man');
                console.log(action);
                return {
                   ...expense,
                   ...action.updates
                }
            } else {
                return expense;
            }
        })
    default:
      return state;
  }
};

// filters reducer

const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
    case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        };
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
    case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);


store.subscribe(() => {
    console.log(store.getState());
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('VE', visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// returns the action object back
console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense({ id: expenseTwo.expense.id, amount: 500}));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


const demoState = {
  expenses: [
    {
      id: "sdfsdfsdf",
      description: "January Rent",
      note: "This was the final payment of rent",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};


// object spread example

// const user = {
//     name: 'Tom',
//     age: 24
// };

// console.log({
//     ...user,
//     location: "Toronto",
//     age: 27
// });