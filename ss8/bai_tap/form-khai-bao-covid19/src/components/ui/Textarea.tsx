import React from 'react';
import { useField } from 'formik';
import { cn } from '@/src/lib/utils';
import { INPUT_STYLES } from '@/src/styles/form-styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, className, ...props }) => {
    const [field, meta] = useField(props.name);
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <div className={INPUT_STYLES.wrapper}>
            <label htmlFor={props.id || props.name} className={INPUT_STYLES.label}>
                {label} {props.required && <span className={INPUT_STYLES.required}>*</span>}
            </label>
            <textarea
                {...field}
                {...props}
                id={props.id || props.name}
                className={cn(
                    INPUT_STYLES.textarea,
                    errorText && INPUT_STYLES.errorInput,
                    className
                )}
            />
            {errorText && <p className={INPUT_STYLES.errorText}>{errorText}</p>}
        </div>
    );
};
