"use client";
import Image from "next/image";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import { MdPhonelinkRing } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import SpecialHead from "@/components/SpecialHead";

export default function Home() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />

      {/* Present Section */}
      <div className="w-[80%] mx-auto my-10 flex-grow flex flex-col justify-center items-center">
        <div className="flex w-full p-2">
          {/* Left Section */}
          <div className="presnet-left w-1/2">
            <div className="present-title flex justify-start">
              <h1 className="font-san text-5xl font-bold text-[#0E345B]">
                บริการระบบส่ง SMS
              </h1>
            </div>
            <div className="present-des">
              <p className="w-md text-[#0E345B] text-base/6 font-sans mt-4">
                ระบบส่ง SMS ของเราให้บริการส่งข้อความสั้น (SMS)
                ที่มีประสิทธิภาพและเชื่อถือได้สำหรับธุรกิจและองค์กรต่างๆ
                ไม่ว่าจะเป็นการแจ้งเตือน การยืนยัน หรือการสื่อสารกับลูกค้า
              </p>
            </div>
            <div className="present-btn">
              <Link
                href="/login"
                className="bg-[#0E345B] text-white font-bold py-2 px-4 rounded-full mt-4 inline-block"
              >
                เริ่มต้นใช้งาน
              </Link>
              <Link
                href="/price"
                className="bg-[#D9D9D9] text-[#0E345B] font-bold py-2 px-4 rounded-full mt-4 ml-4 inline-block"
              >
                ราคา
              </Link>
            </div>
          </div>
          {/* Right Section */}
          <div className="present-right w-1/2 flex flex-col justify-center items-center">
            {/* Title */}
            <div className="title">
              <h2 className="text-[#0E345B] text-2xl text-center font-bold rounded-full mb-4 p-2">
                สร้างข้อได้เปรียบให้ธุรกิจด้วย SMS Marketing
              </h2>
            </div>
            {/* Card Section */}
            <div className="w-full content flex justify-center gap-4">
              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="w-[280px] h-fit bg-gray-200 rounded-xl p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <LuMail className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>
            </div>
            {/* กสทช. */}
            <div className="flex max-w-xl justify-center gap-3 bg-gray-100 rounded-xl p-2 mt-6">
              <div className="flex items-center justify-center">
                <Image src="/krut.svg" alt="กสทช." width={100} height={50} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="flex items-center text-center text-gray-500 text-sl mb-2">
                  กสทช. ได้รับรองมาตรฐานการให้บริการของเรา
                </p>
                <Link
                  href="/#"
                  className="text-center text-red-500 hover:underline"
                >
                  ดูรายละเอียดเพิ่มเติม
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Section */}
      <div className="special mt-5">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Decorative Dots */}
          <div className="absolute top-8 left-8 grid grid-cols-8 gap-2">
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
          </div>

          <div className="absolute top-8 right-8 grid grid-cols-8 gap-2">
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>

          </div>

          {/* Top Navigation Dots */}
          <div className="flex justify-center pt-8 space-x-3">
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#1e3a8a] rounded-full"></div>
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <div className="w-3 h-3 bg-[#e2293b] rounded-full"></div>
          </div>

          {/* Header Bars */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-400 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center px-4">
            {/* Logo */}
            <div className="mb-2">
              <Image
                src="/logo.svg"
                alt="logo RinTechX"
                width={150}
                height={150}
              />
            </div>

            {/* Divider Line */}
            <div className="w-96 h-px bg-gray-400 mb-2"></div>

            {/* Main Text */}
            <div className="text-center max-w-2xl">
              <h2 className="text-xl text-[#0E345B] leading-relaxed font-semibold">
                จุดเด่นของบริการ
                <span className="font-bold"> SMS Marketing</span> จาก
                <span className=" font-bold"> RinTech  <span className="text-[#e2293b]">X</span></span>
              </h2>
            </div>

            <div className="special-content w-full flex mt-2">
              {/* Content Left */}
              <div className="con-left w-[60%] flex justify-end items-center p-2">
                <div className="item w-[80%] grid grid-cols-2 gap-4">
                  <Card className="w-full h-fit border rounded-xl">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">Become an Acme Creator!</h3>
                        <div className="flex flex-col pt-2 text-sm text-default-400">
                          <p>
                            Visit creators.acme.com to sign up today and start earning credits from your fans and
                            followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="w-full h-fit border rounded-xl">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">Become an Acme Creator!</h3>
                        <div className="flex flex-col pt-2 text-sm text-default-400">
                          <p>
                            Visit creators.acme.com to sign up today and start earning credits from your fans and
                            followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="w-full h-fit border rounded-xl">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">Become an Acme Creator!</h3>
                        <div className="flex flex-col pt-2 text-sm text-default-400">
                          <p>
                            Visit creators.acme.com to sign up today and start earning credits from your fans and
                            followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="w-full h-fit border rounded-xl">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">Become an Acme Creator!</h3>
                        <div className="flex flex-col pt-2 text-sm text-default-400">
                          <p>
                            Visit creators.acme.com to sign up today and start earning credits from your fans and
                            followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* Content Right */}
              <div className="con-right w-[40%] flex justify-end">
                <div className="w-[80%] bg-[#fdfdfd] -mr-5 py-2" style={{ borderRadius: '80px 0 0 80px' }}>
                  <Image
                    src="/mobile-icon.svg"
                    alt="logo RinTechX"
                    width={100}
                    height={80}
                    className="w-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-[80%] mx-auto my-10 flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#636363]">บริการของเรา
          <span className="text-[#0E345B]"> RinTech</span>
          <span className="text-[#e2293b]">X</span>
        </h1>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 mt-4 p-4">
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-100 max-w-2xs">
            <div className="card-image h-32 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
              <BsPhoneFlip className="text-6xl text-indigo-600 hover:text-indigo-700 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content p-6 h-40">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Title</h1>
              </div>
              <div className="description">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
