import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_USERS, DELETE_USER, setUsers, userDeleted } from '../redux/action';
import { userService } from '../services/userService';

function* getUsersSaga() {
    try {
        const users = yield call(userService.getAll);
        yield put(setUsers(users));
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function* deleteUserSaga(action) {
    try {
        const status = yield call(userService.delete, action.payload);
        alert(`Mã trạng thái: ${status}`);
        yield put(userDeleted(action.payload));
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('Xóa thất bại');
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USERS, getUsersSaga);
    yield takeLatest(DELETE_USER, deleteUserSaga);
}
