/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    IoClose,
    IoChevronDown,
    IoChevronUp,
    IoSettings,
    IoStatsChart,
    IoDocument,
    IoChatbubbleEllipses,
    IoCalendar,
    IoCard,
    IoList,
    IoCode,
    IoCall,
    IoSend,
    IoPeople,
    IoShield,
    IoCart,
    IoPieChart,
    IoClipboard,
    IoKey
} from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { MenuItem, SidebarProps } from "@/components/shared/types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, sidebarColor = 'blue', sidebarType = 'white' }) => {
    const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
    const pathname = usePathname();

    const getSidebarClasses = () => {
        const baseClasses = "fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 shadow-xl max-w-64 ease-nav-brand z-40 lg:ml-6 rounded-2xl lg:left-0";

        let typeClasses;
        if (sidebarType === 'dark') {
            typeClasses = "text-white bg-[#111c44]";
        } else {
            typeClasses = "bg-[#fff]";
        }

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

    const mainMenuItems: MenuItem[] = [
        {
            id: "dashboard",
            label: "Dashboard",
            href: "/dashboard",
            icon: <BiSolidDashboard className="w-4 h-4" />,
            iconColor: "text-blue-500",
            bgColor: getActiveBgColor()
        },
        {
            id: "message",
            label: "ข้อความ",
            icon: <IoChatbubbleEllipses className="w-4 h-4" />,
            iconColor: "text-green-500",
            subItems: [
                {
                    id: "send-fast",
                    label: "ส่งข้อความด่วน",
                    href: "/messages/send-fast",
                    icon: <IoSend className="w-3 h-3" />,
                    iconColor: "text-emerald-500"
                },
                {
                    id: "user-roles",
                    label: "User Roles",
                    href: "/users/roles",
                    icon: <IoSettings className="w-3 h-3" />,
                    iconColor: "text-purple-500"
                },
            ]
        },
        {
            id: "calendar",
            label: "ปฏิทินแคมเปญ",
            href: "/calendar",
            icon: <IoCalendar className="w-4 h-4" />,
            iconColor: "text-orange-500",
        },
        {
            id: "manage",
            label: "จัดการ",
            icon: <IoSettings className="w-4 h-4" />,
            iconColor: "text-purple-500",
            subItems: [
                {
                    id: "shipper-name",
                    label: "ชื่อผู้จัดส่ง",
                    href: "/manage/shipper-name",
                    icon: <IoPeople className="w-3 h-3" />,
                    iconColor: "text-blue-500"
                },
                {
                    id: "manage-contacts",
                    label: "จัดการผู้ติดต่อ",
                    href: "/manage/contacts",
                    icon: <IoPeople className="w-3 h-3" />,
                    iconColor: "text-indigo-500"
                },
                {
                    id: "list-block",
                    label: "รายการบล็อก",
                    href: "/manage/block-list",
                    icon: <IoShield className="w-3 h-3" />,
                    iconColor: "text-red-500"
                },
                {
                    id: "template",
                    label: "เทมเพลต",
                    href: "/manage/templates",
                    icon: <IoDocument className="w-3 h-3" />,
                    iconColor: "text-cyan-500"
                },
                {
                    id: "otp-service",
                    label: "บริการ OTP",
                    href: "/manage/otp-service",
                    icon: <IoKey className="w-3 h-3" />,
                    iconColor: "text-amber-500"
                }
            ]
        },
        {
            id: "credit",
            label: "สั่งซื้อเครดิต",
            href: "/credit/purchase",
            icon: <IoCard className="w-4 h-4" />,
            iconColor: "text-emerald-500",
        },
        {
            id: "list",
            label: "รายการ",
            icon: <IoList className="w-4 h-4" />,
            iconColor: "text-slate-500",
            subItems: [
                {
                    id: "list-order",
                    label: "รายการสั่งซื้อ",
                    href: "/lists/orders",
                    icon: <IoCart className="w-3 h-3" />,
                    iconColor: "text-green-500"
                },
                {
                    id: "sms-tracking",
                    label: "SMS Tracking",
                    href: "/lists/sms-tracking",
                    icon: <IoStatsChart className="w-3 h-3" />,
                    iconColor: "text-blue-500"
                },
                {
                    id: "report-api-otp",
                    label: "รายงาน API & OTP",
                    href: "/lists/api-otp-reports",
                    icon: <IoPieChart className="w-3 h-3" />,
                    iconColor: "text-purple-500"
                },
                {
                    id: "report-credit",
                    label: "รายงานเครดิต",
                    href: "/lists/credit-reports",
                    icon: <IoClipboard className="w-3 h-3" />,
                    iconColor: "text-orange-500"
                }
            ]
        },
        {
            id: "apis",
            label: "APIs",
            href: "/apis",
            icon: <IoCode className="w-4 h-4" />,
            iconColor: "text-teal-500",
        },
        {
            id: "contact",
            label: "ติดต่อ",
            href: "/contact",
            icon: <IoCall className="w-4 h-4" />,
            iconColor: "text-pink-500",
        }
    ];

    const toggleDropdown = (itemId: string) => {
        setOpenDropdowns(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const isDropdownOpen = (itemId: string) => openDropdowns.includes(itemId);
    const isActive = (href: string) => pathname === href;

    const isParentActive = (item: MenuItem) => {
        if (item.href && isActive(item.href)) return true;
        if (item.subItems) {
            return item.subItems.some(subItem => isActive(subItem.href));
        }
        return false;
    };

    const getMenuItemClasses = (item: MenuItem, isSubItem = false) => {
        const baseClasses = `py-3 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold transition-colors cursor-pointer ${isSubItem ? 'ml-4 py-2' : ''}`;

        let activeClasses;
        if (isSubItem) {
            const isActiveSubItem = item.href && isActive(item.href);
            activeClasses = isActiveSubItem
                ? `${getActiveBgColor()} dark:text-[#475f7c] dark:opacity-80 text-slate-700`
                : "dark:text-slate-600 dark:opacity-70 hover:bg-gray-50 dark:hover:bg-gray-100 text-slate-600";
        } else {
            const isActiveParent = isParentActive(item);
            activeClasses = isActiveParent
                ? `${item.bgColor || getActiveBgColor()} dark:text-[#475f7c] dark:opacity-80 text-slate-700`
                : "dark:text-slate-700 dark:opacity-80 hover:bg-gray-100 dark:hover:bg-red-300";
        }

        return `${baseClasses} ${activeClasses}`;
    };

    const renderMenuItem = (item: MenuItem) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const dropdownOpen = isDropdownOpen(item.id);

        return (
            <li key={item.id} className="mt-2 w-full">
                {hasSubItems ? (
                    <>
                        {/* Parent Item with Dropdown */}
                        <div
                            onClick={() => toggleDropdown(item.id)}
                            className={getMenuItemClasses(item)}
                        >
                            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <div className={`relative top-0 text-sm leading-normal ${item.iconColor}`}>
                                    {item.icon}
                                </div>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease flex-1">
                                {item.label}
                            </span>
                            <div className="ml-auto">
                                {dropdownOpen ? (
                                    <IoChevronUp className="w-4 h-4 text-gray-500" />
                                ) : (
                                    <IoChevronDown className="w-4 h-4 text-gray-500" />
                                )}
                            </div>
                        </div>

                        {/* Dropdown Items */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            {item.subItems?.map((subItem) => (
                                <Link
                                    key={subItem.id}
                                    href={subItem.href}
                                    className={getMenuItemClasses(subItem as MenuItem, true)}
                                >
                                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-center stroke-0 text-center">
                                        <div className={`relative top-0 text-xs leading-normal ${subItem.iconColor}`}>
                                            {subItem.icon}
                                        </div>
                                    </div>
                                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-xs">
                                        {subItem.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Regular Menu Item */
                    <Link href={item.href!} className={getMenuItemClasses(item)}>
                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                            <div className={`relative top-0 text-sm leading-normal ${item.iconColor}`}>
                                {item.icon}
                            </div>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                            {item.label}
                        </span>
                    </Link>
                )}
            </li>
        );
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
                    {mainMenuItems.map(renderMenuItem)}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;