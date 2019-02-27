import expensesReducer from "../../reducers/expenses";
import expensesTestData from "../fixtures/expenses";

test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expensesTestData[1].id
    };
    const state = expensesReducer(expensesTestData, action);

    expect(state).toEqual([expensesTestData[0], expensesTestData[2]]);
});

test("Should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    };
    const state = expensesReducer(expensesTestData, action);

    expect(state).toEqual(expensesTestData);
});

test("Should add an expense", () => {
    const expense = {
        id: '5',
        description: "New expense",
        note: "Add by test case",
        amount: 500,
        createdAt: 0
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expensesTestData, action);

    expect(state).toEqual([...expensesTestData, expense]);
});

test("Should edit an expense", () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: expensesTestData[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expensesTestData, action);

    expect(state[1].amount).toBe(amount);
});

test("Should not edit an expense if bad id", () => {
    const amount = 122000;
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            amount
        }
    };
    const state = expensesReducer(expensesTestData, action);

    expect(state).toEqual(expensesTestData);
});