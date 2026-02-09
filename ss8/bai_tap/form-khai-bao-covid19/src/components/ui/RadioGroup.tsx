import React from 'react';
import { useField } from 'formik';
import { cn } from '@/src/lib/utils';
import { RADIO_STYLES } from '@/src/styles/form-styles';

interface RadioOption {
    label: string;
    value: string | number;
}

interface RadioGroupProps {
    label: string;
    name: string;
    options: RadioOption[];
    className?: string;
    required?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ label, options, name, className, required }) => {
    const [field, meta] = useField(name);
    const errorText = meta.touched && meta.error ? meta.error : '';

    return (
        <div className={cn(RADIO_STYLES.wrapper, className)}>
            <label className="text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className={RADIO_STYLES.groupWrapper}>
                {options.map((opt) => (
                    <div key={opt.value} className={RADIO_STYLES.itemWrapper}>
                        <input
                            {...field}
                            type="radio"
                            id={`${name}-${opt.value}`}
                            value={opt.value}
                            checked={field.value === opt.value}
                            className={RADIO_STYLES.input}
                        />
                        <label htmlFor={`${name}-${opt.value}`} className={RADIO_STYLES.label}>
                            {opt.label}
                        </label>
                    </div>
                ))}
            </div>
            {errorText && <p className="text-xs text-red-500">{errorText}</p>}
        </div>
    );
};
