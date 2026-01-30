import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.route.js";

// Khởi tạo ứng dụng Express
const app = express();

// Middleware CORS: Cho phép frontend (khác domain/port) gọi API
app.use(cors());

// Middleware JSON: Tự động parse body của request thành JSON (req.body)
app.use(express.json());

// Định tuyến: Mọi request bắt đầu bằng /users sẽ được xử lý bởi userRoutes
app.use("/users", userRoutes);

export default app;
