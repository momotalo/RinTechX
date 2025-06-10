"use client";
import React, { useState } from "react";
import { Eye, EyeOff, User, Mail, Phone } from "lucide-react";
import Link from "next/link";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Register submitted:", formData);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
        สมัครสมาชิก
      </h2>

      <div className="space-y-4">
        {/* User name */}
        <div className="relative">
          <input
            type="text"
            name="firstName"
            placeholder="ชื่อผู้้ใช้"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 transition-colors outline-none focus:border-blue-500"
            required
          />
          <User className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400" />
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="อีเมล"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 transition-colors outline-none focus:border-blue-500"
            required
          />
          <Mail className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400" />
        </div>

        {/* Phone Number */}
        <div className="relative">
          <input
            type="text"
            name="tel"
            placeholder="เบอร์โทรศัพท์"
            value={formData.tel}
            onChange={handleInputChange}
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 transition-colors outline-none focus:border-blue-500"
            required
          />
          <Phone className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400" />
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="รหัสผ่าน"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 pr-12 transition-colors outline-none focus:border-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
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
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 pr-12 transition-colors outline-none focus:border-blue-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-8 w-full rounded-full bg-slate-800 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-700"
        >
          สมัครสมาชิก
        </button>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">มีบัญชีอยู่แล้ว? </span>
          <Link
            href="/login"
            className="text-black-600 text-sm transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
