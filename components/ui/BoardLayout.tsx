import Head from "next/head";
import { TouchEvent, useEffect, useRef, useState } from "react";
import Footer from "../navigation/Footer";
import Navbar from "../navigation/Navbar";
import Aos from "aos";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function BoardLayout ({children}: Props) {
  return (
    <>
      <div className=" text-gray-950">

        {children}
      </div>
    </>
  );
}
