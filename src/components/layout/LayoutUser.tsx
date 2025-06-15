"use client";
import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import Navbar from "@/components/layout/Nabbar";
import Sidebar from "@/components/layout/Sidebar";
import FixedPlugin from "@/components/layout/FixedPlugin";
import { DashboardLayoutProps } from "@/components/shared/types";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children,
    breadcrumb = { category: "Pages", page: "Dashboard" },
    username = "NONTHAWAT"
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
            <div className={`fixed top-0 left-0 right-0 w-full h-[50%] min-h-[400px]
            ${isDarkMode ? 'dark bg-[#0E345B]' : 'bg-[#989898]'}
            ${isNavbarFixed ? 'h-32' : ''}
        `}></div>

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
                    username={username}
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

export default DashboardLayout;