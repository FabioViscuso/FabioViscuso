"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import { Raleway } from "next/font/google";
import Image from "next/image";
import icons from "@/components/ui/IconImport";
import SectionIndicator from "@/components/homepage/SectionIndicator";
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
  const observerOptions = useMemo(() => {
    return {
      root: null,
      threshold: 0.3,
    }
  }, []);
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const light = document.querySelector("#light-point")! as HTMLElement;
        const colorValue = entry.target.getAttribute("data-auracolor");
        light.style.boxShadow = `0px 0px 400px 150px #${colorValue}`;

        const sectionNumber = entry.target.getAttribute("data-section-number");
        const selectors = document.querySelectorAll(`#section-indicator li`);
        selectors.forEach(selector => {
          const current = selector as HTMLElement
          if (selector.getAttribute('data-indicator') === sectionNumber) {
            current.style.width = '1rem';
            current.style.height = '1rem';
          } else {
            current.style.width = '0.5rem';
            current.style.height = '0.5rem';
          }
        })
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor.style.transform = `translate(${e.clientX - 8}px, ${
        e.clientY - 8
      }px)`;
    });

    document.addEventListener("mousemove", (e) => {
      const shadow = document.querySelector("#light-point") as HTMLElement;
      shadow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
        <li><Image alt="" src={icons.gamepad} className="h-12 w-12" /></li>
        <li><Image alt="" src={icons.rocketBg} className="w-40 blur-sm" /></li>
        <li><Image alt="" src={icons.saturn} className="" /></li>
        <li><Image alt="" src={icons.terminal} className="" /></li>
        <li><Image alt="" src={icons.shapes} className="w-8" /></li>
        <li><Image alt="" src={icons.saturn} className="w-60" /></li>
        <li><Image alt="" src={icons.pencil} className="w-16" /></li>
        <li><Image alt="" src={icons.saturn} className="w-6" /></li>
        <li><Image alt="" src={icons.shapes} className="w-10" /></li>
        <li><Image alt="" src={icons.terminal} className="w-60" /></li>
      </ul>
      <main
        id="homepage"
        className={` ${paragraph.className} relative z-10 lg:h-[100svh] lg:overflow-y-auto lg:snap-y lg:snap-mandatory flex flex-col items-center text-center lg:text-left `}
        ref={touchStartX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SectionIndicator />
        {children}
      </main>
    </>
  );
}
