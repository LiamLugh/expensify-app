import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import testExpenseData from "../fixtures/expenses";

test("Should render empty ExpenseForm correctly.", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseForm with expense data.", () => {
    const wrapper = shallow(<ExpenseForm expense={testExpenseData[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission.", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change.", () => {
    const value = "New description.";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
});

test("Should set note on textarea change.", () => {
    const value = "New note.";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
});

test("Should set amount on vaild input.", () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe(value);
});

test("Should not set amount on invaild input.", () => {
    const value = "12.122";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("");
});

test("Should call onSubmit prop for valid form submission.", () => {
    const onSubmitSpy = jest.fn();
    const expense = testExpenseData[0];
    const wrapper = shallow(<ExpenseForm expense={expense} onSubmit={onSubmitSpy}/>);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expense.description,
        note: expense.note,
        amount: expense.amount,
        createdAt: expense.createdAt
    });
});

test("Should set new date on date change.", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calander focus on change.", () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
    expect(wrapper.state("calanderFocused")).toEqual(focused);
});