import ComingSoon from '@/components/ComingSoon'
import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Navbar />
            <ComingSoon />
        </div>
    )
}

export default page;