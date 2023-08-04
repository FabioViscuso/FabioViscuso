"use client"

import Image from "next/image"
import icons from "../ui/IconImport"
import onCopyHandler from "@/lib/useCopyHandler"

export default function ContactsContainer() {
    return (
        <ul
        className="flex flex-col items-center gap-10 flex-wrap flex-1"
        data-aos="fade-left"
      >
        {/* Github button */}
        <li className="flex items-center">
          <a
            href="https://github.com/FabioViscuso"
            className="inline-block hover:scale-110 transition-transform"
            target="_blank"
          >
            <Image
              src={icons.github}
              width={60}
              height={60}
              alt={"github link"}
              className=""
            ></Image>
          </a>
        </li>
        {/* LinkedIn button */}
        <li className="flex items-center">
          <a
            href="https://www.linkedin.com/in/fabiocarmelomariaviscuso/"
            className="  inline-block hover:scale-110 transition-transform"
            target="_blank"
          >
            <Image
              src={icons.linkedin}
              width={60}
              height={60}
              alt={"linkedin link"}
              className="[filter:brightness(0)]"
            ></Image>
          </a>
        </li>
        {/* email */}
        <li className="relative z-20 flex flex-col sm:flex-row items-center text-2xl">
          <p
            id="emailAddressPopup"
            className="pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg text-center z-0 transition-all bg-[#1c1c1c99] rounded-md p-1"
          >
            Copied!
          </p>
          <span
            onClick={onCopyHandler}
            id={"emailAddress"}
            className=" text-xl md:text-3xl hover:scale-110 transition-transform leading-none [text-shadow:0px_0px_6px_#888] "
          >
            viscuso.fabio@outlook.it
          </span>
        </li>
        {/* phone number */}
        <li className="relative z-20 flex flex-col sm:flex-row items-center text-2xl">
          <p
            id="phoneNumberPopup"
            className="pointer-events-none absolute invisible top-6 opacity-0 right-0 text-lg text-center z-0 transition-all bg-[#1c1c1c99] rounded-md p-1"
          >
            Copied!
          </p>
          <span
            onClick={onCopyHandler}
            id="phoneNumber"
            className=" text-xl md:text-3xl hover:scale-110 transition-transform leading-none [text-shadow:0px_0px_6px_#888] "
          >
            +39 351 996 6861
          </span>
        </li>
      </ul>
    )
}