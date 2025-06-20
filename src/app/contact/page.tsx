"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosMail } from "react-icons/io"; // <IoIosMail />
import { FaPhone } from "react-icons/fa6"; // <FaPhone />
import { FaLocationDot } from "react-icons/fa6"; // <FaLocationDot />

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "กรุณากรอกชื่อ";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "กรุณากรอกนามสกุล";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    }

    if (!formData.message.trim()) {
      newErrors.message = "กรุณากรอกข้อความ";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Header />

      {/* Contact Section */}
      <div className="contact mx-auto my-10 grid w-[80%] grid-cols-2 rounded-3xl bg-[#FFF] shadow-xl/20">
        {/* detail contact */}
        <div className="flex flex-col p-4 left-content">
          <h1 className="font-blod mb-4 w-full text-5xl text-[##000000]">
            ติดต่อเรา
          </h1>
          <p className="mb-4 text-lg text-[#404040d9]">
            หากคุณมีคำถามเกี่ยวกับบริการ แพ็กเกจ การชำระเงินหรือบริษัทของเรา
            สามารถติดต่อเราได้
          </p>
          <div className="flex items-center gap-6 mb-4 mail">
            <div className="circle grid h-12 w-12 place-content-center rounded-full bg-[#CDEBF7]">
              <IoIosMail className="h-5 w-5 text-[#0e345b]" />
            </div>
            <p>nonthawat.p@kkumail.com</p>
          </div>
          <div className="flex items-center gap-6 mb-4 tel">
            <div className="circle grid h-12 w-12 place-content-center rounded-full bg-[#FFDDF6]">
              <FaPhone className="h-5 w-5 text-[#f480d6]" />
            </div>
            <p>098-765-4321</p>
          </div>
          <div className="flex items-center gap-6 mb-4 location">
            <div className="circle grid h-12 w-12 place-content-center rounded-full bg-[#A4FFFA]">
              <FaLocationDot className="h-5 w-5 text-[#0ec9bf]" />
            </div>
            <p className="w-[80%] text-wrap">
              1188/524 เซเรนิตี้คอนโด ซอยอิงมอ ตำบลศิลา อำเภอเมืองขอนแก่น
              จังหวัดขอนแก่น 40000 ประเทศไทย
            </p>
          </div>
        </div>

        {/* Form Contact */}
        <div className="p-4 right-content">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div>
              <label className="block mb-2 text-2xl font-medium text-gray-700">
                ชื่อ
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2 text-2xl font-medium text-gray-700">
                อีเมล
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block mb-2 text-2xl font-medium text-gray-700">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 text-2xl font-medium text-gray-700">
                ข้อความ
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="พิมพ์ข้อความของคุณ ..."
                rows={4}
                className={`w-full resize-none rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${errors.message ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mb-4 w-auto rounded-full bg-blue-900 px-6 py-2 text-white transition-colors hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:outline-none ${isSubmitting ? "cursor-not-allowed opacity-50" : ""
                }`}
            >
              {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
                ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
                เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง
              </div>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
