import express from "express";
// Import các hàm xử lý logic từ service
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../services/user.service.js";

const router = express.Router();

// Định nghĩa các route con của /users
router.get("/", getUsers);       // GET /users -> Lấy danh sách
router.post("/", createUser);    // POST /users -> Thêm mới
router.put("/:id", updateUser);  // PUT /users/:id -> Cập nhật
router.delete("/:id", deleteUser); // DELETE /users/:id -> Xóa

export default router;