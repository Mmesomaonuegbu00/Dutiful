'use client'

import React from 'react'
import PricingCard from '@/Components/PricingCard'
import PricingComparison from '@/Components/PricingComparison'

// Feature list for the comparison table
const featuresList = [
    'Access dashboard',
    'Number of business listings',
    'Number of products or services',
    'Number of images',
    'Keywords',
    'Display service hours & pricing',
    'Display address, email & contact',
    'Instant chat',
    'Reviews & ratings',
    'Profile visibility',
    'Instant notifications',
    'Display website & social network',
    'Bookmarks',
    'Verified badge',
    'Latest offers',
    'Accept & sell appointments',
    '24/7 support',
]


const cardPlans = [
    {
        title: 'Free',
        price: 0,
        isFree: true,
        features: [
            'Access to dashboard',
            'Add up to 2 businesses',
            'Add up to 2 products/services',
            'Add up to 2 images',
            'Unlimited keywords',
            'Display service hours & prices',
            'Display address, contact & email',
            'Instant chat',
            'Reviews & ratings',
            'Profile visibility',
            'Instant notifications',
            'Display website & social network',
            'quotes',
            'bookmarks',

        ],
    },
    {
        title: 'Basic',
        price: 20000,
        features: [
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
            'Number of profile views',
            'Verified badge',
            'Latest offers',
        ],
    },
    {
        title: 'Premium',
        price: 30000,
        features: [
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
            'Number of profile views',
            'Verified badge',
            'Latest offers',
            'Verified badge',
            'Accept & sell appointments',
            '24/7 support',
        ],
    },
]


const comparisonPlans = [
    {
        title: 'Basic',
        getStartedLabel: 'Get Started',
        businessListing: 2,
        productsOrServices: 2,
        images: 2,
        otherFeatures: [true, true],
    },
    {
        title: 'Standard',
        getStartedLabel: 'Get Started',
        businessListing: 5,
        productsOrServices: 6,
        images: 4,
        otherFeatures: [true, true, true],
    },
    {
        title: 'Premium',
        getStartedLabel: 'Get Started',
        businessListing: 10,
        productsOrServices: 6,
        images: 6,
        otherFeatures: [true, true, true, true],
    },
]

const PricingPage = () => {
    return (
        <div className="bg-gray-50 py-16 px-6 font-navbar">
            <div className='xl:w-[75%] w-[90%] mx-auto pt-[10vh]'>
                <div className='mb-6 max-w-2xl mx-auto text-center space-y-4'>
                    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">Plans to Suit Your Business Budget</h2>
                    <p className=''>Our fully organized plans deliver valuable content that showcases your services and skills, drives Lead, covers all features, and gives customers a clear idea to be able to choose your services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto pt-[5vh]">
                    {cardPlans.map((plan, idx) => (
                        <PricingCard
                            key={idx}
                            title={plan.title}
                            price={plan.price}
                            isFree={plan.isFree}
                            features={plan.features}
                        />
                    ))}
                </div>


                <PricingComparison features={featuresList} plans={comparisonPlans} />
            </div>
        </div>
    )
}

export default PricingPage
