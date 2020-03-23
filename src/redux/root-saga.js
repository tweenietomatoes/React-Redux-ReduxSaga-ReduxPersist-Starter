import { all, call } from 'redux-saga/effects'

import { authUser } from './user/user.saga'

export default function* rootSaga() {
    yield all([
        call(authUser)
    ])
}