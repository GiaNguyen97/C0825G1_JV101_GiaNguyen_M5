'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { BUTTON_STYLES, KEYFRAMES } from '@/src/styles/form-styles';

export default function SuccessPage() {
    const router = useRouter();

    return (
        <div className={`flex flex-col items-center justify-center py-10 text-center space-y-6 ${KEYFRAMES.fadeIn}`}>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 shadow-sm">
                <CheckCircle className="w-12 h-12" />
            </div>

            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Gửi tờ khai thành công!</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    Cảm ơn bạn đã thực hiện khai báo y tế. Thông tin của bạn đã được ghi nhận và sẽ giúp cơ quan y tế kiểm soát dịch bệnh tốt hơn.
                </p>
            </div>

            <div className="pt-8">
                <button
                    onClick={() => router.push('/')}
                    className={BUTTON_STYLES.primary}
                >
                    Khai báo lại
                </button>
            </div>
        </div>
    );
}
