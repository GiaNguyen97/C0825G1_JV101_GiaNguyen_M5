import React from 'react';
import { useField } from 'formik';
import { cn } from '@/src/lib/utils'; // Adjust import based on tsconfig
import { INPUT_STYLES } from '@/src/styles/form-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
    const [field, meta] = useField(props.name);
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <div className={INPUT_STYLES.wrapper}>
            <label htmlFor={props.id || props.name} className={INPUT_STYLES.label}>
                {label} {props.required && <span className={INPUT_STYLES.required}>*</span>}
            </label>
            <input
                {...field}
                {...props}
                id={props.id || props.name}
                className={cn(
                    INPUT_STYLES.field,
                    errorText && INPUT_STYLES.errorInput,
                    className
                )}
            />
            {errorText && <p className={INPUT_STYLES.errorText}>{errorText}</p>}
        </div>
    );
};
