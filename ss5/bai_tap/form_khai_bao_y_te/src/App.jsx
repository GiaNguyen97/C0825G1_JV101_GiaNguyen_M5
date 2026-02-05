
import React from 'react';
import { Formik } from 'formik';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PersonalInfo from './pages/PersonalInfo';
import MedicalDeclaration from './pages/MedicalDeclaration';
import SubmissionSuccess from './pages/SubmissionSuccess';

const initialValues = {
  name: '',
  passport: '',
  yearOfBirth: '',
  gender: 'male',
  nationality: '',
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
  contacts: []
};

const validate = (values) => {
  const errors = {};

  if (!values.name) errors.name = 'Required';
  if (!values.passport) errors.passport = 'Required';
  if (!values.yearOfBirth) {
    errors.yearOfBirth = 'Required';
  } else if (Number(values.yearOfBirth) <= 1900) {
    errors.yearOfBirth = 'Năm sinh phải > 1900';
  }
  if (!values.nationality) errors.nationality = 'Required';
  if (!values.province) errors.province = 'Required';
  if (!values.district) errors.district = 'Required';
  if (!values.ward) errors.ward = 'Required';
  if (!values.address) errors.address = 'Required';
  if (!values.phone) errors.phone = 'Required';

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

function App() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success('Gửi tờ khai thành công!', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/success', { state: { values } });
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 py-3 w-100">
      <ToastContainer />
      <Container style={{ maxWidth: '720px' }}>
        <Card className="main-card w-100">
          <Card.Body className="p-4 p-md-5">
            <h1 className="text-center mb-4 text-primary">Tờ khai y tế</h1>
            <p className="text-center text-muted mb-5">
              Vui lòng điền thông tin chính xác để góp phần phòng chống dịch COVID-19.
            </p>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <Routes>
                    <Route path="/" element={<PersonalInfo />} />
                    <Route path="/declaration" element={<MedicalDeclaration />} />
                    <Route path="/success" element={<SubmissionSuccess />} />
                  </Routes>
                </form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
