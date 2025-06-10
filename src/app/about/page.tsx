"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, RotateCcw } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // จัดการการค้นหา
        console.log("ค้นหา:", searchTerm);
    };

    const handleReset = () => {
        setSearchTerm("");
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Header Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                {/* Background Curved Bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <svg
                        className="relative block h-24 w-full md:h-32 lg:h-40"
                        viewBox="0 0 1200 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,197.3C560,213,640,235,720,229.3C800,224,880,192,960,170.7C1040,149,1120,139,1160,133.3L1200,128L1200,320L1160,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 text-center md:py-24 lg:py-28">
                    {/* Main Title */}
                    <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                        บทความที่เกี่ยวข้อง
                    </h1>

                    {/* Search Section */}
                    <div className="mx-auto mb-8 max-w-2xl">
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            {/* Search Input */}
                            <div className="relative max-w-md flex-1">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="ค้นหาบทความ..."
                                    className="w-full rounded-full border border-gray-200 px-6 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-blue-600 p-2 text-white transition-colors duration-200 hover:bg-blue-700"
                                >
                                    <Search size={20} />
                                </button>
                            </div>

                            {/* Reset Button */}
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                            >
                                <RotateCcw size={18} />
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Advanced Search Button */}
                    <button className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
                        หมวดหมู่ทั้งหมด
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 py-12">
                {/* Decorative Elements */}
                <div className="relative">
                    {/* Article Card */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Content Side */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-6 leading-tight">
                                        ระบบแจ้งเตือนผ่าน SMS<br />
                                        ด้วยวัยรุษรักว่าที่แม่บ้านและรวดเร็ว
                                    </h2>

                                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>

                                    <div className="flex items-center">
                                        <span className="text-gray-500 text-sm">
                                            รายละเอียดเพิ่มเติม
                                        </span>
                                    </div>
                                </div>

                                {/* Image Side */}
                                <div className="bg-gray-200 h-64 md:h-auto flex items-center justify-center">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                        <span className="text-4xl md:text-6xl font-bold text-gray-600">IMG</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="mt-16 max-w-6xl mx-auto">
                        {/* First Row */}
                        <div className="grid md:grid-cols-3 gap-16 mb-12">
                            {/* Article 1 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>

                            {/* Article 2 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>

                            {/* Article 3 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>

                            {/* Article 4 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>

                            {/* Article 5 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>

                            {/* Article 6 */}
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">
                                    <span className="text-xl font-bold text-gray-600">IMG</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-black mb-2 leading-tight">
                                        เจาะลึก Martech Tools เพียบเมนจิ์กชิพ<br />
                                        การตลาดยิ่งสร้างองคุ์ด้วย SMS
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                        ในยุคสมัยใหม่ของเทคโนโลยีการตลาด<br />
                                        ในประเทศไทย ที่ Ma
                                    </p>
                                    <Link href="#" className="text-xs text-gray-500 underline">
                                        รายละเอียดเพิ่มเติม
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center space-x-2 mt-8">
                            <span className="text-gray-600 text-sm mr-4">ก่อนหน้า</span>

                            <button className="w-8 h-8 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors">
                                1
                            </button>
                            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-300 transition-colors">
                                2
                            </button>
                            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-300 transition-colors">
                                3
                            </button>
                            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-300 transition-colors">
                                4
                            </button>

                            <span className="text-blue-600 text-sm ml-4 hover:underline cursor-pointer">ถัดไป</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
