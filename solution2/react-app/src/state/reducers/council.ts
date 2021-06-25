import { AnyAction } from "redux"
import { Councillor } from "../../models";
import { GetCouncilTypes } from "../actions/council";

interface ReducerState {
    council: Councillor[];
}
const initialState: ReducerState = {
    council: [] 
}

export default (state: ReducerState = initialState, { type, payload }: AnyAction) => {
    switch(type) {

        case GetCouncilTypes.SUCCESS: {
            return {
                ...state,
                council: payload
            }
        }
        default: return state;
    }

}