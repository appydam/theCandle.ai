import Contact from '@/components/ContactPage';
import Navbar from '@/components/Navbar';
import React from 'react'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute w-screen min-h-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),
          linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <Navbar />
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_5px),linear-gradient(to_bottom,#8080800a_1px,transparent_5px)] bg-[size:14px_24px]">
          <Contact />
        </div>
      </div>
    </div>



  );
}

export default ContactPage