import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {/* Editing the expense with id of {props.match.params.id} */}
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

// const EditExpensePage = (props) => {
//     console.log('props', props);
//     return (
//         <div>
//             {/* Editing the expense with id of {props.match.params.id} */}
//             <ExpenseForm
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     console.log('updated', props.expense);
//                     props.dispatch(editExpense({ id: props.expense.id, updates: expense }));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={e => {
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//                 }}>
//                 Remove
//             </button>
//         </div>
//     );
// };

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense({ id, updates: expense })),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
