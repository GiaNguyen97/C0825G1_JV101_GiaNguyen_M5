import React from 'react';
import { cn } from '@/src/lib/utils';
import { LAYOUT_STYLES } from '@/src/styles/form-styles';

interface FormSectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children, className }) => {
    return (
        <div className={cn("space-y-4", className)}>
            {title && <h3 className={LAYOUT_STYLES.subSectionTitle}>{title}</h3>}
            {children}
        </div>
    );
};
