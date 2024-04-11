
import React from 'react';
import ContactForm from './ContactForm';
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="mt-36 mx-auto max-w-5xl">
            <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-lg shadow-lg">
                <div className="px-6">

                    <div className="lg:flex lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                                Contact us for <br /> more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">

                                    <MapPin className=' text-green-800' />
                                    <span className="mx-2 text-gray-700 truncate w-82 dark:text-gray-400">
                                        Bangalore, India
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <Phone className=' text-green-800' />
                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+91 9971677857</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <Mail className='text-green-800' />
                                    <span className="mx-2 text-gray-700 dark:text-gray-400">appydam@gmail.com</span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5">
                                    <Twitter color="#000000" className=' mr-4' />

                                    <Linkedin color="#000000" className=' mr-4' />

                                    <Instagram color="#000000" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>

                                <ContactForm />

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;






