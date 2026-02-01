'use client'

import React from 'react'
import { BiCheck, BiX } from 'react-icons/bi'

interface PlanColumn {
    title: string
    price?: number
    isFree?: boolean
    getStartedLabel?: string
    businessListing?: number
    productsOrServices?: number
    images?: number
    otherFeatures?: boolean[]
}

interface PricingComparisonProps {
    features: string[]
    plans: PlanColumn[]
}

const PricingComparison = ({ features, plans }: PricingComparisonProps) => {
    return (
        <div className="overflow-x-auto py-16 px-6 max-w-360 mx-auto">
            <h2 className="text-2xl font-medium mb-3 text-gray-800">Features Overview</h2>
            <div className="min-w-225">
                <div className="grid grid-cols-[2fr_repeat(3,1fr)] gap-4 mb-6 items-center">
                    <div className="font-medium -[#656565">Features & Services</div>
                    {plans.map((plan, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            <div className="text-base text-black text-[22px] font-medium">{plan.title}</div>
                            <button className="w-full h-16 bg-[#532F82] text-white text-[18px] font-semibold rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656]">
                                {plan.getStartedLabel || 'Get Started'}
                            </button>
                        </div>
                    ))}
                </div>

                {features.map((feature, rowIdx) => (
                    <div
                        key={rowIdx}
                        className={`grid grid-cols-[2fr_repeat(3,1fr)] gap-4 p-1.5 md:max-h-14.5 font-[20px] items-center border-b border-gray-100 last:border-b-0 ${
                            rowIdx % 2 === 0 ? 'bg-white' : 'bg-none'
                        }`}
                    >
                        <div className="text-gray-700">{feature}</div>
                        {plans.map((plan, colIdx) => {
                            let cellContent: React.ReactNode = (
                                <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                            )

                            if (feature === 'Number of business listings' && plan.businessListing !== undefined) {
                                cellContent = <span className="mx-auto">{plan.businessListing}</span>
                            }

                            if (
                                feature === 'Number of products or services' &&
                                plan.productsOrServices !== undefined
                            ) {
                                cellContent = <span className="mx-auto">{plan.productsOrServices}</span>
                            }

                            if (feature === 'Number of images' && plan.images !== undefined) {
                                cellContent = <span className="mx-auto">{plan.images}</span>
                            }

                            if (feature === 'Number of profile views') {
                                cellContent =
                                    colIdx === 2 ? (
                                        <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                                    ) : (
                                        <BiX className="text-gray-300 mx-auto" size={22} />
                                    )
                            }

                            if (feature === 'Verified badge') {
                                if (colIdx === 1 || colIdx === 2) {
                                    cellContent = <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                                } else {
                                    cellContent = <BiX className="text-gray-300 mx-auto" size={22} />
                                }
                            }

                            if (feature === 'Latest offers' || feature === 'Accept & sell appointments') {
                                cellContent =
                                    colIdx === 1 ? (
                                        <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                                    ) : (
                                        <BiX className="text-gray-300 mx-auto" size={22} />
                                    )
                            }

                            if (feature === '24/7 support') {
                                cellContent =
                                    colIdx === 2 ? (
                                        <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                                    ) : (
                                        <BiX className="text-gray-300 mx-auto" size={22} />
                                    )
                            }

                            if (
                                [
                                    'Access to dashboard',
                                    'Add up to 6 businesses',
                                    'Add up to 6 products/services',
                                    'Add up to 4 images',
                                    'Unlimited keywords',
                                    'Display service hours & prices',
                                    'Display address, contact & email',
                                    'Instant chat',
                                    'Reviews & ratings',
                                    'Profile visibility',
                                    'Full profile display',
                                    'Instant notifications',
                                    'Display website & social network',
                                    'Quotes',
                                    'Bookmarks',
                                ].includes(feature)
                            ) {
                                cellContent = <BiCheck className="text-[#AC64CE] mx-auto" size={20} />
                            }

                            return (
                                <div key={colIdx} className="flex items-center justify-center texT-black">
                                    {cellContent}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingComparison
