"use client";

import { useEffect, useRef, useState } from "react";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
const paragraph = Raleway({ weight: "200", subsets: ["latin"] });

export default function Template({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  /* Touch handlers */
  let touchStartX: any = useRef(null);
  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].pageX;
  };
  const handleTouchMove = (event: React.TouchEvent) => {
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

  /* Observer code */
  const observerOptions = {
    root: null,
    threshold: 0.3,
  };
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const light = document.querySelector("#light-point")! as HTMLElement;
        const sectionId = entry.target.getAttribute('data-auracolor');
        const colorValue = `#${sectionId}`;
        light.style.boxShadow = `0px 0px 400px 150px ${colorValue}`;
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      setTimeout(() => {
        cursor.style.transform = `translate(${e.clientX - 8}px, ${
          e.clientY - 8
        }px)`;
        
      }, 10);
    });

    document.addEventListener("mousemove", (e) => {
      const shadow = document.querySelector("#light-point") as HTMLElement;
      setTimeout(() => {
        shadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }, 10);
    });

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionElements = document.querySelectorAll("section");

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [observerOptions]);

  return (
    <>
      <Navbar isOpen={isSidebarOpen} />
      <div
        id="light-point"
        className=" rounded-full fixed z-0 will-change-transform transition-shadow duration-1000 "
      ></div>
      <ul className="bg-icons">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <main
        className={` ${paragraph.className} relative z-10 lg:h-[100dvh] lg:overflow-y-auto lg:snap-y lg:snap-mandatory flex flex-col items-center text-center lg:text-left `}
        ref={touchStartX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {children}
      </main>
    </>
  );
}
