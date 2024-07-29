
import { squareBackground } from '@/constants/colors';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import advisorPic from '../../public/assets/srikantWithoutBg.png'; // Updated to import local image
import founderPic from '../../public/assets/arpit2.png'; // Updated to import local image
import cofounderPic from '../../public/assets/mehak.png'; // Updated to import local image
import { FaSquareXTwitter } from "react-icons/fa6";


type Props = {};

const Team = (props: Props) => {
    // const founderPic =
    //     'https://talking-with-pdf.s3.ap-south-1.amazonaws.com/assets/arpit.png';
    // const advisorPic = '/assets/srikantWithoutBg.png'

    const founders = [
        {
            id: 1,
            name: 'Arpit Dhamija',
            imageUrl: founderPic,
            description: 'Founder & CEO',
            achievementL1: '- ex Amazon, Adobe, & top startups',
            achievementL2: '- Multiple research papers published in ML/AI',
            linkedin: 'https://www.linkedin.com/in/arpitdhamija/',
            twitter: 'https://twitter.com/arpit_dhamija',
            email: 'appydam@gmail.com',
        },
        // {
        //     id: 2,
        //     name: 'Mehak Dhamija',
        //     imageUrl: cofounderPic,
        //     description: 'Co-Founder & Chief of Strategy',
        //     achievementL1: '- Microsoft Research, Bain & Co. 20U20',
        //     achievementL2: '- Developer, strategic consultant',
        //     linkedin: 'https://www.linkedin.com/in/mehak-dhamija-95407522b/',
        //     email: 'mehakdhamija82@gmail.com',
        // },
        // {
        //     id: 3,
        //     name: 'Srikant Aggarwal',
        //     imageUrl: advisorPic,
        //     description: 'Advisor',
        //     achievementL1: '- ex Uber, Meta, Amazon & top startups',
        //     achievementL2: '- MS @ Stony Brook',
        //     linkedin: 'https://www.linkedin.com/in/srikantaggarwal/',
        //     twitter: 'https://twitter.com/srikant_1986',

        // },

    ];

    const handleEmailClick = (email: string) => {
        window.location.href = `mailto:${email}`;
    };


    return (
        <div className={`${squareBackground} h-[100vh]`}>
            <section className={`mx-auto max-w-screen-2xl px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-1`}>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Team</h2>
                    <div className="flex flex-wrap justify-center -mx-4">
                        {founders.map((founder) => (
                            <div key={founder.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 flex justify-center">
                                <div className="bg-white rounded-lg shadow-2xl overflow-hidden min-w-[25vw]">
                                    <div className={`${squareBackground}`}>
                                        <Image
                                            src={founder.imageUrl}
                                            width={150}
                                            height={10}
                                            alt="founder pic"
                                            layout="responsive"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className='flex justify-between'>
                                            <h3 className="text-xl font-semibold mb-2">{founder.name}</h3>
                                            <div className='flex justify-around space-x-1'>
                                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin size={24} strokeWidth={0} className='fill-white bg-blue-500 p-[2px] rounded-sm' />
                                                </a>
                                                {founder.twitter &&
                                                    <a href={founder.twitter} target="_blank" rel="noopener noreferrer">
                                                        <FaSquareXTwitter size={24} />
                                                    </a>}
                                                {founder.email &&
                                                    <a href={`mailto:${founder.email}`} onClick={() => handleEmailClick(founder.email)}>
                                                        <Mail size={24} color="#0b2900" strokeWidth={2.25} className='rounded-sm bg-gray-100 shadow-md' />
                                                    </a>}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-base bg-gray-100 w-fit p-1 shadow-md rounded-sm mb-2">{founder.description}</p>
                                        <p className="text-gray-600">{founder.achievementL1}</p>
                                        <p className="text-gray-600">{founder.achievementL2}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
