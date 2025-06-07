"use client"
import React, { FC, useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { ChevronDown } from 'lucide-react';

interface NavItem {
    title: string;
    href?: string;
    hasDropdown?: boolean;
    dropdownItems?: { title: string; href: string }[];
}

const Header: FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navItems: NavItem[] = [
        {
            title: 'หน้าหลัก',
            href: '/'
        },
        {
            title: 'บริการของเรา',
            hasDropdown: true,
            dropdownItems: [
                { title: 'พัฒนาระบบ', href: '/services/development' },
                { title: 'ปรึกษาเทคโนโลยี', href: '/services/consulting' },
                { title: 'ดูแลระบบ', href: '/services/maintenance' }
            ]
        },
        {
            title: 'เกี่ยวกับ',
            href: '/about'
        },
        {
            title: 'ติดต่อเรา',
            href: '/contact'
        }
    ];

    const handleDropdownToggle = (title: string) => {
        setActiveDropdown(activeDropdown === title ? null : title);
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="rounded flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt="logo RinTechX"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div>
                                <div className="text-[#0E345B] font-bold text-lg">
                                    RinTech<span className="text-red-500">X</span>
                                </div>
                                <div className="text-gray-500 text-xm">
                                    บริการส่งข้อความ
                                </div>
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
                                            className="text-black-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                                        >
                                            <span>{item.title}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`transform transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href || '#'}
                                            className="text-black-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                                        >
                                            {item.title}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && activeDropdown === item.title && (
                                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                                            {item.dropdownItems?.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.title}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
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
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/login"
                            className="bg-[#0E345B] text-white px-4 py-2 rounded-4xl text-sm font-medium transition-colors duration-200"
                        >
                            เข้าสู่ระบบ
                        </Link>
                        <Link
                            href="/register"
                            className="bg-[#D9D9D9] text-black px-4 py-2 rounded-4xl text-sm font-medium transition-colors duration-200"
                        >
                            สมัครสมาชิก
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    {/* <div className="md:hidden">
                        <button
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div> */}
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
    )
}

export default Header