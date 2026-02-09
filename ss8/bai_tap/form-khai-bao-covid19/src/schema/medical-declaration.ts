import * as Yup from 'yup';

export const personalInfoSchema = Yup.object().shape({
    name: Yup.string().required('Họ tên là bắt buộc'),
    passport: Yup.string().required('Số hộ chiếu / CMND là bắt buộc'),
    yearOfBirth: Yup.number()
        .required('Năm sinh là bắt buộc')
        .min(1900, 'Năm sinh phải lớn hơn 1900')
        .max(new Date().getFullYear(), 'Năm sinh không hợp lệ'),
    gender: Yup.string().required('Giới tính là bắt buộc'),
    nationality: Yup.string().required('Quốc tịch là bắt buộc'),
    company: Yup.string(),
    department: Yup.string(),
    insurance: Yup.boolean(),
    province: Yup.string().required('Tỉnh thành là bắt buộc'),
    district: Yup.string().required('Quận / huyện là bắt buộc'),
    ward: Yup.string().required('Phường / xã là bắt buộc'),
    address: Yup.string().required('Số nhà, phố, tổ dân phố / thôn / đội là bắt buộc'),
    phone: Yup.string()
        .required('Số điện thoại là bắt buộc')
        .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số'),
    email: Yup.string()
        .required('Email là bắt buộc')
        .email('Email không hợp lệ'),
});

export const declarationSchema = Yup.object().shape({
    visitedCountries: Yup.string(),
    symptoms: Yup.array().of(Yup.string()),
    contacts: Yup.array().of(Yup.string()),
});

export const medicalDeclarationSchema = personalInfoSchema.concat(declarationSchema);

export type MedicalDeclarationValues = Yup.InferType<typeof medicalDeclarationSchema>;

export const initialValues: MedicalDeclarationValues = {
    name: '',
    passport: '',
    yearOfBirth: 1990,
    gender: 'male',
    nationality: 'Việt Nam',
    company: '',
    department: '',
    insurance: false,
    province: '',
    district: '',
    ward: '',
    address: '',
    phone: '',
    email: '',
    visitedCountries: '',
    symptoms: [],
    contacts: [],
};
