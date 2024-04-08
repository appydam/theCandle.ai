// WaitlistModal.tsx

import React, { useState } from 'react';

interface WaitlistModalProps {
    onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can save the email and phone number data or perform any other action
        // For example, you can save the data to a state variable in your page component
        // You can also close the modal after submitting the form
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        onClose();
    };

    return (
        <div className="absolute flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-xl w-[500px]">
                <div className="flex justify-between items-center mb-4">

                    <div className="flex flex-col items-center justify-center ml-[20%]">
                        <h2 className="text-6xl font-bold">Join the</h2>
                        <h2 className="text-6xl font-bold">Waitlist !</h2>
                    </div>
                    <button onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 transition duration-300 bg-slate-400 rounded-full text-white p-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="mb-4 text-base px-6">We need your email and mobile number to sign you up for the waitlist</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <button
                        type="submit"
                        className="w-full bg-slate-400 text-white rounded-lg px-4 py-2"
                    >
                        Join Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WaitlistModal;
