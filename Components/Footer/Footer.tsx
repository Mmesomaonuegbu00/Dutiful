import React from 'react'
import { FaApple, FaFacebook, FaGooglePay, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#532F82] pt-[8vh] md:pt-[12vh] pb-[2vh] '>
            <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>

                    <div>
                        <h3 className='text-lg font-semibold text-white'>
                            Company
                        </h3>
                        <ul className='mt-4 space-y-2 text-[#B6B6E5]'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    FAQs
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold text-white'>
                            Quick links
                        </h3>
                        <ul className='mt-4 space-y-2 text-[#B6B6E5]'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Find services
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Princing & plans
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    List your  business
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-white'>
                            Resources
                        </h3>
                        <ul className='mt-4 space-y-2 text-[#B6B6E5]'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Affliate program
                                </a>
                            </li>



                        </ul>

                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-white'>
                            More from Dutiful
                        </h3>
                        <ul className='mt-4 space-y-2 text-[#B6B6E5]'>
                            <li>
                                <a href='#' className='text-sm hover:text-blue-900 transition-all duration-300'>
                                    Dutiful jobs
                                </a>
                            </li>




                        </ul>

                    </div>
                </div>

                <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm'>


                    <div className="flex items-center space-x-4 mt-4 md:mt-0 text-white">
                        <span> Follow us</span>

                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <FaFacebook />
                        </a>

                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <FaInstagram />
                        </a>

                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="#" className='text-gray-300 hover:text-blue-600 transition-all duration-300'>
                            <FaYoutube />
                        </a>
                    </div>
                    <div className='text-white flex flex-row items-center space-x-4 mt-4 md:mt-0'>
                        <p>Download the app</p>
                        <div className='flex items-center justify-between gap-12'>
                            <a href="#" className="text-gray-300 hover:text-blue-600 transition-all duration-300">
                                <FaApple />
                            </a>
                            <a href="#" className='text-gray-300 hover:text-blue-600 transition-all duration-300'>
                                <FaGooglePay />
                            </a>
                        </div>
                    </div>


                </div>

                <div className='mt-8 border-t pt-8 flex flex-col md:flex_row justify-between items-center text-gray-500 text-sm'>
                    <p className='text-center text-gray-300 text-sm md:text-left'>
                         © 2022 Dutiful. All rights reserved.
                    </p>
                    <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-[#B6B6E5] mt-4 md:mt-0'>
                        <p>terms of service</p>
                        <p> Privacy policy </p>
                        <p>Disclaimer</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
