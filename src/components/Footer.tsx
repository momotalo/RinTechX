'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle } from 'lucide-react'
import { FaLine, FaPhoneAlt } from "react-icons/fa";

interface FooterProps {
    className?: string
}

interface ServiceLink {
    label: string
    href: string
}

interface ContactInfo {
    phone: string
    line: string
}

const Footer: FC<FooterProps> = ({ className = '' }) => {

    const services: ServiceLink[] = [
        { label: 'SMS Marketing', href: '/services/sms-marketing' },
        { label: 'SMS OTP', href: '/services/sms-otp' },
        { label: 'SMS API', href: '/services/sms-api' }
    ]

    const contact: ContactInfo = {
        phone: 'xxx-xxx-xxxx',
        line: 'Kanelei26'
    }

    return (
        <footer className={`bg-[#2C5886] text-white py-6 px-6 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            Velit, eaque.
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
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
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
                                <FaPhoneAlt className='text-white-300 w-4 h-4'/>
                                <span className="text-gray-300 text-sm">{contact.phone}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaLine className="text-green-300 w-4 h-4" />
                                <span className="text-gray-300 text-sm">{contact.line}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">ช่องทางการชำระเงิน</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {/* Banking */}
                            <div className="flex justify-start">
                                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-1">
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
                                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-1">
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
                                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-1">
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
                                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-1">
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
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-300">
                            © 2024 RinTechX. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                นโยบายความเป็นส่วนตัว
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                                ข้อกำหนดการใช้งาน
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer