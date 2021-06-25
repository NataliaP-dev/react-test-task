import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCouncilsRequest } from '../../api/api';
import { getCouncilSuccess, GetCouncilTypes } from '../actions/council';

function* council(): Generator {
    try {
        const response = yield call(getCouncilsRequest);
        yield put(getCouncilSuccess((response as AxiosResponse).data))
    } catch {}
}

export default function* () {
    yield takeLatest(GetCouncilTypes.REQUEST, council);
}