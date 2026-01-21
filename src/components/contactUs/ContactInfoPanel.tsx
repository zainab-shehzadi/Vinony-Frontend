import React from "react";
import type { ContactInfo } from "@/types/contact";

type Props = {
  info: ContactInfo;
  ballsImageSrc: string;
};

export default function ContactInfoPanel({ info, ballsImageSrc }: Props) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl">
      {/* background */}
      <div className="absolute inset-0 btn-gradient" />

      {/* ✅ balls in corner (responsive sizing) */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[55%] sm:w-[45%] lg:w-[35%]">
        <img
          src={ballsImageSrc}
          alt=""
          className="h-auto w-full object-contain object-right-bottom opacity-60"
          draggable={false}
        />
      </div>

      {/* content */}
      <div className="relative p-6 sm:p-10 lg:p-14 text-white">
        <h2 className="text-xl font-semibold sm:text-2xl lg:text-4xl text-white">
          Contact Information
        </h2>

        <p className="mt-2 text-sm text-[#C9C9C9] sm:text-base lg:mt-3 lg:text-xl">
          We&apos;re here to help—send us a message.
        </p>

        {/* ✅ spacing responsive + add right padding so balls don't overlap text */}
        <div className="mt-8 space-y-6 pr-0 sm:mt-10 sm:space-y-8 lg:mt-24 lg:space-y-12 lg:pr-10">
          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img src="/phone.svg" alt="Phone" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.phone}
            </span>
          </div>

          <div className="flex items-start gap-3 sm:items-center sm:gap-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img src="/email.svg" alt="Email" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.email}
            </span>
          </div>

          <div className="flex items-start gap-3 pb-2 sm:items-center sm:gap-4 sm:pb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
              <img
                src="/location.svg"
                alt="Location"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </span>
            <span className="text-sm sm:text-base lg:text-lg break-words">
              {info.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
