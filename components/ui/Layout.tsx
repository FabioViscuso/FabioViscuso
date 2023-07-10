import Head from "next/head";
import { TouchEvent, useEffect, useRef, useState } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Aos from "aos";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
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
    Aos.refresh();

    /*  
        This resets the document color to the default, otherwise
        it would carry the latest one from the latest homepage section
    */
    const html = document.querySelector('html')!;
    html.style.backgroundColor = '#eeeeee';

    document.addEventListener("mousemove", (e) => {
      const cursor = document.querySelector(".custom-cursor") as HTMLElement;
      cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
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
      <Navbar isOpen={isSidebarOpen} />
      <div
        className="h-full flex flex-col justify-between"
        ref={touchStartX }
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="custom-cursor invisible md:visible"></div>
        {children}
        <Footer />
      </div>
    </>
  );
}
