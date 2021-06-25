import { AnyAction } from "redux"
import { Affrair } from "../../models";
import { GetAffrairsTypes } from "../actions/affrair";

interface ReducerState {
    affrairs: Affrair[];
}
const initialState: ReducerState = {
    affrairs: [] 
}

export default (state: ReducerState = initialState, { type, payload }: AnyAction) => {
    switch(type) {

        case GetAffrairsTypes.SUCCESS: {
            return {
                ...state,
                affrairs: payload
            }
        }
        default: return state;
    }

}