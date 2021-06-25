import { Councillor } from "../../models";

export enum GetCouncillorsTypes {
    REQUEST = 'GET_CONCILLORS_REQUEST',
    SUCCESS = 'GET_CONCILLORS_SUCCESS',
    FAIL = 'GET_CONCILLORS_FAIL'
}

export const getCouncillorsRequest = () => ({
    type: GetCouncillorsTypes.REQUEST
});

export const getCouncillorsSuccess = (data: Councillor[]) => ({
    type: GetCouncillorsTypes.SUCCESS,
    payload: data
});