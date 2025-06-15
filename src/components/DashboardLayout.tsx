/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    IoClose,
    IoTv,
    IoMenu,
} from "react-icons/io5";
import { FaUser, FaBell, FaCog } from "react-icons/fa";

// Types
interface MenuItem {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
    iconColor: string;
    bgColor?: string;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    sidebarColor?: string;
    sidebarType: 'white' | 'dark';
}

interface NavbarProps {
    onSidebarToggle: () => void;
    breadcrumb?: {
        category: string;
        page: string;
    };
    isNavbarFixed?: boolean;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
    breadcrumb?: {
        category: string;
        page: string;
    };
}

interface FixedPluginProps {
    isOpen: boolean;
    onClose: () => void;
    onColorChange: (color: string) => void;
    onTypeChange: (type: 'white' | 'dark') => void;
    onNavbarFixedChange: (fixed: boolean) => void;
    onDarkModeChange: (white: boolean) => void;
    sidebarColor: string;
    sidebarType: 'white' | 'dark';
    isNavbarFixed: boolean;
    isDarkMode: boolean;
}

// Fixed Plugin Component
const FixedPlugin: React.FC<FixedPluginProps> = ({
    isOpen,
    onClose,
    onColorChange,
    onTypeChange,
    onNavbarFixedChange,
    onDarkModeChange,
    sidebarColor,
    sidebarType,
    isNavbarFixed,
    isDarkMode
}) => {
    const colorOptions = [
        { name: 'blue', gradient: 'from-blue-500 to-violet-500', border: 'border-slate-700' },
        { name: 'gray', gradient: 'from-zinc-800 to-zinc-700 dark:from-slate-750 dark:to-gray-850', border: 'border-white' },
        { name: 'cyan', gradient: 'from-blue-700 to-cyan-500', border: 'border-white' },
        { name: 'emerald', gradient: 'from-emerald-500 to-teal-400', border: 'border-white' },
        { name: 'orange', gradient: 'from-orange-500 to-yellow-500', border: 'border-white' },
        { name: 'red', gradient: 'from-red-600 to-orange-600', border: 'border-white' }
    ];

    return (
        <div className="fixed-plugin">
            {/* Plugin Button */}
            {/* <button
                onClick={() => { }}
                className="fixed p-4 text-xl bg-[#00bbff] shadow-lg cursor-pointer bottom-8 right-8 z-50 rounded-full text-slate-700 hover:shadow-xl transition-all duration-200"
                aria-label="Open configurator"
            >
                <FaCog className="pointer-events-none w-5 h-5" />
            </button> */}

            {/* Plugin Card */}
            <div
                className={`z-50 backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-[#fbf5f8] bg-clip-border px-2.5 duration-200 transition-all ${isOpen ? 'right-0' : '-right-90'
                    }`}
                style={{ width: '360px' }}
            >
                {/* Header */}
                <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                    <div className="float-left">
                        <h5 className="mt-4 mb-0 text-[#344767] text-lg font-bold">Configurator</h5>
                        <p className="text-[#7f8aa3] dark:opacity-80 text-sm">See our dashboard options.</p>
                    </div>
                    <div className="float-right mt-6">
                        <button
                            onClick={onClose}
                            className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 text-slate-700"
                            aria-label="Close configurator"
                        >
                            <IoClose className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="h-px mx-0 my-1 text-[#000] opacity-20" />

                {/* Content */}
                <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
                    {/* Sidebar Colors */}
                    <div>
                        <h6 className="mb-2 text-[#344767] font-semibold">Sidebar Colors</h6>
                    </div>
                    <div className="my-2 text-left">
                        {colorOptions.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => onColorChange(color.name)}
                                className={`py-2.5 text-xs rounded-full h-6 mr-2 w-6 ease-in-out bg-gradient-to-tl ${color.gradient} relative inline-block cursor-pointer whitespace-nowrap border border-solid ${color.border} text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${sidebarColor === color.name ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                                    }`}
                                title={`${color.name} theme`}
                            />
                        ))}
                    </div>

                    {/* Sidenav Type */}
                    <div className="mt-6">
                        <h6 className="mb-2 text-[#344767] font-semibold">Sidenav Type</h6>
                        <p className="text-sm leading-normal text-[#7f8aa3] mb-3">
                            Choose between 2 different sidenav types.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onTypeChange('white')}
                            className={`inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center capitalize align-middle transition-all border border-solid rounded-lg cursor-pointer text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 ${sidebarType === 'white'
                                ? 'text-white bg-gradient-to-tl from-blue-500 to-violet-500 border-transparent'
                                : 'text-blue-500 bg-transparent border-blue-500 hover:border-blue-500'
                                }`}
                        >
                            White
                        </button>
                        <button
                            onClick={() => onTypeChange('dark')}
                            className={`inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center capitalize align-middle transition-all border border-solid rounded-lg cursor-pointer text-sm ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 ${sidebarType === 'dark'
                                ? 'text-white bg-gradient-to-tl from-blue-500 to-violet-500 border-transparent'
                                : 'text-blue-500 bg-transparent border-blue-500 hover:border-blue-500'
                                }`}
                        >
                            Dark
                        </button>
                    </div>
                    <p className="block mt-2 text-sm leading-normal text-[#344767] dark:opacity-80 xl:hidden">
                        You can change the sidenav type just on desktop view.
                    </p>

                    {/* Navbar Fixed */}
                    <div className="flex my-6 items-center justify-between">
                        <h6 className="mb-0 text-[#344767] font-semibold">Navbar Fixed</h6>
                        <div className="block pl-0 ml-auto min-h-6">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isNavbarFixed}
                                    onChange={(e) => onNavbarFixedChange(e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="h-px mx-0 my-1 text-[#000] opacity-20" />

                    {/* Dark Mode Toggle */}
                    <div className="flex mt-2 mb-8 items-center justify-between">
                        <h6 className="mb-0 text-[#344767] font-semibold">Light / Dark</h6>
                        <div className="block pl-0 ml-auto min-h-6">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isDarkMode}
                                    onChange={(e) => onDarkModeChange(e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sidebar Component
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, sidebarColor = 'blue', sidebarType = 'white' }) => {
    // Example 1
    // const getSidebarClasses = () => {
    //     const baseClasses = "fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 shadow-xl max-w-64 ease-nav-brand z-40 xl:ml-6 rounded-2xl xl:left-0";

    //     let typeClasses;
    //     if (sidebarType === 'dark') {
    //         typeClasses = "text-white bg-[#111c44]";
    //     } else {
    //         typeClasses = "bg-[#fff]";
    //     }

    //     const visibilityClasses = isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0";
    //     return `${baseClasses} ${typeClasses} ${visibilityClasses}`;
    // };

    const getSidebarClasses = () => {
        // เปลี่ยนจาก xl:ml-6 xl:left-0 xl:translate-x-0 เป็น lg:ml-6 lg:left-0 lg:translate-x-0
        const baseClasses = "fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 shadow-xl max-w-64 ease-nav-brand z-40 lg:ml-6 rounded-2xl lg:left-0";

        let typeClasses;
        if (sidebarType === 'dark') {
            typeClasses = "text-white bg-[#111c44]";
        } else {
            typeClasses = "bg-[#fff]";
        }

        // เปลี่ยนจาก xl:translate-x-0 เป็น lg:translate-x-0
        const visibilityClasses = isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0";
        return `${baseClasses} ${typeClasses} ${visibilityClasses}`;
    };

    const getActiveBgColor = () => {
        switch (sidebarColor) {
            case 'blue': return 'bg-[#eaedfc]';
            case 'gray': return 'bg-[#e6e9eb]';
            case 'cyan': return 'bg-[#b7f0fa]';
            case 'emerald': return 'bg-[#c0f0db]';
            case 'orange': return 'bg-[#fed0c5]';
            case 'red': return 'bg-[#fcc3c3]';
            default: return 'bg-[#eaedfc]';
        }
    };

    const pathname = usePathname();

    const mainMenuItems: MenuItem[] = [
        {
            id: "dashboard",
            label: "Dashboard",
            href: "/dashboard",
            icon: <IoTv className="w-4 h-4" />,
            iconColor: "text-blue-500", // สีคงที่ตามต้นฉบับ
            bgColor: getActiveBgColor() // เฉพาะ background ที่เปลี่ยนตาม theme
        },
        {
            id: "users",
            label: "Users",
            href: "/users",
            icon: <FaUser className="w-4 h-4" />,
            iconColor: "text-orange-500"
        },
    ];

    // Account Menu List
    // const accountMenuItems: MenuItem[] = [
    //     {
    //         id: "profile",
    //         label: "Profile",
    //         href: "/profile",
    //         icon: <IoPerson className="w-4 h-4" />,
    //         iconColor: "text-slate-700"
    //     },
    //     {
    //         id: "sign-in",
    //         label: "Sign In",
    //         href: "/sign-in",
    //         icon: <IoLogIn className="w-4 h-4" />,
    //         iconColor: "text-orange-500"
    //     },
    //     {
    //         id: "sign-up",
    //         label: "Sign Up",
    //         href: "/sign-up",
    //         icon: <IoPersonAdd className="w-4 h-4" />,
    //         iconColor: "text-cyan-500"
    //     }
    // ];

    const isActive = (href: string) => pathname === href;

    const getMenuItemClasses = (item: MenuItem) => {
        const baseClasses = "py-3 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors";
        const activeClasses = isActive(item.href)
            ? `${item.bgColor || "bg-blue-500/13"} dark:text-[#475f7c] dark:opacity-80 text-slate-700`
            : "dark:text-slate-700 dark:opacity-80 hover:bg-gray-100 dark:hover:bg-red-300";

        return `${baseClasses} ${activeClasses}`;
    };

    return (
        <aside
            className={getSidebarClasses()}
            aria-expanded={isOpen}
        >
            {/* Header */}
            <div className="h-19">
                {/* Close Button (Mobile) */}
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer dark:text-white text-slate-400 lg:hidden hover:opacity-100 transition-opacity"
                    aria-label="Close sidebar"
                >
                    <IoClose className="w-5 h-5" />
                </button>

                {/* Logo */}
                <Link
                    href="/dashboard"
                    className="block px-8 py-6 m-0 text-xl whitespace-nowrap dark:text-[#495a76] text-slate-700 hover:opacity-80 transition-opacity"
                >
                    <div className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="RinTechX Logo"
                            width={50}
                            height={50}
                            className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8"
                            priority
                        />
                        <Image
                            src="/logo.svg"
                            alt="RinTechX Logo"
                            width={50}
                            height={50}
                            className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8"
                            priority
                        />
                        <span className="ml-3 font-semibold transition-all duration-200 ease-nav-brand">
                            RinTechX
                        </span>
                    </div>
                </Link>
            </div>

            {/* Divider */}
            <hr className="h-px mx-2 my-1 text-[#000] opacity-20" />

            {/* Navigation Menu */}
            <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    {/* Main Menu Items */}
                    {mainMenuItems.map((item) => (
                        <li key={item.id} className="mt-2 w-full">
                            <Link href={item.href} className={getMenuItemClasses(item)}>
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <div className={`relative top-0 text-sm leading-normal ${item.iconColor}`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}

                    {/* Account Pages Section */}
                    {/* <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
                            Account pages
                        </h6>
                    </li> */}

                    {/* Account Menu Items */}
                    {/* {accountMenuItems.map((item) => (
                        <li key={item.id} className="mt-0.5 w-full">
                            <Link href={item.href} className={getMenuItemClasses(item)}>
                                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                    <div className={`relative top-0 text-sm leading-normal ${item.iconColor}`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))} */}
                </ul>
            </div>

        </aside>
    );
};

// Navbar Component
const Navbar: React.FC<NavbarProps> = ({
    onSidebarToggle,
    breadcrumb = { category: "Pages", page: "Dashboard" },
    isNavbarFixed = false
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
                        {/* Sign In */}
                        <li className="flex items-center">
                            <Link
                                href="/sign-in"
                                className={`block px-0 py-2 text-sm font-semibold ${textColorClass} transition-all ease-nav-brand hover:opacity-80`}
                            >
                                <FaUser className="w-4 h-4 sm:mr-1 inline" />
                                <span className="hidden sm:inline">Sign In</span>
                            </Link>
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

// Main Dashboard Layout Component
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    breadcrumb = { category: "Pages", page: "Dashboard" }
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPluginOpen, setIsPluginOpen] = useState(false);
    const [sidebarColor, setSidebarColor] = useState('blue');
    const [sidebarType, setSidebarType] = useState<'white' | 'dark'>('white');
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const togglePlugin = () => {
        setIsPluginOpen(!isPluginOpen);
    };

    const closePlugin = () => {
        setIsPluginOpen(false);
    };

    const handleColorChange = (color: string) => {
        setSidebarColor(color);
    };

    const handleTypeChange = (type: 'white' | 'dark') => {
        setSidebarType(type);
    };

    const handleNavbarFixedChange = (fixed: boolean) => {
        setIsNavbarFixed(fixed);
    };

    const handleDarkModeChange = (dark: boolean) => {
        setIsDarkMode(dark);
        // Apply dark mode to document
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className="m-0 font-sans text-base antialiased font-normal leading-default">
            {/* Background */}
            <div className={`absolute w-full min-h-[50%] ${isDarkMode ? 'dark bg-[#0E345B]' : 'bg-[#989898]'
                } ${isNavbarFixed ? 'fixed top-0 left-0 right-0 z+50 h-32' : '' // แก้ z+100 เป็น z-50
                }`}></div>

            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
                sidebarColor={sidebarColor}
                sidebarType={sidebarType}
            />

            {/* Main Content */}
            <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out lg:ml-68 rounded-xl">
                {/* Navbar */}
                <Navbar
                    onSidebarToggle={toggleSidebar}
                    breadcrumb={breadcrumb}
                    isNavbarFixed={isNavbarFixed}
                />

                {/* Content */}
                <div className="w-full px-10 py-6 mx-auto">
                    {children}
                </div>
            </main>

            {/* Fixed Plugin */}
            <FixedPlugin
                isOpen={isPluginOpen}
                onClose={closePlugin}
                onColorChange={handleColorChange}
                onTypeChange={handleTypeChange}
                onNavbarFixedChange={handleNavbarFixedChange}
                onDarkModeChange={handleDarkModeChange}
                sidebarColor={sidebarColor}
                sidebarType={sidebarType}
                isNavbarFixed={isNavbarFixed}
                isDarkMode={isDarkMode}
            />

            {/* Plugin Toggle Button */}
            <button
                onClick={togglePlugin}
                className="fixed px-4 py-4 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-50 rounded-full text-slate-700 hover:shadow-xl transition-all duration-200 hover:scale-105"
                aria-label="Open configurator"
            >
                <FaCog className="w-5 h-5" />
            </button>

            {/* Overlay for mobile */}
            {(isSidebarOpen || isPluginOpen) && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => {
                        closeSidebar();
                        closePlugin();
                    }}
                />
            )}
        </div>
    );
};

export { Sidebar, Navbar, DashboardLayout, FixedPlugin };
export default DashboardLayout;