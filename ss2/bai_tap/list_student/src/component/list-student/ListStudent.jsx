import React from "react";
import {tableStyles} from "../../styles/tableStyles.js";
import {formatDateVN} from "../../utils/dateUtils.js";

function ListStudent() {
    const students = [
        {
            id: 1,
            name: "Nguyễn Văn An",
            dob: "2002-05-12",
            address: "Hà Nội",
            point: 8.5,
            phone: "0912345678"
        },
        {
            id: 2,
            name: "Trần Thị Bình",
            dob: "2001-11-23",
            address: "Đà Nẵng",
            point: 7.8,
            phone: "0987654321"
        },
        {
            id: 3,
            name: "Lê Hoàng Cường",
            dob: "2003-02-08",
            address: "TP. Hồ Chí Minh",
            point: 9.1,
            phone: "0903456789"
        },
        {
            id: 4,
            name: "Phạm Ngọc Dung",
            dob: "2002-09-30",
            address: "Cần Thơ",
            point: 6.9,
            phone: "0934567890"
        },
        {
            id: 5,
            name: "Võ Minh Đức",
            dob: "2001-06-15",
            address: "Hải Phòng",
            point: 8.0,
            phone: "0978123456"
        },
        {
            id: 6,
            name: "Bùi Thị Hoa",
            dob: "2003-12-01",
            address: "Nghệ An",
            point: 7.2,
            phone: "0962345678"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <h1 className={tableStyles.title}>Danh sách học sinh</h1>

            <div className={tableStyles.wrapper}>
                <table className={tableStyles.table}>
                    <thead className={tableStyles.thead}>
                    <tr>
                        <th className={tableStyles.th}>STT</th>
                        <th className={tableStyles.th}>Họ và tên</th>
                        <th className={tableStyles.th}>Ngày sinh</th>
                        <th className={tableStyles.th}>Địa chỉ</th>
                        <th className={tableStyles.th}>Điểm</th>
                        <th className={tableStyles.th}>Số điện thoại</th>
                    </tr>
                    </thead>

                    <tbody className="bg-white">
                    {students.map((s, index) => (
                        <tr key={s.id} className={tableStyles.tr}>
                            <td className={`${tableStyles.td} text-center`}>{index + 1}</td>
                            <td className={`${tableStyles.td} text-left`}>
                                <span className="font-medium">{s.name}</span>
                            </td>
                            <td className={`${tableStyles.td} text-center`}>
                                {formatDateVN(s.dob)}
                            </td>
                            <td className={`${tableStyles.td} text-center`}>{s.address}</td>
                            <td className={`${tableStyles.td} text-center`}>
                                    <span
                                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full min-w-[3rem] justify-center ${s.point >= 8 ? 'bg-green-100 text-green-800' : s.point >= 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                        {s.point.toFixed(1)}
                                    </span>
                            </td>
                            <td className={`${tableStyles.td} text-center`}>{s.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListStudent;