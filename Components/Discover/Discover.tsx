import Image from 'next/image'
import React from 'react'

const Discover = () => {
    return (
        <div className='w-full pt-[3vh] xl:pt-[12vh] pb-[2vh] h-full'>
            <div className='flex justify-center flex-col xl:w-[75%] w-[90%] h-full mx-auto bg-[#FCFAFF] lg:p-6'>
                <div className='grid grid-cols-1 xl:grid-cols-2 items-center lg:gap-14'>
                    <div className='hidden xl:flex xl:justify-center w-[85%] h-87.5 relative bg-[#532F82] mt-20 ml-10 mb-20 rounded-2xl'>
                        <Image
                            src="/discover.png"
                            alt="Discover Illustration"
                            width={1000}
                            height={1000}
                            className="absolute w-auto h-auto -top-15 z-10"
                        />
                    </div>

                    <div className='flex flex-col justify-center items-stretch space-y-6 px-4 sm:px-6 lg:px-0 py-6 lg:py-0'>

                        <div className="bg-white rounded-2xl p-4 w-full xl:max-w-xl border border-[#EEEEFF] shadow-2xs shadow-gray-100">
                            <h5 className="font-medium">Get Discovered</h5>
                            <p className='text-gray-600 text-sm p-2 xl:max-w-112.5'>
                                Dutiful is more than just a business directory; it also enhances your web profile. The platform makes use of SEo techniques to boost each listing&apos;s performance in the SERPs, providing any business the chance to rank, regardless of how strong their current presence is.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-4 w-full xl:max-w-2xl border border-[#EEEEFF] shadow-2xs shadow-gray-100 relative xl:right-60 z-10">
                            <h5 className="font-medium">Instant chat</h5>
                            <p className='text-gray-600 text-sm p-2 max-w-112.5'>
                                You&#39;ll be able to chat and send voice recordings with pontential and existing customers,including managing your captured leads anytime,anywhere via the platform.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-4 w-full xl:max-w-2xl border border-[#EEEEFF] shadow-2xs shadow-gray-100">
                            <h5 className="font-medium">Quotations</h5>
                            <p className='text-gray-600 text-sm p-2 max-w-112.5'>
                                InIn addition to providing customers with access to information, offering customer quotations is very advantageous to the way you conduct your business. On Dutiful, you’ll be able to send and receive quotation from customers - an important step in lead management.
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Discover
