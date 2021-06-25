import { Council } from "../../models";

export enum GetCouncilTypes {
    REQUEST = 'GET_CONCIL_REQUEST',
    SUCCESS = 'GET_CONCIL_SUCCESS',
    FAIL = 'GET_CONCIL_FAIL'
}

export const getCouncilRequest = () => ({
    type: GetCouncilTypes.REQUEST
});

export const getCouncilSuccess = (data: Council[]) => ({
    type: GetCouncilTypes.SUCCESS,
    payload: data
});