import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone, FaLine } from 'react-icons/fa';

// Function สำหรับข้อมูล 3 packages
const getPackageData = () => {
    return [
        {
            packageName: "SMS",
            packageType: "STARTER PACKAGE",
            price: 500000,
            features: [
                "ราคาต่อเครติด 0.20 บาท",
                "จำนวนข้อความที่ส่งได้ 2,500,000",
                "อายุการใช้งาน 2 ปี",
                "จำนวนชื่อผู้ส่งไม่จำกัด",
                "คืนเครดิตเมื่อส่งไม่สำเร็จ"
            ]
        },
        {
            packageName: "SMS",
            packageType: "CORPORATE PACKAGE",
            price: 1000000,
            features: [
                "ราคาต่อเครติด 0.18 บาท ",
                "จำนวนข้อความที่ส่งได้ 5,555,556",
                "อายุการใช้งาน 2 ปี",
                "จำนวนชื่อผู้ส่งไม่จำกัด",
                "คืนเครดิตเมื่อส่งไม่สำเร็จ"
            ]
        },
        {
            packageName: "SMS",
            packageType: "ENTERPRISE PACKAGE",
            price: 2000000,
            features: [
                "ราคาต่อเครติด 0.16 บาท ",
                "จำนวนข้อความที่ส่งได้ 12,500,000",
                "อายุการใช้งาน 2 ปี",
                "จำนวนชื่อผู้ส่งไม่จำกัด",
                "คืนเครดิตเมื่อส่งไม่สำเร็จ",
            ]
        }
    ];
};

const ServicesPage = () => {
    const packageData = getPackageData();

    const formatPrice = (price: number) => {
        return price.toLocaleString('th-TH');
    };

    return (
        <div>
            <Header />

            <div className="container w-[80%] min-h-screen mx-auto my-8">
                <div className="text-center mb-12">
                    <h1 className="mb-4 text-3xl font-bold text-[#000]">แพ็คเกจส่ง SMS ที่แนะนำ</h1>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        SMS Marketing ก็ดี SMS OTP ก็เวิร์ค ปลอดภัย ส่งไวทั่วประเทศ บริการส่ง SMS สุดคุ้ม ยิ่งใช้เยอะ ยิ่งถูกลง
                        ลดกระหน่ำต่ำกว่า 0.17 บาท/ข้อความ ทุกแพ็กเกจ SMS พร้อม คืนเครดิตเมื่อส่งไม่ถึงผู้รับ
                    </p>
                </div>

                {/* Recommand Packages */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {packageData.map((pkg, index) => (
                        <div key={index} className="h-fit bg-white p-4 border-2 border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                            {/* Header */}
                            <div className="py-4 px-6 text-white text-center bg-blue-900 rounded-2xl">
                                <h2 className="text-xl font-bold">{pkg.packageName}</h2>
                                <p className="text-sm opacity-90 mt-1">{pkg.packageType}</p>
                            </div>

                            {/* Price Section */}
                            <div className="px-6 py-6">
                                <div className="text-center mb-6">
                                    <div className="flex items-center justify-center">
                                        <span className="text-2xl font-bold text-gray-900">฿</span>
                                        <span className="text-4xl font-bold text-gray-900 ml-1">
                                            {formatPrice(pkg.price)}
                                        </span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="feature-list mb-6">
                                    <ul className="flex flex-col items-start">
                                        {pkg.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="w-full">
                                                <div className="flex items-center gap-3 text-gray-700 py-3">
                                                    <FaCheckCircle className="text-[#2196f3] text-sm flex-shrink-0" />
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </div>
                                                {/* เส้นคั่น - ไม่แสดงที่รายการสุดท้าย */}
                                                {featureIndex < pkg.features.length - 1 && (
                                                    <hr className="border-gray-200 border-t-1" />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Button */}
                                <div className="text-center mb-4">
                                    <button
                                        // onClick={() => handlePurchase(pkg.packageType)}
                                        type="button"
                                        className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        ซื้อแพ็คเกจ
                                    </button>
                                </div>

                                {/* Footer Text */}
                                <p className="text-xs text-gray-500 text-center leading-relaxed">
                                    ราคายังไม่รวมภาษีมูลค่าเพิ่ม
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-12">
                    <h1 className="mb-4 text-3xl font-bold text-[#000]">เเพ็คเกจส่ง SMS ทั้งหมด</h1>
                </div>

                {/* All Package */}
                <PricingTable />

                {/* example 1 */}
                <div className="flex justify-center w-full mb-12">
                    <h1 className='w-fit p-4 bg-gray-200 rounded-full'>
                        หากต้องการซื้อ SMS ในราคาพิเศษ เเละเป็นจำนวนมาก ติดต่อ : 09-xxxx-xxxx หรือ LINE ID :@RinTechX
                    </h1>
                </div>
                
                {/* example 2 */}
                <div className="flex justify-center w-full mb-12 px-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg max-w-4xl w-full">
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                                หากต้องการซื้อ SMS ในราคาพิเศษ และเป็นจำนวนมาก
                            </h2>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                {/* Phone Contact */}
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaPhone className="text-green-600 text-sm" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500 font-medium">โทรศัพท์</p>
                                        <p className="text-lg font-bold text-gray-800">09-xxxx-xxxx</p>
                                    </div>
                                </div>

                                {/* LINE Contact */}
                                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <FaLine className="text-green-500 text-lg" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-500 font-medium">LINE ID</p>
                                        <p className="text-lg font-bold text-gray-800">@RinTechX</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mt-4">
                                ทีมงานของเราพร้อมให้คำปรึกษาและเสนอราคาพิเศษสำหรับลูกค้าองค์กร
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ServicesPage