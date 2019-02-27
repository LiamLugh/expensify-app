import { createStore } from "redux";

// Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ setValue = 0 } = {}) => ({
    type: "SET",
    setValue
});

const resetCount = () => ({
    type: "RESET"
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "SET":
            return {
                count: action.setValue
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setValue: -100 }));

//
// Object destructuring
//

const book = {
    title: "ego is the enemy",
    author: "Ryan Holiday",
    publisher: {
        name: "Penguin"
    }
}

const { name: publisherName = "Self published" } = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ["123 Fake Street", "Corio", "Victoria", "3214"];

const [, city, state = "Nowhere Land"] = address;

console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);