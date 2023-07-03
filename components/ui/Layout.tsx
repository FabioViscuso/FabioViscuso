import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Aos from "aos";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  const touchStartX = useRef(null);
  // Variables to track touch positions
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSwipeGesture = (event) => {
    const distX = event.changedTouches[0].pageX - touchStartX.current;

    if (Math.abs(distX) > 50) {
      // Swipe is horizontal
      if (distX < 0) {
        // Swipe left
        setIsSidebarOpen(true);
      } else {
        // Swipe right
        setIsSidebarOpen(false);
      }
    }
  };

  useEffect(() => {
    Aos.refresh();

    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            "Hello! That's me!"
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Hello! That's me!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div
        ref={touchStartX}
        className="h-full flex flex-col justify-between"
        onTouchStart={(event) => {
          event.preventDefault();
          event.stopPropagation();
          touchStartX.current = event.touches[0].pageX
        }}
        onTouchEnd={handleSwipeGesture}
      >
        <Navbar isOpen={isSidebarOpen} />
        <div className="custom-cursor invisible md:visible"></div>
        <>{children}</>
        <Footer />
      </div>
    </>
  );
}
