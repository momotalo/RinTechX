"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; href: string }[];
}

const Header: FC = () => {

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname(); // เพิ่มบรรทัดนี้

  const navItems: NavItem[] = [
    {
      title: "หน้าหลัก",
      href: "/",
    },
    // {
    //   title: 'บริการของเรา',
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { title: 'พัฒนาระบบ', href: '/services/development' },
    //     { title: 'ปรึกษาเทคโนโลยี', href: '/services/consulting' },
    //     { title: 'ดูแลระบบ', href: '/services/maintenance' }
    //   ]
    // },
    {
      title: "บริการของเรา",
      href: "/services",
    },
    {
      title: "เกี่ยวกับ",
      href: "/about",
    },
    {
      title: "ติดต่อเรา",
      href: "/contact",
    },
  ];

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // ฟังก์ชันเช็คว่าเมนูนั้นๆ active หรือไม่
  const isActiveMenu = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center rounded">
                <Image
                  src="/logo.svg"
                  alt="logo RinTechX"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <div className="text-lg font-bold text-[#0E345B]">
                  RinTech<span className="text-red-500">X</span>
                </div>
                <div className="text-xm text-gray-500">บริการส่งข้อความ</div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.title)}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeDropdown === item.title || isActiveMenu(item.href || "")
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActiveMenu(item.href || "")
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Link
              href="/login"
              className="rounded-4xl bg-[#0E345B] px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
            >
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/register"
              className="rounded-4xl bg-[#D9D9D9] px-4 py-2 text-sm font-medium text-black transition-colors duration-200"
            >
              สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Header;