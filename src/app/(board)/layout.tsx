import Footer from "@/components/navigation/Footer";
import "@/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabio Viscuso",
  description: "Board section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <div id="" className="custom-cursor invisible md:visible"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
