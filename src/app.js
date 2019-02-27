import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
store.subscribe(() => {
    const state = store.getState();
});

store.dispatch(addExpense({description: "Water Bill", note:"Gawd damned water fees...", amount:10000 }));
store.dispatch(addExpense({description: "Gas Bill", note:"Natural gas bro...", amount:100, createdAt: 1000}));
store.dispatch(addExpense({description: "Rent", note:"Fuckin RENT my dude.", amount:195000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));