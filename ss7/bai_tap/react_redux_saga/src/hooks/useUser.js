import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../redux/action';

export const useUser = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const getAllUsers = () => {
        dispatch(getUsers());
    };

    const removeUser = (id) => {
        dispatch(deleteUser(id));
    };

    return {
        users,
        getAllUsers,
        removeUser
    };
};
