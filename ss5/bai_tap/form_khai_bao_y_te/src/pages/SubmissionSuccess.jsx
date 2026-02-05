
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

const SubmissionSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { values } = location.state || {};

    if (!values) {
        return (
            <div className="text-center">
                <h2>Không tìm thấy dữ liệu!</h2>
                <Button onClick={() => navigate('/')}>Quay lại trang chủ</Button>
            </div>
        );
    }

    // Helper to map values for display
    const renderValue = (val) => {
        if (typeof val === 'boolean') return val ? 'Có' : 'Không';
        if (Array.isArray(val)) return val.length > 0 ? val.join(', ') : 'Không có';
        if (!val) return 'Không có';
        return val;
    };

    const fieldLabels = {
        name: 'Họ tên',
        passport: 'Số hộ chiếu /CMND',
        yearOfBirth: 'Năm sinh',
        gender: 'Giới tính',
        nationality: 'Quốc tịch',
        company: 'Công ty làm việc',
        department: 'Bộ phận làm việc',
        insurance: 'Có thẻ bảo hiểm y tế',
        province: 'Tỉnh thành',
        district: 'Quận /huyện',
        ward: 'Phường /xã',
        address: 'Địa chỉ nơi ở',
        phone: 'Điện thoại',
        email: 'Email',
        visitedCountries: 'Địa điểm đã đi qua (14 ngày)',
        symptoms: 'Dấu hiệu xuất hiện',
        contacts: 'Tiếp xúc'
    };

    return (
        <div>
            <h2 className="text-center text-success mb-4">Khai báo thành công!</h2>
            <Card className="shadow-sm">
                <Card.Header className="bg-success text-white">
                    <h5 className="mb-0">Thông tin chi tiết</h5>
                </Card.Header>
                <ListGroup variant="flush">
                    {Object.entries(values).map(([key, value]) => {
                        // Only display fields we have labels for
                        if (!fieldLabels[key]) return null;

                        // Handle gender label mapping
                        let displayValue = renderValue(value);
                        if (key === 'gender') {
                            displayValue = value === 'male' ? 'Nam' : 'Nữ';
                        }

                        return (
                            <ListGroup.Item key={key} className="py-3">
                                <Row>
                                    <Col sm={4} className="fw-bold text-muted">{fieldLabels[key]}</Col>
                                    <Col sm={8}>{displayValue}</Col>
                                </Row>
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>
                <Card.Body className="text-center bg-light">
                    <Button variant="primary" onClick={() => navigate('/')}>Khai báo lại</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SubmissionSuccess;
