import React from "react";

export default function BannerComponent({ heading, content, icon }:any) {
    return (
      <div className="bg-blue-500 text-white py-8 px-4 md:px-16">
        {/* Heading and Icon */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <div className="flex items-center">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v4.1h.1L16 5.7l1.3 1.3a1 1 0 111.4 1.4l-3 3a1 1 0 01-.7.3h-.1a1 1 0 01-.7-.3l-3-3a1 1 0 011.4-1.4l1.3 1.3 2.9-2.9V4a1 1 0 011-1zM8 13.6l-2-2V16a1 1 0 01-1 1H4a1 1 0 01-1-1v-6.4l-2 2a1 1 0 11-1.4-1.4l3-3a1 1 0 011.4 0l3 3a1 1 0 01-1.4 1.4zM9 3a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Content */}
        <p className="">{content}</p>
      </div>
    );
  }
  