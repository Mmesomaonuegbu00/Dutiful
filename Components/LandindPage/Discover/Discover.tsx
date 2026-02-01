/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Discover = () => {
    return (
        <div className="w-full flex justify-center pt-32 lg:pt-22.5">
            <div className="max-w-360 w-full mx-auto flex items-center px-6 lg:h-216.5">
                <div className="flex flex-col lg:flex-row w-full items-center gap-19.75 bg-[#FCFAFF] rounded-3xl py-8 lg:py-20 px-6 lg:px-8">

                    <div className="hidden xl:flex justify-center w-159.5 h-155.25 relative bg-[#532F82] mt-20 ml-10 mb-20 rounded-2xl">
                        <Image
                            src="/discover.png"
                            alt="Discover Illustration"
                            width={1000}
                            height={1000}
                            className="absolute -top-15 z-10"
                        />
                    </div>


                 
                    <div className="flex flex-col justify-center items-stretch space-y-6 text-[#464646]">

                        <div className="relative bg-white w-full lg:max-w-120 min-h-47.75 rounded-[26px] border border-[#EEEEFF] shadow-[inset_0_4px_6px_0_rgba(234,229,240,0.1)] p-4">
                            <img src="/discover1.png" alt="" className="absolute top-4 left-4 w-auto h-6" />
                            <h5 className="text-[20px] font-bold mt-6">Get Discovered</h5>
                            <p className="text-sm lg:text-[16px] text-[#464646] mt-2">
                                Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEO techniques to boost each listing&apos;s performance in the SERPs, providing any business the chance to rank, regardless of how strong their current presence is.
                            </p>
                        </div>

                        <div className="relative bg-white w-full lg:max-w-120 min-h-47.75 rounded-[26px] border border-[#EEEEFF] shadow-[inset_0_4px_6px_0_rgba(234,229,240,0.1)] p-4 xl:right-60 z-10">
                            <img src="/messages.png" alt="" className="absolute top-4 left-4 w-auto h-6" />
                            <h5 className="text-[20px] font-bold mt-6">Instant chat</h5>
                            <p className="text-sm lg:text-[16px] text-[#464646] mt-2">
                                You&apos;ll be able to chat and send voice recordings with potential and existing customers, including managing your captured leads anytime, anywhere via the platform.
                            </p>
                        </div>

                        <div className="relative bg-white w-full lg:max-w-120 min-h-47.75 rounded-[26px] border border-[#EEEEFF] shadow-[inset_0_4px_6px_0_rgba(234,229,240,0.1)] p-4">
                            <img src="/note-2.png" alt="" className="absolute top-4 left-4 w-auto h-6" />
                            <h5 className="text-[20px] font-bold mt-6">Quotations</h5>
                            <p className="text-sm lg:text-[16px] text-[#464646] mt-2">
                               In addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you’ll be able to send and receive quotation from customers - an important step in lead management.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Discover
