import React from "react";
import { shallow } from "enzyme";
import AddExpensePage from "../../components/AddExpensePage";
import expensesTestData from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(( ) => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test("Should render AddExpensePage correctly.", () => {
    expect(wrapper).toMatchSnapshot();
});

/*
test("Should handle onSubmit.", () => {
    const expense = expensesTestData[0];
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
    wrapper.find("ExpenseForm").prop("onSubmit")(expense);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(addExpense).toHaveBeenLastCalledWith(expense);
});
*/