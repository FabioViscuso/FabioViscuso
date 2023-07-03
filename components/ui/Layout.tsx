import Head from "next/head";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import { useEffect } from "react";
import Aos from "aos";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
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
      <div className="h-full flex flex-col justify-between">
        <Navbar />
        <div className="custom-cursor invisible md:visible"></div>
        <>{children}</>
        <Footer />
      </div>
    </>
  );
}
