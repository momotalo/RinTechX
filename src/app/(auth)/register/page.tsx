import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CircleArrowLeft } from 'lucide-react';
import RegisterForm from '@/components/RegisterForm';
import DeviceIllustration from '@/components/DeviceIllustration';
import AuthLayout from '@/components/AuthLayout';

export const metadata: Metadata = {
    title: 'สมัครสมาชิก',
    description: 'สมัครสมาชิกเพื่อเข้าถึงบริการของ RinTechX',
};

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <AuthLayout direction={-1}>
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side - Register Form */}
                            <div className="lg:w-1/2 p-8 lg:p-12 relative">
                                {/* Back Arrow - Top Left */}
                                <Link
                                    href="/"
                                    className="absolute top-8 left-8 lg:top-12 lg:left-12"
                                >
                                    <CircleArrowLeft className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
                                </Link>

                                {/* Login Form - Centered */}
                                <div className="flex items-center justify-center h-full">
                                    <RegisterForm />
                                </div>
                            </div>
                            {/* Right Side - Image/Illustration */}
                            <div className="lg:w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex items-center justify-center relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400 rounded-lg rotate-12"></div>
                                    <div className="absolute top-32 right-16 w-16 h-16 border-2 border-blue-400 rounded-full"></div>
                                    <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-purple-400 rounded-lg rotate-45"></div>
                                    <div className="absolute bottom-32 right-12 w-8 h-8 bg-cyan-400 rounded-full"></div>
                                </div>

                                {/* Device Illustration Component */}
                                <DeviceIllustration />
                            </div>
                        </div>
                    </AuthLayout>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;