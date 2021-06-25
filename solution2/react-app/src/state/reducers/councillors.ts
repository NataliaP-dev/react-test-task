import { AnyAction } from "redux"
import { Councillor } from "../../models";
import { GetCouncillorsTypes } from "../actions/councillors";

interface ReducerState {
    councillors: Councillor[];
}
const initialState: ReducerState = {
    councillors: [] 
}

export default (state: ReducerState = initialState, { type, payload }: AnyAction) => {
    switch(type) {

        case GetCouncillorsTypes.SUCCESS: {
            return {
                ...state,
                councillors: payload
            }
        }
        default: return state;
    }

}