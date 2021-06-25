import { Affrair } from "../../models";

export enum GetAffrairsTypes {
    REQUEST = 'GET_AFFRAIRS_REQUEST',
    SUCCESS = 'GET_AFFRAIRS_SUCCESS',
    FAIL = 'GET_AFFRAIRS_FAIL'
}

export const getAffrairsRequest = () => ({
    type: GetAffrairsTypes.REQUEST
});

export const getAffrairsSuccess = (data: Affrair[]) => ({
    type: GetAffrairsTypes.SUCCESS,
    payload: data
});