import React, { FC } from "react";
import Head from "next/head";

const RinTechLanding: FC = () => {
    return (
        <>
            <Head>
                <title>RinTech X - SMS Marketing Solutions</title>
                <meta
                    name="description"
                    content="จุดเดียวอบรมบริการ SMS Marketing จาก RinTech X"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                {/* Decorative Dots */}
                <div className="absolute top-8 left-8 grid grid-cols-3 gap-2">
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>

                <div className="absolute top-8 right-8 grid grid-cols-3 gap-2">
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>

                {/* Top Navigation Dots */}
                <div className="flex justify-center pt-8 space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>

                {/* Header Bars */}
                <div className="flex justify-center mt-8 space-x-4">
                    <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
                    <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
                    <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                    {/* Logo */}
                    <div className="mb-12">
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="text-6xl font-bold text-[#1e3a8a] flex items-center">
                                    <span className="relative">
                                        R
                                        <div className="absolute -top-2 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <div className="absolute top-1 -right-3 w-2 h-6 bg-blue-500 rounded-sm"></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-2">
                            <h1 className="text-3xl font-bold text-[#1e3a8a]">
                                RinTech<span className="text-red-500">X</span>
                            </h1>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-96 h-px bg-gray-400 mb-8"></div>

                    {/* Main Text */}
                    <div className="text-center max-w-2xl">
                        <h2 className="text-xl text-[#1e3a8a] leading-relaxed">
                            จุดเดียวอบรมบริการ{" "}
                            <span className="font-semibold">SMS Marketing</span> จาก{" "}
                            <span className="font-semibold">RinTech X</span>
                        </h2>
                    </div>
                </div>

                {/* Additional decorative elements */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RinTechLanding;
