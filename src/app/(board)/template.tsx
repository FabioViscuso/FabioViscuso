"use client";

import { useEffect, useRef, useState } from "react";
import { Indie_Flower } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
const paragraph = Indie_Flower({ weight: "400", subsets: ["latin"] });

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

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor.style.transform = `translate(${e.clientX - 8}px, ${
        e.clientY - 8
      }px)`;
    });

    return () => {
    };
  }, []);

  return (
    <>
      <Navbar isOpen={isSidebarOpen} />
      <main
        className={` ${paragraph.className} bg-notebook bg-dark `}
        ref={touchStartX}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {children}
      </main>
    </>
  );
}
