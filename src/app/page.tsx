"use client"
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardHeader,
  type CardProps,
} from "@heroui/react";
import { LuMail } from "react-icons/lu";

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Present Web Section */}
      <div className="w-[80%] mx-auto my-10 flex-grow flex justify-center items-center">
        <div className="flex w-full">
          {/* Left Section */}
          <div className="presnet-left w-1/2">
            <div className="present-title flex justify-start">
              <h1 className="font-san text-5xl font-bold text-[#0E345B]">
                บริการระบบส่ง SMS
              </h1>
            </div>
            <div className="present-des">
              <p className="w-md text-[#0E345B] text-base/6 font-sans mt-4">
                ระบบส่ง SMS ของเราให้บริการส่งข้อความสั้น (SMS) ที่มีประสิทธิภาพและเชื่อถือได้สำหรับธุรกิจและองค์กรต่างๆ
                ไม่ว่าจะเป็นการแจ้งเตือน การยืนยัน หรือการสื่อสารกับลูกค้า
              </p>
            </div>
            <div className="present-btn">
              <Link href="/login" className="bg-[#0E345B] text-white font-bold py-2 px-4 rounded-full mt-4 inline-block">
                เริ่มต้นใช้งาน
              </Link>
              <Link
                href="/price"
                className="bg-[#D9D9D9] text-[#0E345B] font-bold py-2 px-4 rounded-full mt-4 ml-4 inline-block"
              >
                ราคา
              </Link>
            </div>
          </div>
          {/* Right Section */}
          <div className="present-right w-1/2 flex flex-col justify-center items-center">
            {/* Title */}
            <div className="title">
              <h2 className="text-[#0E345B] text-2xl text-center font-bold rounded-full mb-4 p-2">สร้างข้อได้เปรียบให้ธุรกิจด้วย SMS Marketing</h2>
            </div>
            {/* Card Section */}
            <div className="w-full content flex justify-center gap-4">
              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">95%</div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">95%</div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">95%</div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                  </p>
                </CardBody>
              </Card>
            </div>
            {/* กสทช. */}
            <div className="flex max-w-xl justify-center gap-3 bg-gray-100 rounded-xl p-2 mt-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/krut.svg"
                  alt="กสทช."
                  width={100}
                  height={50}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="flex items-center text-center text-gray-500 text-sl mb-2">
                  กสทช. ได้รับรองมาตรฐานการให้บริการของเรา
                </p>
                <Link href="/#" className="text-center text-red-500 hover:underline">
                  ดูรายละเอียดเพิ่มเติม
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
