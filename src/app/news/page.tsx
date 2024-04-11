import ComingSoon from '@/components/ComingSoon'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

const News = (props: Props) => {
    return (
        <div>
            <Navbar />
            <ComingSoon />
        </div>
    )
}

export default News