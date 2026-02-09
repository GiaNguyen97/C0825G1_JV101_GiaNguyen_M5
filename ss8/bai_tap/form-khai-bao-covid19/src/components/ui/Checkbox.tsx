import React from 'react';
import { useField } from 'formik';
import { cn } from '@/src/lib/utils';
import { CHECKBOX_STYLES } from '@/src/styles/form-styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <div className={CHECKBOX_STYLES.wrapper}>
            <div className={CHECKBOX_STYLES.itemWrapper}>
                <input
                    {...field}
                    {...props}
                    type="checkbox"
                    id={props.id || props.name + (props.value ? '-' + props.value : '')}
                    className={cn(
                        CHECKBOX_STYLES.input,
                        className
                    )}
                />
                <label
                    htmlFor={props.id || props.name + (props.value ? '-' + props.value : '')}
                    className={CHECKBOX_STYLES.label}
                >
                    {label}
                </label>
            </div>
            {errorText && <p className="text-xs text-red-500">{errorText}</p>}
        </div>
    );
};


