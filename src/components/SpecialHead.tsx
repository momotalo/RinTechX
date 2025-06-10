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

      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Decorative Dots */}
        <div className="absolute top-8 left-8 grid grid-cols-3 gap-2">
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
        </div>

        <div className="absolute top-8 right-8 grid grid-cols-3 gap-2">
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
        </div>

        {/* Top Navigation Dots */}
        <div className="flex justify-center space-x-3 pt-8">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
        </div>

        {/* Header Bars */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="h-4 w-12 rounded-full bg-gray-400"></div>
          <div className="h-4 w-12 rounded-full bg-gray-400"></div>
          <div className="h-4 w-12 rounded-full bg-gray-400"></div>
        </div>

        {/* Main Content */}
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="flex items-center text-6xl font-bold text-[#1e3a8a]">
                  <span className="relative">
                    R
                    <div className="absolute -top-2 -right-1 h-3 w-3 rounded-full bg-blue-500"></div>
                    <div className="absolute top-1 -right-3 h-6 w-2 rounded-sm bg-blue-500"></div>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-3xl font-bold text-[#1e3a8a]">
                RinTech<span className="text-red-500">X</span>
              </h1>
            </div>
          </div>

          {/* Divider Line */}
          <div className="mb-8 h-px w-96 bg-gray-400"></div>

          {/* Main Text */}
          <div className="max-w-2xl text-center">
            <h2 className="text-xl leading-relaxed text-[#1e3a8a]">
              จุดเดียวอบรมบริการ{" "}
              <span className="font-semibold">SMS Marketing</span> จาก{" "}
              <span className="font-semibold">RinTech X</span>
            </h2>
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
          <div className="flex space-x-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
            <div
              className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RinTechLanding;
