import { squareBackground } from '@/constants/colors'
import React from 'react'

type Props = {}

const ComingSoon = (props: Props) => {
    return (
        <div className={`min-h-screen ${squareBackground} flex flex-col items-center justify-center`}>
            <h1 className="text-6xl font-bold text-gray-600 mb-4">Coming Soon</h1>
            <p className="text-xl text-gray-400 mb-8">Stay tuned for something amazing!</p>
            {/* <div className="flex space-x-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">Notify Me</button>
            </div> */}
        </div>
    )
}

export default ComingSoon