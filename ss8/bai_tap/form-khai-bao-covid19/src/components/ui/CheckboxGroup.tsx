import React from 'react';
import { Checkbox } from './Checkbox';
import { cn } from '@/src/lib/utils';
import { CHECKBOX_STYLES } from '@/src/styles/form-styles';

interface Option {
    label: string;
    value: string;
}

interface CheckboxGroupProps {
    label?: string;
    name: string;
    options: Option[];
    className?: string;
    columns?: 1 | 2 | 3;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    name,
    options,
    className,
    columns = 1
}) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
    };

    return (
        <div className={className}>
            {label && <h4 className="font-medium text-gray-700 mb-2">{label}</h4>}
            <div className={cn(CHECKBOX_STYLES.groupGrid, gridCols[columns])}>
                {options.map((option) => (
                    <Checkbox
                        key={option.value}
                        label={option.label}
                        name={name}
                        value={option.value}
                    />
                ))}
            </div>
        </div>
    );
};
