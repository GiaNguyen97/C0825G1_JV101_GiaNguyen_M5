'use client';

import React from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useFormData } from '@/src/context/FormContext';
import { personalInfoSchema, MedicalDeclarationValues } from '@/src/schema/medical-declaration';
import { Input } from '@/src/components/ui/Input';
import { Checkbox } from '@/src/components/ui/Checkbox';
import { RadioGroup } from '@/src/components/ui/RadioGroup';

import { FormSection } from '@/src/components/ui/FormSection';
import { GENDER_OPTIONS } from '@/src/constants/medical-form';
import { LAYOUT_STYLES, BUTTON_STYLES } from '@/src/styles/form-styles';

export default function PersonalInfoPage() {
  const { data, updateData } = useFormData();
  const router = useRouter();

  const handleSubmit = (values: MedicalDeclarationValues) => {
    updateData(values);
    router.push('/declaration');
  };

  return (
    <div className={LAYOUT_STYLES.pageWrapper}>
      <h2 className={LAYOUT_STYLES.sectionTitle}>Thông tin cá nhân</h2>

      <Formik
        initialValues={data}
        validationSchema={personalInfoSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Họ tên" name="name" required />
              <Input label="Số hộ chiếu / CMND" name="passport" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Năm sinh" name="yearOfBirth" type="number" required />
              <RadioGroup
                label="Giới tính"
                name="gender"
                required
                options={GENDER_OPTIONS}
              />
            </div>

            <Input label="Quốc tịch" name="nationality" required />

            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <FormSection title="Thông tin công tác" className="space-y-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <Input label="Công ty làm việc" name="company" />
                  <Input label="Bộ phận làm việc" name="department" />
                </div>
                <Checkbox label="Có thẻ bảo hiểm y tế" name="insurance" />
              </FormSection>
            </div>

            <FormSection title="Địa chỉ liên lạc tại Việt Nam">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input label="Tỉnh / thành" name="province" required />
                <Input label="Quận / huyện" name="district" required />
                <Input label="Phường / xã" name="ward" required />
              </div>

              <Input label="Số nhà, phố, tổ dân phố / thôn / đội" name="address" required />
            </FormSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Điện thoại" name="phone" required />
              <Input label="Email" name="email" type="email" required />
            </div>

            <div className={LAYOUT_STYLES.flexEnd + " pt-6"}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={BUTTON_STYLES.primary}
              >
                Tiếp tục
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
