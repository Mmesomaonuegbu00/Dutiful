import Image from 'next/image'
import React from 'react'

const Appoint = () => {
    return (
        <div className="w-full pt-[8vh] md:pt-[12vh] pb-[2vh] lg:pb-[20vh]">
            <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    <div className="flex lg:flex-row flex-col items-center pt-4">
                        <div className="flex flex-col">
                            <Image src="/booked.png" alt="booked" width={400} height={700} className="w-auto" />
                            <Image src="/calendar.png" alt="calendar" width={400} height={700} className="w-auto" />
                        </div>

                        <Image src="/time.png" alt="time" width={700} height={400} className="w-auto" />
                    </div>

                    <div className="flex flex-col justify-center max-w-2xl">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl  font-semibold text-gray-800 leading-tight mb-6 font-heading">
                           Accept and sell appointments
                        </h1>
                        <p className="font-navbar text-base text-gray-600">
                           Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page. 
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Appoint
