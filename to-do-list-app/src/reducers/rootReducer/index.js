import { combineReducers } from "redux";
import { formValuesReducer } from "../formValuesReducer";

export const rootReducer = combineReducers({
	formValues: formValuesReducer,
});
