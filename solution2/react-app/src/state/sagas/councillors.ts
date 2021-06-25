import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCouncillorsRequest } from '../../api/api';
import { getCouncillorsSuccess, GetCouncillorsTypes } from '../actions/councillors';

function* councillors(): Generator {
    try {
        const response = yield call(getCouncillorsRequest);
        yield put(getCouncillorsSuccess((response as AxiosResponse).data))
    } catch {}
}

export default function* () {
    yield takeLatest(GetCouncillorsTypes.REQUEST, councillors);
}