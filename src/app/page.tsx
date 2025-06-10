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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Present Section */}
      <div className="mx-auto my-10 flex w-[80%] flex-grow flex-col items-center justify-center">
        <div className="flex w-full p-2">
          {/* Left Section */}
          <div className="presnet-left w-1/2">
            <div className="present-title flex justify-start">
              <h1 className="font-san text-5xl font-bold text-[#0E345B]">
                บริการระบบส่ง SMS
              </h1>
            </div>
            <div className="present-des">
              <p className="mt-4 w-md font-sans text-base/6 text-[#0E345B]">
                ระบบส่ง SMS ของเราให้บริการส่งข้อความสั้น (SMS)
                ที่มีประสิทธิภาพและเชื่อถือได้สำหรับธุรกิจและองค์กรต่างๆ
                ไม่ว่าจะเป็นการแจ้งเตือน การยืนยัน หรือการสื่อสารกับลูกค้า
              </p>
            </div>
            <div className="present-btn">
              <Link
                href="/login"
                className="mt-4 inline-block rounded-full bg-[#0E345B] px-4 py-2 font-bold text-white"
              >
                เริ่มต้นใช้งาน
              </Link>
              <Link
                href="/price"
                className="mt-4 ml-4 inline-block rounded-full bg-[#D9D9D9] px-4 py-2 font-bold text-[#0E345B]"
              >
                ราคา
              </Link>
            </div>
          </div>
          {/* Right Section */}
          <div className="present-right flex w-1/2 flex-col items-center justify-center">
            {/* Title */}
            <div className="title">
              <h2 className="mb-4 rounded-full p-2 text-center text-2xl font-bold text-[#0E345B]">
                สร้างข้อได้เปรียบให้ธุรกิจด้วย SMS Marketing
              </h2>
            </div>
            {/* Card Section */}
            <div className="content flex w-full justify-center gap-4">
              <Card className="h-fit w-[280px] rounded-xl bg-gray-200 p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                      <LuMail className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="h-fit w-[280px] rounded-xl bg-gray-200 p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                      <LuMail className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>

              <Card className="h-fit w-[280px] rounded-xl bg-gray-200 p-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-sm">
                      <LuMail className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                </CardHeader>
                <div className="w-full text-5xl font-bold text-gray-900">
                  95%
                </div>
                <CardBody>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ea, recusandae?
                  </p>
                </CardBody>
              </Card>
            </div>
            {/* กสทช. */}
            <div className="mt-6 flex max-w-xl justify-center gap-3 rounded-xl bg-gray-100 p-2">
              <div className="flex items-center justify-center">
                <Image src="/krut.svg" alt="กสทช." width={100} height={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sl mb-2 flex items-center text-center text-gray-500">
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
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          {/* Decorative Dots */}
          <div className="absolute top-8 left-8 grid grid-cols-8 gap-2">
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
          </div>

          <div className="absolute top-8 right-8 grid grid-cols-8 gap-2">
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
          </div>

          {/* Top Navigation Dots */}
          <div className="flex justify-center space-x-3 pt-8">
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#1e3a8a]"></div>
            <div className="h-3 w-3 rounded-full bg-[#D9D9D9]"></div>
            <div className="h-3 w-3 rounded-full bg-[#e2293b]"></div>
          </div>

          {/* Header Bars */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-4 w-12 rounded-full bg-gray-400"></div>
            <div className="h-4 w-12 rounded-full bg-gray-400"></div>
            <div className="h-4 w-12 rounded-full bg-gray-400"></div>
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
            <div className="mb-2 h-px w-96 bg-gray-400"></div>

            {/* Main Text */}
            <div className="max-w-2xl text-center">
              <h2 className="text-xl leading-relaxed font-semibold text-[#0E345B]">
                จุดเด่นของบริการ
                <span className="font-bold"> SMS Marketing</span> จาก
                <span className="font-bold">
                  {" "}
                  RinTech <span className="text-[#e2293b]">X</span>
                </span>
              </h2>
            </div>

            <div className="special-content mt-2 flex w-full">
              {/* Content Left */}
              <div className="con-left flex w-[60%] items-center justify-end p-2">
                <div className="item grid w-[80%] grid-cols-2 gap-4">
                  <Card className="h-fit w-full rounded-xl border">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">
                          Become an Acme Creator!
                        </h3>
                        <div className="text-default-400 flex flex-col pt-2 text-sm">
                          <p>
                            Visit creators.acme.com to sign up today and start
                            earning credits from your fans and followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="h-fit w-full rounded-xl border">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">
                          Become an Acme Creator!
                        </h3>
                        <div className="text-default-400 flex flex-col pt-2 text-sm">
                          <p>
                            Visit creators.acme.com to sign up today and start
                            earning credits from your fans and followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="h-fit w-full rounded-xl border">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">
                          Become an Acme Creator!
                        </h3>
                        <div className="text-default-400 flex flex-col pt-2 text-sm">
                          <p>
                            Visit creators.acme.com to sign up today and start
                            earning credits from your fans and followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="h-fit w-full rounded-xl border">
                    <CardBody className="flex flex-row flex-wrap items-center p-0 sm:flex-nowrap">
                      <MdPhonelinkRing className="h-12 w-12 flex-none sm:h-16 sm:w-16 md:h-20 md:w-20" />
                      <div className="px-2 py-2">
                        <h3 className="text-base font-medium">
                          Become an Acme Creator!
                        </h3>
                        <div className="text-default-400 flex flex-col pt-2 text-sm">
                          <p>
                            Visit creators.acme.com to sign up today and start
                            earning credits from your fans and followers.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* Content Right */}
              <div className="con-right flex w-[40%] justify-end">
                <div
                  className="-mr-5 w-[80%] bg-[#fdfdfd] py-2"
                  style={{ borderRadius: "80px 0 0 80px" }}
                >
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex space-x-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400"></div>
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-gray-400"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto my-10 flex w-[80%] flex-grow flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#636363]">
          บริการของเรา
          <span className="text-[#0E345B]"> RinTech</span>
          <span className="text-[#e2293b]">X</span>
        </h1>
        <div className="container mt-4 grid grid-cols-1 justify-items-center gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
                </p>
              </div>
            </div>
          </div>
          <div className="card max-w-2xs overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="card-image relative flex h-32 items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
              <BsPhoneFlip className="text-6xl text-indigo-600 transition-colors duration-300 hover:text-indigo-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            <div className="card-content h-40 p-6">
              <div className="title mb-3">
                <h1 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-indigo-600">
                  Title
                </h1>
              </div>
              <div className="description">
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusamus, delectus.
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
