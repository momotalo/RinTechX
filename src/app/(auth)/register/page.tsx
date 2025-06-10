import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CircleArrowLeft } from "lucide-react";
import RegisterForm from "@/components/RegisterForm";
import DeviceIllustration from "@/components/DeviceIllustration";
import AuthLayout from "@/components/AuthLayout";

export const metadata: Metadata = {
  title: "สมัครสมาชิก",
  description: "สมัครสมาชิกเพื่อเข้าถึงบริการของ RinTechX",
};

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-6xl mx-auto">
        <div className="overflow-hidden bg-white shadow-2xl rounded-3xl">
          <AuthLayout direction={-1}>
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Register Form */}
              <div className="relative p-8 lg:w-1/2 lg:p-12">
                {/* Back Arrow - Top Left */}
                <Link
                  href="/"
                  className="absolute top-8 left-8 lg:top-12 lg:left-12"
                >
                  <CircleArrowLeft className="w-6 h-6 text-gray-500 transition-colors cursor-pointer hover:text-gray-700" />
                </Link>

                {/* Login Form - Centered */}
                <div className="flex items-center justify-center h-full">
                  <RegisterForm />
                </div>
              </div>
              {/* Right Side - Image/Illustration */}
              <div className="relative flex items-center justify-center p-8 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 lg:w-1/2">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute w-20 h-20 border-2 rounded-lg top-10 left-10 rotate-12 border-cyan-400"></div>
                  <div className="absolute w-16 h-16 border-2 border-blue-400 rounded-full top-32 right-16"></div>
                  <div className="absolute w-12 h-12 rotate-45 border-2 border-purple-400 rounded-lg bottom-20 left-20"></div>
                  <div className="absolute w-8 h-8 rounded-full right-12 bottom-32 bg-cyan-400"></div>
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
