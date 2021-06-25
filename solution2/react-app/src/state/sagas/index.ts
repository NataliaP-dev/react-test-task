import { all } from "@redux-saga/core/effects";
import councillors from './councillors';
import council from './council';
import affrairs from './affrairs';

export default function*(){
    yield all([
        councillors(),
        council(),
        affrairs()
    ]);
}