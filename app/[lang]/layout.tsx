"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

import "../../styles/global.css";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";

interface Props {
  children: JSX.Element | JSX.Element[];
  params: { lang: string };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({ children, params: { lang } }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let touchStartX: any = useRef(null);

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].pageX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    let distX = event.touches[0].pageX - touchStartX.current;

    if (Math.abs(distX) > 60) {
      if (distX < 0 && !isSidebarOpen) {
        // Swipe left
        setIsSidebarOpen(true);
      } else if (distX > 0 && isSidebarOpen) {
        setIsSidebarOpen(false);
        // Swipe right
      }
    }
  };

  useEffect(() => {
    /*  
        This resets the document color to the default, otherwise
        it would carry the latest one from the latest homepage section
    */
    const html = document.querySelector("html")!;
    html.style.backgroundColor = "#eeeeee";

    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor.style.transform = `translate(${e.clientX - 8}px, ${
        e.clientY - 8
      }px)`;
    });
  });

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Hello! That's me!"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Hello! That's me!" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        ref={touchStartX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="custom-cursor invisible md:visible"></div>
        <Navbar currLang={lang} isOpen={isSidebarOpen} />
        {children}
        <Footer currLang={lang} />
      </body>
    </html>
  );
}
