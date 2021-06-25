import { AppState } from "../store"

export const getAllCouncillors = (state: AppState) => state.councillors.councillors;