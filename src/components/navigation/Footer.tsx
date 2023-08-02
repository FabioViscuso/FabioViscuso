"use client"

import {usePathname} from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/board" || pathname === "/new-postit"
          ? "bg-notebook "
          : " text-gray-100 "
      } relative z-10 flex flex-col items-center pb-10 pt-28 px-4 bg-dark text-center text-gray-950 `}
    >
      <p>
        Made with 💚 by Fabio Viscuso with Next.js. Take a look at the project&apos;s
        code &nbsp;
        <a
          className="inline-block font-bold underline hover:scale-[1.1] hover:mx-2 transition-all whitespace-nowrap"
          href="https://github.com/FabioViscuso/FabioViscuso"
        >
          in this repo
        </a>
        !
      </p>
      <p className="mt-1">🚧 This is a WIP project, stay tuned! 🚧</p>
    </div>
  );
}
