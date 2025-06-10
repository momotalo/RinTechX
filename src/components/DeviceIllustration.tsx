import React, { FC } from "react";

const DeviceIllustration: FC = () => {
  return (
    <div className="relative z-10 text-center">
      <div className="relative mx-auto mb-8 h-64 w-64">
        {/* Phone/Device Illustration */}
        <div className="relative mx-auto h-80 w-48 rounded-3xl border-4 border-gray-700 bg-gray-800 shadow-2xl">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black p-4">
            {/* 5G Icon */}
            <div className="absolute top-4 left-4">
              <div className="text-sm font-bold text-cyan-400">5G</div>
            </div>

            {/* Network Icons */}
            <div className="absolute top-4 right-4 flex space-x-1">
              <div className="h-3 w-1 rounded-full bg-cyan-400"></div>
              <div className="h-4 w-1 rounded-full bg-cyan-400"></div>
              <div className="h-2 w-1 rounded-full bg-cyan-400"></div>
              <div className="h-5 w-1 rounded-full bg-cyan-400"></div>
            </div>

            {/* Center Icons */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400">
                  <div className="h-4 w-4 rounded bg-gray-900"></div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400">
                  <div className="h-4 w-4 rounded-full bg-gray-900"></div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-400">
                  <div className="h-4 w-4 rounded bg-gray-900"></div>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-400">
                  <div className="h-4 w-4 rounded bg-gray-900"></div>
                </div>
              </div>
            </div>

            {/* Bottom Icons */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 transform space-x-4">
              <div className="h-6 w-6 rounded-full bg-cyan-400"></div>
              <div className="h-6 w-6 rounded-lg bg-blue-400"></div>
              <div className="h-6 w-6 rounded-full bg-purple-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceIllustration;
