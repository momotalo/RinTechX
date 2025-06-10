"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { FaLine, FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

interface ServiceLink {
  label: string;
  href: string;
}

interface ContactInfo {
  phone: string;
  line: string;
}

const Footer: FC<FooterProps> = ({ className = "" }) => {
  const services: ServiceLink[] = [
    { label: "SMS Marketing", href: "/services/sms-marketing" },
    { label: "SMS OTP", href: "/services/sms-otp" },
    { label: "SMS API", href: "/services/sms-api" },
  ];

  const contact: ContactInfo = {
    phone: "xxx-xxx-xxxx",
    line: "Kanelei26",
  };

  return (
    <footer className={`bg-[#2C5886] px-6 py-6 text-white ${className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="logo.svg"
                alt="RinTechX Logo"
                width={120}
                height={120}
              />
            </div>
            <h3 className="text-lg font-semibold">ผู้ให้บริการส่ง SMS</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Velit,
              eaque.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">บริการของเรา</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ติดต่อเรา</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-white-300 h-4 w-4" />
                <span className="text-sm text-gray-300">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaLine className="h-4 w-4 text-green-300" />
                <span className="text-sm text-gray-300">{contact.line}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ช่องทางการชำระเงิน</h3>
            <div className="grid grid-cols-3 gap-3">
              {/* Banking */}
              <div className="flex justify-start">
                <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/bank-icon.svg"
                    alt="Bank Logo"
                    width={80}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Visa */}
              <div className="flex justify-start">
                <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/visa-icon.svg"
                    alt="Visa Logo"
                    width={80}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* PayPal */}
              <div className="flex justify-start">
                <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/qr-payment.svg"
                    alt="QR Payment Logo"
                    width={80}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Mastercard */}
              <div className="flex justify-start">
                <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-white p-1">
                  <Image
                    src="/mastercard.svg"
                    alt="Mastercard Logo"
                    width={80}
                    height={18}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 RinTechX. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
