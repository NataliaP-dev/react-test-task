import { all } from "@redux-saga/core/effects";
import councillors from './councillors';

export default function*(){
    yield all([
        councillors()
    ]);
}