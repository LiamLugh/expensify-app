import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenseTestData from "../fixtures/expenses";

test("Should render ExpenseListItem correctly.", () =>{
    const wrapper = shallow(<ExpenseListItem {...expenseTestData[1]} />);
    expect(wrapper).toMatchSnapshot();
});