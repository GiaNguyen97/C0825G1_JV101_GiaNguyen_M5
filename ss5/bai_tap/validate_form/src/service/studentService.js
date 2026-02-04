
const students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        address: "Hà Nội",
        email: "vana@gmail.com",
        phone: "0123456789",
        gender: 0,
        dob: "2004-01-01"
    },
    {
        id: 2,
        name: "Trần Thị B",
        address: "Đà Nẵng",
        email: "tranb@gmail.com",
        phone: "0987654321",
        gender: 1,
        dob: "2002-05-15"
    },
    {
        id: 3,
        name: "Lê Văn C",
        address: "Hồ Chí Minh",
        email: "vanc@gmail.com",
        phone: "0909123456",
        gender: 0,
        dob: "1999-09-09"
    }
];

export const getAll = () => {
    return [...students]; // Return copy to prevent direct mutation
};

export const getById = (id) => {
    return students.find(student => student.id === parseInt(id));
};

export const save = (student) => {
    student.id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    students.push(student);
};

export const update = (student) => {
    const index = students.findIndex(s => s.id === parseInt(student.id));
    if (index !== -1) {
        students[index] = student;
    }
};

export const deleteById = (id) => {
    const index = students.findIndex(student => student.id === parseInt(id));
    if (index !== -1) {
        students.splice(index, 1);
    }
};
