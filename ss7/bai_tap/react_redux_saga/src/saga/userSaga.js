import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_USERS, DELETE_USER, setUsers, userDeleted } from '../redux/action';
import { userService } from '../services/userService';
import { toast } from 'react-toastify';

function* getUsersSaga() {
    try {
        const users = yield call(userService.getAll);
        yield put(setUsers(users));
    } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Lấy danh sách người dùng thất bại');
    }
}

function* deleteUserSaga(action) {
    try {
        const status = yield call(userService.delete, action.payload);
        if (status === 200 || status === 204) {
            toast.success(`Xóa thành công (Mã: ${status})`);
            yield put(userDeleted(action.payload));
        } else {
            toast.error(`Xóa thất bại (Mã: ${status})`);
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Xóa thất bại');
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_USERS, getUsersSaga);
    yield takeLatest(DELETE_USER, deleteUserSaga);
}
