import axios from "axios";

// Định nghĩa URL của API Gateway (không gọi trực tiếp Backend Core)
const API = "http://localhost:3001/users";

// Các hàm gọi API sử dụng Axios
export const getUsers = () => axios.get(API); // Lấy danh sách user
export const addUser = (data) => axios.post(API, data); // Thêm user mới
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data); // Cập nhật user theo ID
export const deleteUser = (id) => axios.delete(`${API}/${id}`); // Xóa user theo ID