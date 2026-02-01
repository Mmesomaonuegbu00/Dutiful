/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
    return (
        <div className="bg-[#532F82] pt-32 lg:pt-22.5">
            <div className="max-w-360 w-full mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    <div>
                        <h3 className="text-[22px] font-semibold text-white">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2 text-[#B6B6E5]">
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[22px] font-semibold text-white">
                            Quick links
                        </h3>
                        <ul className="mt-4 space-y-2 text-[#B6B6E5]">
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Find services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Pricing & plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    List your business
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[22px] font-semibold text-white">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-2 text-[#B6B6E5]">
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Affiliate program
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[22px] font-semibold text-white">
                            More from Dutiful
                        </h3>
                        <ul className="mt-4 space-y-2 text-[#B6B6E5]">
                            <li>
                                <a href="#" className="text-[16px] hover:text-blue-900 transition-all duration-300">
                                    Dutiful jobs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-t-[#63428E] pt-8 flex flex-col md:flex-row justify-between lg:items-center text-gray-500 text-sm">
                    <div className="flex lg:items-center space-x-4 mt-4 md:mt-0 text-white">
                        <span>Follow us</span>

                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <img src="/f.svg" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <img src="/insta.svg" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <img src="/twit.svg" alt="Twitter" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <img src="/link.svg" alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <img src="/you.svg" alt="YouTube" className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-white flex flex-row items-center space-x-4 mt-4 md:mt-0">
                        <p>Download the app</p>
                        <div className="flex items-center justify-between gap-12">
                            <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                                <img src="/apple.svg" alt="Apple App" className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                                <img src="/play.svg" alt="Google Pay" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>


                <div className="mt-8 border-t border-t-[#63428E] pt-8 flex flex-col md:flex-row gap-19.75 lg:items-center text-gray-500 text-sm">
                    <p className="lg:text-center text-gray-300 text-sm md:text-left text-[18px]">
                        © 2022 Dutiful®
                    </p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-[#B6B6E5] mt-4 md:mt-0 text-[16px]">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Disclaimer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
