'use client'
import React, { useState } from 'react'
import { Eye, EyeOff, User, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import AuthLayout from '../components/AuthLayout';
import { Button } from "@heroui/react";

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        tel: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Register submitted:', formData);
    };
    
    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">สมัครสมาชิก</h2>

            <div className="space-y-4">
                {/* User name */}
                <div className="relative">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="ชื่อผู้้ใช้"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent"
                        required
                    />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        placeholder="อีเมล"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent"
                        required
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Phone Number */}
                <div className="relative">
                    <input
                        type="text"
                        name="tel"
                        placeholder="เบอร์โทรศัพท์"
                        value={formData.tel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent"
                        required
                    />
                    <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Password */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="รหัสผ่าน"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-12 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="ยืนยันรหัสผ่าน"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-12 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors bg-transparent"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-slate-800 text-white py-3 px-6 rounded-full font-medium hover:bg-slate-700 transition-colors mt-8"
                >
                    สมัครสมาชิก
                </button>

                {/* Login Link */}
                <div className="text-center mt-6">
                    <span className="text-sm text-gray-600">มีบัญชีอยู่แล้ว? </span>
                    <Link
                        href="/login"
                        className="text-sm text-black-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                    >
                        เข้าสู่ระบบ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm