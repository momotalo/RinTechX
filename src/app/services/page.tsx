import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
import { FaCheckCircle } from "react-icons/fa";
import { FaPhone, FaLine } from "react-icons/fa";

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
        "คืนเครดิตเมื่อส่งไม่สำเร็จ",
      ],
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
        "คืนเครดิตเมื่อส่งไม่สำเร็จ",
      ],
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
      ],
    },
  ];
};

const ServicesPage = () => {
  const packageData = getPackageData();

  const formatPrice = (price: number) => {
    return price.toLocaleString("th-TH");
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto my-8 min-h-screen w-[80%]">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#000]">
            แพ็คเกจส่ง SMS ที่แนะนำ
          </h1>
          <p className="mx-auto max-w-4xl leading-relaxed text-gray-600">
            SMS Marketing ก็ดี SMS OTP ก็เวิร์ค ปลอดภัย ส่งไวทั่วประเทศ
            บริการส่ง SMS สุดคุ้ม ยิ่งใช้เยอะ ยิ่งถูกลง ลดกระหน่ำต่ำกว่า 0.17
            บาท/ข้อความ ทุกแพ็กเกจ SMS พร้อม คืนเครดิตเมื่อส่งไม่ถึงผู้รับ
          </p>
        </div>

        {/* Recommand Packages */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packageData.map((pkg, index) => (
            <div
              key={index}
              className="h-fit overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-lg"
            >
              {/* Header */}
              <div className="rounded-2xl bg-blue-900 px-6 py-4 text-center text-white">
                <h2 className="text-xl font-bold">{pkg.packageName}</h2>
                <p className="mt-1 text-sm opacity-90">{pkg.packageType}</p>
              </div>

              {/* Price Section */}
              <div className="px-6 py-6">
                <div className="mb-6 text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">฿</span>
                    <span className="ml-1 text-4xl font-bold text-gray-900">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="feature-list mb-6">
                  <ul className="flex flex-col items-start">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="w-full">
                        <div className="flex items-center gap-3 py-3 text-gray-700">
                          <FaCheckCircle className="flex-shrink-0 text-sm text-[#2196f3]" />
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                        {/* เส้นคั่น - ไม่แสดงที่รายการสุดท้าย */}
                        {featureIndex < pkg.features.length - 1 && (
                          <hr className="border-t-1 border-gray-200" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <div className="mb-4 text-center">
                  <button
                    // onClick={() => handlePurchase(pkg.packageType)}
                    type="button"
                    className="rounded-lg bg-blue-900 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  >
                    ซื้อแพ็คเกจ
                  </button>
                </div>

                {/* Footer Text */}
                <p className="text-center text-xs leading-relaxed text-gray-500">
                  ราคายังไม่รวมภาษีมูลค่าเพิ่ม
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#000]">
            เเพ็คเกจส่ง SMS ทั้งหมด
          </h1>
        </div>

        {/* All Package */}
        <PricingTable />

        {/* example 1 */}
        <div className="mb-12 flex w-full justify-center">
          <h1 className="w-fit rounded-full bg-gray-200 p-4">
            หากต้องการซื้อ SMS ในราคาพิเศษ เเละเป็นจำนวนมาก ติดต่อ :
            09-xxxx-xxxx หรือ LINE ID :@RinTechX
          </h1>
        </div>

        {/* example 2 */}
        <div className="mb-12 flex w-full justify-center px-4">
          <div className="w-full max-w-4xl rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-lg">
            <div className="text-center">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                หากต้องการซื้อ SMS ในราคาพิเศษ และเป็นจำนวนมาก
              </h2>

              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                {/* Phone Contact */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-3 shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <FaPhone className="text-sm text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-500">
                      โทรศัพท์
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      09-xxxx-xxxx
                    </p>
                  </div>
                </div>

                {/* LINE Contact */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-3 shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <FaLine className="text-lg text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-500">LINE ID</p>
                    <p className="text-lg font-bold text-gray-800">@RinTechX</p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                ทีมงานของเราพร้อมให้คำปรึกษาและเสนอราคาพิเศษสำหรับลูกค้าองค์กร
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
