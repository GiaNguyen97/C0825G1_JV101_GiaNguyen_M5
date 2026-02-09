'use client';

import React from 'react';
import { cn } from '@/src/lib/utils';
import { usePathname } from 'next/navigation';
import { Check } from 'lucide-react';

const steps = [
    { id: 1, name: 'Thông tin cá nhân', path: '/' },
    { id: 2, name: 'Khai báo y tế', path: '/declaration' },
    { id: 3, name: 'Hoàn tất', path: '/success' },
];

export const StepIndicator = () => {
    const pathname = usePathname();

    // Determine current step based on pathname
    let currentStep = 1;
    if (pathname === '/declaration') currentStep = 2;
    if (pathname === '/success') currentStep = 3;

    return (
        <div className="w-full py-6">
            <div className="flex items-center justify-center">
                {steps.map((step, index) => {
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <React.Fragment key={step.id}>
                            {/* Step Circle */}
                            <div className="flex flex-col items-center relative z-10">
                                <div
                                    className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors duration-300",
                                        isCompleted
                                            ? "bg-blue-600 border-blue-600 text-white"
                                            : isCurrent
                                                ? "bg-white border-blue-600 text-blue-600"
                                                : "bg-white border-gray-300 text-gray-500"
                                    )}
                                >
                                    {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                                </div>
                                <span
                                    className={cn(
                                        "absolute top-10 text-xs font-medium w-32 text-center",
                                        isCurrent ? "text-blue-600" : "text-gray-500"
                                    )}
                                >
                                    {step.name}
                                </span>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "h-0.5 w-16 md:w-32 transition-colors duration-300 mx-2",
                                        isCompleted ? "bg-blue-600" : "bg-gray-300"
                                    )}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};
