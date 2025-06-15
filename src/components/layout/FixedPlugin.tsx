"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { FixedPluginProps } from "@/components/shared/types";

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

export default FixedPlugin;