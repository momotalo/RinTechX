"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, User, Lock } from "lucide-react";

import { Button, Input, Checkbox, Form } from "@heroui/react";
import { Icon } from "@iconify/react";

interface LoginFormData {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

const LoginForm: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "กรุณากรอกชื่อผู้ใช้";
    }

    if (!formData.password.trim()) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    } else if (formData.password.length < 8) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // จำลองการ login (แทนที่ด้วย API call จริง)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Login attempt:", formData);
      // Redirect to dashboard or home page
      // router.push('/dashboard');
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ username: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">เข้าสู่ระบบ</h1>
        <p className="text-gray-600">ยินดีต้อนรับกลับมา</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-6"
      >
        {/* Username Field */}
        <div className="relative">
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="ชื่อผู้ใช้"
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 transition-colors outline-none focus:border-blue-500"
            required
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
          <User className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400" />
        </div>

        {/* Password Field */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="รหัสผ่าน"
            className="w-full border-b-2 border-gray-200 bg-transparent px-4 py-3 pr-12 transition-colors outline-none focus:border-blue-500"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-8 w-full rounded-full bg-slate-800 px-6 py-3 font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
              กำลังเข้าสู่ระบบ...
            </div>
          ) : (
            "เข้าสู่ระบบ"
          )}
        </button>

        {/* Footer Links */}
        <div className="mt-6 flex items-center justify-between text-sm">
          <Link
            href="/register"
            className="text-black-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            สมัครสมาชิก
          </Link>
          <Link
            href="/forgot-password"
            className="text-black-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
          >
            ลืมรหัสผ่าน?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
