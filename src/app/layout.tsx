import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import DesktopSidebar from "@/components/sidebars/desktopSidebar";
import NotificationIcon from "@/components/icons/NotificationIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";

import Image from "next/image";




const Albert = Albert_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Albert.className}>
        <div className="max-h-full flex  ">
          <DesktopSidebar />
           {/* <TabletSidebar /> */}
      

          <div className="w-full">
            <div className="w-full   px-5 mt-4 pb-2 md:px-8  ">
              <div className="flex h-[90px]  justify-between items-center pb-2 ">
                <p className="font-semibold text-xl max-md:text-base">Marketing</p>
                <div className="flex  gap-2 items-center">
                  <NotificationIcon/>
                  <div className="ml-4 text-end">
                    <p className="font-semibold decoration-black">Dafe Smith</p>
                    <p className="text-grey text-xs">Cleaner</p>
                  </div>
                 
                 
                  <Image src="/images/pp.png" alt="profile" 
                    width={70}
                    height={70} className="max-sm:w-[50px] max-sm:h-[50px]"/>

                </div>

              </div>
              <hr style={{color:"#C7D0FF"}}/>
            </div>
            <div className={`px-5 mt-6 pb-14 md:px-8 `}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
