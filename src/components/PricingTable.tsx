import React from "react";
import Link from "next/link";

interface PackageData {
  name: string;
  price: number;
  pricePerMessage: number;
  messageCount: number;
  validity: string;
  senderNames: string;
}

// ข้อมูลแพ็คเกจ SMS
const getPackageData = (): PackageData[] => {
  return [
    {
      name: "A Package",
      price: 990,
      pricePerMessage: 0.4,
      messageCount: 2500,
      validity: "1 เดือน",
      senderNames: "1",
    },
    {
      name: "B Package",
      price: 30000,
      pricePerMessage: 0.3,
      messageCount: 100000,
      validity: "6 เดือน",
      senderNames: "1",
    },
    {
      name: "C Package",
      price: 50000,
      pricePerMessage: 0.28,
      messageCount: 178571,
      validity: "6 เดือน",
      senderNames: "3",
    },
    {
      name: "D Package",
      price: 100000,
      pricePerMessage: 0.26,
      messageCount: 384615,
      validity: "6 เดือน",
      senderNames: "10",
    },
    {
      name: "E Package",
      price: 140000,
      pricePerMessage: 0.24,
      messageCount: 583333,
      validity: "6 เดือน",
      senderNames: "ไม่จำกัด",
    },
    {
      name: "F Package",
      price: 260000,
      pricePerMessage: 0.22,
      messageCount: 1181818,
      validity: "1 ปี",
      senderNames: "ไม่จำกัด",
    },
    {
      name: "Start Up Package",
      price: 500000,
      pricePerMessage: 0.2,
      messageCount: 2500000,
      validity: "2 ปี",
      senderNames: "ไม่จำกัด",
    },
    {
      name: "Corporate Package",
      price: 1000000,
      pricePerMessage: 0.18,
      messageCount: 5555555,
      validity: "2 ปี",
      senderNames: "ไม่จำกัด",
    },
    {
      name: "Enterprise Package",
      price: 2000000,
      pricePerMessage: 0.16,
      messageCount: 12500000,
      validity: "2 ปี",
      senderNames: "ไม่จำกัด",
    },
  ];
};

const PricingTable: React.FC = () => {
  const packageData = getPackageData();

  const formatNumber = (num: number) => {
    return num.toLocaleString("th-TH");
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("th-TH");
  };

  return (
    <div className="mx-auto mb-12 w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="bg-white px-4 py-4"></th>
            <th className="rounded-tl-lg border-r border-blue-800 px-6 py-4 text-center font-medium">
              ราคา
            </th>
            <th className="border-r border-blue-800 px-4 py-4 text-center font-medium">
              ราคา / ข้อความ
            </th>
            <th className="border-r border-blue-800 px-4 py-4 text-center font-medium">
              จำนวนข้อความ
            </th>
            <th className="border-r border-blue-800 px-4 py-4 text-center font-medium">
              อายุการใช้งาน
            </th>
            <th className="border-r border-blue-800 px-4 py-4 text-center font-medium">
              จำนวนชื่อผู้ส่ง
            </th>
            <th className="px-4 py-4"></th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {packageData.map((pkg, index) => (
            <tr
              key={index}
              className="border-b border-gray-300 transition-colors duration-200 hover:bg-gray-50"
            >
              {/* Package Name */}
              <td className="border-r border-gray-200 bg-white px-4 py-4 font-medium text-gray-900">
                {pkg.name}
              </td>

              {/* Price */}
              <td className="bg-[#DCE6F1] px-4 py-4 text-center font-medium text-gray-900">
                {formatPrice(pkg.price)}
              </td>

              {/* Price per Message */}
              <td className="px-4 py-4 text-center text-gray-900">
                {pkg.pricePerMessage.toFixed(2)}
              </td>

              {/* Message Count */}
              <td className="px-4 py-4 text-center text-gray-900">
                {formatNumber(pkg.messageCount)}
              </td>

              {/* Validity */}
              <td className="px-4 py-4 text-center text-gray-900">
                {pkg.validity}
              </td>

              {/* Sender Name */}
              <td className="px-4 py-4 text-center text-gray-900">
                {pkg.senderNames}
              </td>

              {/* Action Button */}
              <td className="px-4 py-4 text-center">
                <Link
                  href="/#"
                  className="text-sm font-medium text-blue-600 underline transition-colors duration-200 hover:text-blue-800"
                >
                  สั่งซื้อ
                </Link>
              </td>
            </tr>
          ))}
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr>
            <td colSpan={7} className="bg-blue-900 py-3 text-center text-white">
              <p className="text-sm font-medium">
                คิดค่าบริการเฉพาะข้อความที่ ส่งถึงปลายทาง เท่านั้น
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PricingTable;
