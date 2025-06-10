import { Metadata } from "next";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import DeviceIllustration from "@/components/DeviceIllustration";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ",
  description: "เข้าสู่ระบบเพื่อเข้าถึงบริการของ RinTechX",
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image/Illustration */}
            <div className="relative flex items-center justify-center overflow-hidden animate-slide-in-right bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:w-1/2">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 h-20 w-20 rotate-12 rounded-lg border-2 border-cyan-400"></div>
                <div className="absolute top-32 right-16 h-16 w-16 rounded-full border-2 border-blue-400"></div>
                <div className="absolute bottom-20 left-20 h-12 w-12 rotate-45 rounded-lg border-2 border-purple-400"></div>
                <div className="absolute right-12 bottom-32 h-8 w-8 rounded-full bg-cyan-400"></div>
              </div>

              {/* Device Illustration Component */}
              <DeviceIllustration />
            </div>

            {/* Right Side - Login Form */}
            <div className="relative p-8 lg:w-1/2 lg:p-12">
              {/* Back Arrow - Top Left */}
              <Link
                href="/"
                className="absolute top-8 left-8 lg:top-12 lg:left-12"
              >
                <CircleArrowLeft className="h-6 w-6 cursor-pointer text-gray-500 transition-colors hover:text-gray-700" />
              </Link>

              {/* Login Form - Centered */}
              <div className="flex h-full items-center justify-center animate-slide-in-left">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
