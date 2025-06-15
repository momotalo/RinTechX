"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { IoPerson, IoLogOut, IoMenu } from "react-icons/io5";
import { NavbarProps } from "@/components/shared/types";

// User Dropdown Component
const UserDropdown: React.FC<{ username: string; textColorClass: string }> = ({ username, textColorClass }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Username Button */}
            <button
                onClick={toggleDropdown}
                className={`flex items-center px-3 py-2 text-sm font-semibold ${textColorClass} transition-all ease-nav-brand hover:opacity-80 rounded-lg hover:bg-white/10`}
            >
                <div className="flex items-center bg-white/20 rounded-full px-2 py-1 mr-2">
                    <span className="text-xs font-bold text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
                        <FaUser />
                    </span>
                    <span className={`ml-2 text-sm font-medium ${textColorClass}`}>
                        {username}
                    </span>
                    <FaChevronDown className={`ml-2 w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''} ${textColorClass}`} />
                </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {/* Profile Link */}
                    <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <IoPerson className="w-4 h-4 mr-3 text-slate-500" />
                        Profile
                    </Link>

                    {/* Divider */}
                    <hr className="my-1 border-gray-200" />

                    {/* Logout Link */}
                    <Link
                        href="/"
                        className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <IoLogOut className="w-4 h-4 mr-3" />
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
};

// Main Navbar Component
const Navbar: React.FC<NavbarProps> = ({
    onSidebarToggle,
    breadcrumb = { category: "Pages", page: "Dashboard" },
    isNavbarFixed = false,
    username = "NONTHAWAT"
}) => {
    const textColorClass = isNavbarFixed ? 'text-slate-700' : 'text-white';
    const textOpacityClass = isNavbarFixed ? 'opacity-60' : 'opacity-50';

    return (
        <nav className={`relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start ${isNavbarFixed ? 'mt-2 sticky top-0 z-30 bg-white/80 backdrop-blur-md' : ''
            }`}>
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                {/* Breadcrumb */}
                <nav>
                    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="text-sm leading-normal">
                            <Link href="#" className={`${textColorClass} ${textOpacityClass}`}>
                                {breadcrumb.category}
                            </Link>
                        </li>
                        <li className={`text-sm pl-2 capitalize leading-normal ${textColorClass} before:float-left before:pr-2 before:${textColorClass} before:content-['/']`} aria-current="page">
                            {breadcrumb.page}
                        </li>
                    </ol>
                    <h6 className={`mb-0 font-bold ${textColorClass} capitalize`}>{breadcrumb.page}</h6>
                </nav>

                {/* Right Section */}
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    {/* Search - ซ่อนไว้ */}
                    <div className="flex items-center md:ml-auto md:pr-4">
                        {/* Search component commented out */}
                    </div>

                    {/* Navigation Items */}
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        {/* Username Dropdown */}
                        <li className="flex items-center">
                            <UserDropdown username={username} textColorClass={textColorClass} />
                        </li>

                        {/* Mobile Menu Toggle - เปลี่ยนจาก xl:hidden เป็น lg:hidden */}
                        <li className="flex items-center pl-4 lg:hidden">
                            <button
                                onClick={onSidebarToggle}
                                className={`block p-0 text-sm ${textColorClass} transition-all ease-nav-brand hover:opacity-80`}
                                aria-label="Toggle sidebar"
                            >
                                <IoMenu className="w-5 h-5" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;