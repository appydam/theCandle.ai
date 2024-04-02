import React from "react";
import BannerComponent from "./ui/BannerComponent";
import { layoutPageData } from "@/staticdata/LandingPageData";

export default function MainComponent() {
  return (
    <>
      <div className="flex justify-center text-5xl my-8 text-blue-500">
        Welcome to theCandle.ai
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-8">
        {layoutPageData.map((item) => (
          <BannerComponent
            key={item.id}
            heading={item.heading}
            content={item.content}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
}
