"use client"
import React, { useState } from 'react';
import LayoutUser from "@/components/layout/LayoutUser"
import Link from "next/link";
import { FaAngleLeft, FaUser, FaWallet, FaClock, FaEdit } from "react-icons/fa";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <LayoutUser breadcrumb={{ category: "Pages", page: "Profile" }}>
            <div className='w-full flex gap-4'>
                <div className="sidebar grid grid-rows-2 w-1/3 h-[600px] p-4 bg-[#F0F0F0]">
                    <div>
                        <Link href="" className='w-full'>
                            <div className='flex justify-center items-center w-5 h-5 rounded-full bg-[#fff]'>
                                <FaAngleLeft />
                            </div>
                        </Link>
                        <div className="profile flex flex-col justify-center items-center gap-4 mt-4 py-4">
                            <div className="grid place-content-center w-14 h-14 rounded-full bg-[#fff] border">
                                <FaUser className='w-8 h-8' />
                            </div>
                            <h1>NONTHAWAT</h1>
                            <p>Customer Support</p>
                        </div>
                        <div className='credit flex justify-center mt-4'>
                            <h1 className='flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#fff]'>
                                <FaWallet className='w-6 h-6' />
                                <span>10 เครดิต</span>
                            </h1>
                        </div>
                    </div>

                    <div className="btn flex flex-col justify-center items-center gap-4 p-4">
                        <Link href="" className='flex justify-center items-center gap-4 w-full py-4 rounded-xl bg-[#fff]'>
                            <FaUser className='w-4 h-4' />
                            <span className='text-[14px] font-semibold'>
                                ข้อมูลผู้ใช้
                            </span>
                        </Link>
                        <Link href="" className='flex justify-center items-center gap-4 w-full py-4 rounded-xl bg-[#fff]'>
                            <FaClock className='w-4 h-4' />
                            <span className='text-[14px] font-semibold'>
                                ประวัติผู้ใช้งาน
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="content w-2/3 p-8 bg-white shadow-2xl">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">ข้อมูลผู้ใช้งาน</h2>
                        <p className="text-gray-600">ปรับแต่งการตั้งค่า เนื้อหาอีเมล์ และรูปลักษณ์ของเว็บไซต์</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`flex-1 px-6 py-3 font-medium rounded-md transition-all ${activeTab === 'profile'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`flex-1 px-6 py-3 font-medium rounded-md transition-all ${activeTab === 'account'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            Account
                        </button>
                    </div>

                    {/* Profile Tab Content */}
                    {activeTab === 'profile' && (
                        <div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">Profile</h3>
                                <p className="text-gray-600 text-sm">ปรับแต่งการตั้งค่า เนื้อหาอีเมล์ และรูปลักษณ์ของเว็บไซต์</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Profile Card */}
                                <div className="bg-gray-50 rounded-xl p-6 text-center">
                                    <div className="mb-4">
                                        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-4xl">😊</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">NONTHAWAT</h4>
                                    <p className="text-gray-600 text-sm">nonthawat.p@gmail.com</p>
                                </div>

                                {/* Info Card */}
                                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-600">เบอร์</p>
                                            <p className="font-medium">09X-XXX-XXXX</p>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <FaEdit />
                                        </button>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">ประเภทสมาชิก</p>
                                        <p className="font-medium">ผู้ใช้งาน</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-600">หมดอายุ</p>
                                        <p className="font-medium">5/23/2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Account Tab Content */}
                    {activeTab === 'account' && (
                        <div>
                            {/* Email Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">รหัสผ่านเดิม</h3>
                                <p className="text-gray-600 text-sm mb-4">กรอบรหัสผ่านปัจจุบันของคุณ</p>
                                <input
                                    type="password"
                                    placeholder="รหัสผ่านเดิม"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* New Password Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">รหัสผ่านใหม่</h3>
                                <p className="text-gray-600 text-sm mb-4">กรอบรหัสผ่านใหม่ที่คุณต้องการใช้</p>
                                <input
                                    type="password"
                                    placeholder="รหัสผ่านใหม่"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Confirm Password Section */}
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-4">ยืนยันรหัสผ่านใหม่</h3>
                                <p className="text-gray-600 text-sm mb-4">กรอบรหัสผ่านใหม่อีกครั้งเพื่อยืนยัน</p>
                                <input
                                    type="password"
                                    placeholder="ยืนยันรหัสผ่านใหม่"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button className="px-8 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#15304f] transition-colors">
                                    อัปเดตรหัสผ่าน
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </LayoutUser>
    )
}

export default ProfilePage