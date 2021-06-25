import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getAffairsRequest } from '../../api/api';
import { getAffrairsSuccess, GetAffrairsTypes } from '../actions/affrair';

function* affrairs(): Generator {
    try {
        const response = yield call(getAffairsRequest);
        console.log(response);
        yield put(getAffrairsSuccess((response as AxiosResponse).data))
    } catch {}
}

export default function* () {
    yield takeLatest(GetAffrairsTypes.REQUEST, affrairs);
}