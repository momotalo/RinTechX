import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import LayoutUser from "@/components/layout/LayoutUser";

import { FaWallet, FaArrowCircleRight, FaClock, FaCheckCircle, FaPaperPlane, FaEye, FaTimesCircle, FaTimes } from "react-icons/fa";

const DashboardPage = () => {
    return (
        <LayoutUser breadcrumb={{ category: "Pages", page: "Dashboard" }}>
            <div className="announce mb-4">
                <p className='p-2 text-[#fff] font-normal bg-linear-to-r from-[#0E345B] to-[#1E6EC1]'>
                    ประกาศ <span className='ml-2'>สวัสดีคะ RinTechX ยินดีให้บริการ 24 ชั่วโมง หากต้องการติดต่อสอบถามการใช้งานเพิ่มเติม สามารถติดต่อได้ที่ LINE ID : @xxxxxx</span></p>
            </div>
            <div className="content grid grid-cols-2 gap-4 w-full">
                <div className="left h-[380px] p-2 rounded-xl bg-[#F7F7F7] shadow-2xl">
                    <div className="step flex justify-end mb-4">
                        <h1 className='font-medium text-[#000]'>STEP1/3</h1>
                    </div>
                    <div className="account flex justify-center items-center gap-4 mb-4">
                        <div className="profile px-4 py-4 rounded-full bg-[#fff]">
                            <Image
                                src="/user-solid.svg"
                                alt="People Logo"
                                width={25}
                                height={25}
                            />
                        </div>
                        <div className="name flex flex-col items-center gap-1 p-2">
                            <h1 className='font-bold text-xl'>NONTHAWAT</h1>
                            <p className='text-[#646262]'>Customer Support</p>
                            <p className='px-2 text-[#FF0000] rounded-xl bg-[#faa2a2]'>ยังไม่ได้ยืนยันตัวตน</p>
                        </div>
                    </div>
                    <button className='w-full mb-4 py-2 text-center text-[#fff] rounded-4xl bg-[#2C5886]'>ยืนยันตัวตน</button>
                    <div className="btn flex justify-evenly w-full">
                        <Link href="" className='flex items-center gap-2 p-6 rounded-2xl bg-[#fff]'>
                            <FaWallet className='' />
                            <p>
                                10 บัตรเครดิต
                            </p>
                        </Link>
                        <Link href="" className='p-6 text-[#fff] rounded-2xl bg-[#2C5886]'>
                            สั่งซื้อเเพ็คเกจ
                        </Link>
                    </div>
                </div>
                <div className="right grid grid-rows-2 gap-6 h-[380px]">
                    <div className="high-light grid place-content-center rounded-xl bg-[#D9D9D9] shadow-2xl">
                        <h1 className='text-6xl font-bold'>High Light</h1>
                    </div>
                    <div className="sender-name p-2 rounded-xl shadow-2xl">
                        <div className="w-full flex justify-between">
                            <h1>ชื่อผู้ส่งของฉัน</h1>
                            <Link href="" className='flex items-center gap-1'>
                                <span className="text-[#2C5886] font-medium">จัดการชื่อผู้ส่ง</span>
                                <FaArrowCircleRight />
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 w-full p-2">
                            <h1
                                className='text-5xl font-bold bg-gradient-to-b from-[#0E345B] to-[#1E6EC1] bg-clip-text text-transparent'>
                                0/0
                            </h1>
                            <h2 className='text-base font-bold'>Sender Name</h2>
                        </div>
                        <div className="status flex justify-around py-1 text-[#fff] font-medium bg-[#5191D2] rounded-2xl">
                            <p>whitelist: 0</p>
                            <p>Non-Whitelist: 0</p>
                            <p>In process: 0</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="status-section mt-6 p-4 bg-white rounded-xl shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">สถานะข้อความ</h2>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">วันนี้</button>
                        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">เมื่อวาน</button>
                        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">7 วันที่ผ่านมา</button>
                        <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300">วันที่</button>
                        <input
                            type="text"
                            className="px-3 py-1 text-sm border border-gray-300 rounded-full w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="เลือกวันที่"
                        />
                    </div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-6 gap-1 bg-gray-100 rounded-lg p-1">
                    {/* กำลังดาวน์โหลด */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaClock className="text-gray-500 text-sm" />
                            <span className="text-xs text-gray-600">กำลังดาวน์โหลด</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>

                    {/* กำลังส่งในระบบ */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaPaperPlane className="text-gray-500 text-sm" />
                            <span className="text-xs text-gray-600">กำลังส่งในระบบ</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>

                    {/* ส่งแล้ว */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaCheckCircle className="text-green-500 text-sm" />
                            <span className="text-xs text-gray-600">ส่งแล้ว</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>

                    {/* สำเร็จ */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaEye className="text-green-500 text-sm" />
                            <span className="text-xs text-gray-600">สำเร็จ</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>

                    {/* ไม่สำเร็จ */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaTimesCircle className="text-red-500 text-sm" />
                            <span className="text-xs text-gray-600">ไม่สำเร็จ</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>

                    {/* ยกเลิก */}
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <FaTimes className="text-red-500 text-sm" />
                            <span className="text-xs text-gray-600">ยกเลิก</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">0</span>
                    </div>
                </div>
            </div>
        </LayoutUser>
    )
}

export default DashboardPage