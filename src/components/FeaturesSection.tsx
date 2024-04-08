import { squareBackground } from '@/constants/colors'
import React from 'react'

type Feature = {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: 'Talk to Your Portfolio & Market',
        description: 'Engage in natural language conversations with your portfolio, real-time news and entire financial market.'
    },
    {
        title: 'Smart Portfolio Management',
        description: 'Effortlessly manage your portfolio across multiple platforms with our cutting-edge AI technology, designed to maximize your returns.'
    },
    {
        title: 'Portfolio Optimization',
        description: 'Refine your portfolio with advanced optimization strategies and techniques powered by state-of-the-art deep learning models.'
    },
    {
        title: 'Advanced Future Predictions',
        description: 'Leverage highly sophisticated LSTM deep learning models, advanced algorithmic agents, simulations, and stacking models for precise future forecasting.'
    },
    {
        title: 'Real-time News & Alerts',
        description: 'Stay informed with real-time updates on stocks and crypto news, enabling you to make informed decisions and act swiftly.'
    },
    {
        title: 'Seamless Exchange Connectivity',
        description: 'Easily connect to all major stock and crypto exchanges such as Zerodha, Coinbase, Binance, and more, streamlining your trading experience.'
    }
];

const FeaturesSection = () => {
    return (
        <div className={`${squareBackground} h-[100vh]`}>
            <section className={`mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-1`}>
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl text-gray-600">Revolutionizing Your Investment Experience</h2>
                    <p className="mt-4 text-gray-500">Empowering Informed Decision-Making for Wealth Creation, and Transforming Investor Knowledge & Earnings Potential</p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <a key={index} href="#" className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-200 hover:shadow-blue-300">
                            <h2 className="mt-4 text-xl font-bold text-gray-700">{feature.title}</h2>
                            <p className="mt-1 text-base text-gray-600">{feature.description}</p>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default FeaturesSection
