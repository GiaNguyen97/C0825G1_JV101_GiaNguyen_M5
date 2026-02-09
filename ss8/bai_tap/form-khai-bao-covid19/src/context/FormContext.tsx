'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { initialValues, MedicalDeclarationValues } from '@/src/schema/medical-declaration';

interface FormContextType {
    data: MedicalDeclarationValues;
    setData: React.Dispatch<React.SetStateAction<MedicalDeclarationValues>>;
    updateData: (newData: Partial<MedicalDeclarationValues>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<MedicalDeclarationValues>(initialValues);

    const updateData = (newData: Partial<MedicalDeclarationValues>) => {
        setData((prev) => ({ ...prev, ...newData }));
    };

    return (
        <FormContext.Provider value={{ data, setData, updateData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormData = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormData must be used within a FormProvider');
    }
    return context;
};
