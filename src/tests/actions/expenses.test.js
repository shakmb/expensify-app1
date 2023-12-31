import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("should set up edit expense object", () => {
  const action = editExpense({
    id: "123abc",
    updates: { note: "new note value" },
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "new note value" },
  });
});

test("should set up add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
    type: "ADD_EXPENSE",
  });
});

test("should set up add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
