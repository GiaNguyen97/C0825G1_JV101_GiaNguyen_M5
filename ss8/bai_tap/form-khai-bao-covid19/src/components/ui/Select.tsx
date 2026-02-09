import React from 'react';
import { useField } from 'formik';
import { cn } from '@/src/lib/utils';
import { INPUT_STYLES } from '@/src/styles/form-styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: { label: string; value: string | number }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className, ...props }) => {
    const [field, meta] = useField(props.name);
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <div className={INPUT_STYLES.wrapper}>
            <label htmlFor={props.id || props.name} className={INPUT_STYLES.label}>
                {label} {props.required && <span className={INPUT_STYLES.required}>*</span>}
            </label>
            <select
                {...field}
                {...props}
                id={props.id || props.name}
                className={cn(
                    INPUT_STYLES.field,
                    errorText && INPUT_STYLES.errorInput,
                    className
                )}
            >
                <option value="">Chọn {label}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {errorText && <p className={INPUT_STYLES.errorText}>{errorText}</p>}
        </div>
    );
};
