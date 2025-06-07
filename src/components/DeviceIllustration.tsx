import React, { FC } from 'react'

const DeviceIllustration: FC = () => {
    return (
        <div className="relative z-10 text-center">
            <div className="w-64 h-64 mx-auto mb-8 relative">
                {/* Phone/Device Illustration */}
                <div className="w-48 h-80 bg-gray-800 rounded-3xl mx-auto relative border-4 border-gray-700 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 relative overflow-hidden">
                        {/* 5G Icon */}
                        <div className="absolute top-4 left-4">
                            <div className="text-cyan-400 font-bold text-sm">5G</div>
                        </div>

                        {/* Network Icons */}
                        <div className="absolute top-4 right-4 flex space-x-1">
                            <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
                            <div className="w-1 h-4 bg-cyan-400 rounded-full"></div>
                            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
                            <div className="w-1 h-5 bg-cyan-400 rounded-full"></div>
                        </div>

                        {/* Center Icons */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-900 rounded"></div>
                                </div>
                                <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                                </div>
                                <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-900 rounded"></div>
                                </div>
                                <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gray-900 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Icons */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
                            <div className="w-6 h-6 bg-blue-400 rounded-lg"></div>
                            <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeviceIllustration