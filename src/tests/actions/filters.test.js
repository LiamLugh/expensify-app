import moment from "moment";
import { 
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate, 
    setEndDate 
} from "../../actions/filters";

test("Should generate set text action object", () => {
    const text = "Something in."
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});

test("Should generate set text action object - no input", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("Should generate sort by amount action object", () => {
    expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("Should generate sort by date action object", () => {
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("Should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("Should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});