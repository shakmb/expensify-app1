import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should return the correct count and total for 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={12940} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should return the correct count and total for 2 expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={2} expensesTotal={2000} />
  );
  expect(wrapper).toMatchSnapshot();
});
