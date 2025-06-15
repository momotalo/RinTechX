import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

const Order = () => {
    return (
        <DashboardLayout>
            <div className="rounded-lg text-center font-bold text-3xl p-4 text-white bg-[#0E345B]">เเพ็คเกจ</div>
            <div className="flex items-center gap-4 mt-6 ">
                <div className="flex-1 h-px bg-black"></div>
                <span>เลือกสรรแพ็กเกจที่เหมาะสมสำหรับธุรกิจของคุณ และเริ่มส่งข้อความกับ RinTechX SMS เพื่อช่วยให้ธุรกิจของคุณเติบโต</span>
                <div className="flex-1 h-px bg-black"></div>
            </div>
            <div className="mt-8 mx-auto p-4">
                <div className="cards grid grid-cols-3 gap-16 mt-5 ">
                    {/* Card 1 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold mt-3 text-blue-600">A</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">9,900</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">28,285</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">6 เดือน</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">1</p>
                            <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.35</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold  mt-3 text-blue-600">B</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">10,001</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">33,336</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">6 เดือน</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">1</p>
                            <p className="mb-3 not-user-valid:text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.30</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold  mt-3 text-blue-600">C</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">100,000</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">400,000</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">6 เดือน</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">10</p>
                            <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.25</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold  mt-3 text-blue-600">D</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">150,000</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">625,000</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">6 เดือน</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">15</p>
                            <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.24</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold  mt-3 text-blue-600">Startup</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">200,000</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">869,565</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">1 ปี</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">20</p>
                            <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.23</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="card  border-gray-300 border-2 rounded-4xl">
                        <div className="Header h-[95px] text-center ">
                            <h1 className="text-3xl font-bold  mt-3 text-blue-600">Corporate</h1>
                            <p className="text-gray-500 font-bold"> PACKAGE </p>
                            <hr className="w-[80%] mt-2 mx-auto" />
                            <div className="flex justify-end w-[80%] mx-auto ">
                                <p className="w-2/6 bg-red-500 rounded-b-lg text-white">ยอดนิยม</p>
                            </div>
                        </div>
                        <div className="content px-8 py-2">
                            <p className="font-bold text-2xl text-blue-600">500,000</p>
                            <p className="mb-3 text-gray-600 ">บาท</p>
                            <p className="font-bold text-2xl text-blue-600">2,380,952</p>
                            <p className="mb-3 text-gray-600 ">เครดิต</p>
                            <p className="font-bold text-2xl text-blue-600">2 ปี</p>
                            <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                            <p className="font-bold text-2xl text-blue-600">50</p>
                            <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                        </div>
                        <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                            <div className="px-3">
                                <p className="text-3xl text-white font-bold">0.21</p>
                                <p className="mt-1 text-white">บาท/SMS</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 7 */}
                </div>
                <div className="card  border-gray-300 border-2 rounded-4xl w-[30%] mt-16 mx-auto">
                    <div className="Header h-[95px] text-center ">
                        <h1 className="text-3xl font-bold  mt-3 text-blue-600">Enterprise</h1>
                        <p className="text-gray-500 font-bold"> PACKAGE </p>
                        <hr className="w-[80%] mt-2 mx-auto" />
                        <div className="flex justify-end w-[80%] mx-auto ">
                            <p className="w-2/6 bg-red-500 rounded-b-lg text-white">ยอดนิยม</p>
                        </div>
                    </div>
                    <div className="content px-8 py-2">
                        <p className="font-bold text-2xl text-blue-600">1,000,000</p>
                        <p className="mb-3 text-gray-600 ">บาท</p>
                        <p className="font-bold text-2xl text-blue-600">5,263,157</p>
                        <p className="mb-3 text-gray-600 ">เครดิต</p>
                        <p className="font-bold text-2xl text-blue-600">2 ปี</p>
                        <p className="mb-3 text-gray-600 ">อายุการใช้งาน</p>
                        <p className="font-bold text-2xl text-blue-600">100</p>
                        <p className="mb-3 text-gray-600 ">จำนวน Sender</p>
                    </div>
                    <div className="foodercard flex justify-between bg-gradient-to-r from-blue-800 to-blue-400 rounded-b-4xl border-gray-300 p-4 ">
                        <div className="px-3">
                            <p className="text-3xl text-white font-bold">0.19</p>
                            <p className="mt-1 text-white">บาท/SMS</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="h-fit  px-8 py-2 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-500  text-white transition-colors">สั่งซื้อ</button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout >
    );
};

export default Order;
