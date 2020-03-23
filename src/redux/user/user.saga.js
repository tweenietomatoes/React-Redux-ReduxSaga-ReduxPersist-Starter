import { put, takeEvery, call } from 'redux-saga/effects'

import Api from './Api'
//types..

function* doAuthUser(action) {
    try {
        let result = yield call(Api.authUserFetch, action)

        if (result.status >= 200 && result.status < 300) {
            const json = yield result.json()
            yield put({ type : 'AUTH_USER_SUCCESS', payload : { token : json.access_token } }) 
        } else {
            throw result
        }
    }
    catch (err) {
        yield put({type: 'AUTH_USER_FAIL', payload: err.statusText}) 
    } 
}

function* doDeleteMessage() {
    yield put({ type: 'DELETE_MESSAGE' })
}

export function* authUser() {
    yield takeEvery('AUTH_USER_REQUESTED', doAuthUser);
}


export function* deleteMessage() {
    yield takeEvery('DELETE_MESSAGE', doDeleteMessage);
}
