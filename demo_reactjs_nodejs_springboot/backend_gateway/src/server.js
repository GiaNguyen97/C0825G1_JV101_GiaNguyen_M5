// Import thư viện dotenv để nạp biến môi trường từ file .env ngay dòng đầu tiên
// Điều này cực kỳ quan trọng để đảm bảo process.env.PORT có giá trị trước khi dùng
import "dotenv/config";
import app from "./app.js";

// Lấy PORT từ biến môi trường, nếu không có thì mặc định dùng 3001
const PORT = process.env.PORT || 3001;

// Khởi động server Express lắng nghe các request gửi tới PORT
app.listen(PORT, () => {
    console.log(`Node.js BFF running on port ${PORT}`);
});