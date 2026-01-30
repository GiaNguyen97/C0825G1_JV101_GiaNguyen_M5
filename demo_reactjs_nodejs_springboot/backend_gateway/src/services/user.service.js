import axios from "axios";

// Lấy địa chỉ API của Backend Core (Spring Boot) từ biến môi trường
const SPRING_API = process.env.SPRING_API;

// Hàm xử lý lấy danh sách user
export const getUsers = async (req, res) => {
    // Gọi sang Spring Boot để lấy dữ liệu
    const response = await axios.get(SPRING_API);
    // Trả dữ liệu nhận được về cho frontend
    res.json(response.data);
};

// Hàm xử lý thêm user mới
export const createUser = async (req, res) => {
    // Chuyển tiếp request body (dữ liệu nhập từ form) sang Spring Boot
    const response = await axios.post(SPRING_API, req.body);
    res.json(response.data);
};

// Hàm xử lý cập nhật user
export const updateUser = async (req, res) => {
    // Gọi PUT sang Spring Boot với ID và dữ liệu mới
    const response = await axios.put(
        `${SPRING_API}/${req.params.id}`,
        req.body
    );
    res.json(response.data);
};

// Hàm xử lý xóa user
export const deleteUser = async (req, res) => {
    // Gọi DELETE sang Spring Boot với ID cần xóa
    await axios.delete(`${SPRING_API}/${req.params.id}`);
    // Trả về mã 204 (No Content) báo thành công
    res.sendStatus(204);
};