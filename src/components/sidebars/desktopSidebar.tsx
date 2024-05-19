"use client";
import {
  MdDashboard,
  MdOutlinePayment,
  MdManageHistory,
  MdOutlineAddHome,
} from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsArrowLeftRight, BsReceipt } from "react-icons/bs";
import { useState } from "react";

import { TiMessages } from "react-icons/ti";
import NavLink from "./Links";
import HomeIcon from "../icons/HomeIcon";
import DateIcon from "../icons/DateIcon";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import BoxIcon from "../icons/BoxIcon";
import Charge from "../icons/Charge";
import Details from "../icons/Details";
import AnalyticsIcon from "../icons/AnalyticsIcon";
import GroupIcon from "../icons/GroupIcon";
import SettingsIcon from "../icons/SettingsIcon";
import HelpIcon from "../icons/HelpIcon";
import ToolIcon from "../icons/ToolIcon";
import LogoIcon from "../icons/LogoIcon";

const DesktopSidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${
        show
          ? "w-[100px] bg-blue text-white"
          : "w-[100px] bg-blue text-white"
      }  flex items-center border-r border-gray-100  sticky top-0 z-20 justify-center  transition-all ease-linear duration-[200ms]  max-md:w-[70px] h-screen   `}
    >
      <div
        className={`${
          show ? "w-[90%]" : "w-[60%] "
        } h-[95%] flex items-center flex-col`}
      >
        {/* logo and name */}

        <div className="flex items-center gap-3  pb-8 ">
          {/* circle over text */}
          <div
            className={`p-1 items-center ${
              show ? "" : " w-[20px] flex justify-center "
            } `}
          >
            {/* <div className="py-[1px] px-[6px] border border-white text-white  text-xl  rounded-full">
              M
            </div> */}
              <NavLink
              text={''}
              icon={LogoIcon}
              route=""
              style={show ? "xl  font-semibold" : "xl"}
            />
          </div>
        </div>

        {/* navigation */}
        <div className="flex flex-col  justify-between h-full  ">
          {/* first nav */}
          {/* <div className=""> */}
          <div
            className={`flex flex-col gap-6 mt-[30px] ${
              show ? "items-center" : "items-center  text-xl "
            } transition-all ease-in duration-200`}
          >
            <NavLink
              text={''}
              icon={HomeIcon}
              route=""
              style={show ? "xl  font-semibold" : "xl"}
            />
            <NavLink
              text={''}
              icon={DateIcon}
              route="wards"
              style={show ? "xl  font-semibold " : " xl"}
            />
            <NavLink
              text={''}
              icon={CartIcon}
              route="payment"
              style={show ? "xl  font-semibold " : " xl"}
            />

            <NavLink
              text={''}
              icon={UserIcon}
              route="message"
              style={show ? "xl  font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={BoxIcon}
              route="bills"
              style={show ? "xl font-semibold " : " xl"}
            />
            <NavLink
              text={''}
              icon={Charge}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={Details}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={AnalyticsIcon}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={GroupIcon}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={ToolIcon}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
          </div>

          <div
            className={`flex flex-col gap-3 ${
              show ? "items-start" : "items-center  text-xl "
            } transition-all ease-in duration-200`}
          >
            <NavLink
              text={''}
              icon={SettingsIcon}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
            <NavLink
              text={''}
              icon={HelpIcon}
              route="history"
              style={show ? "xl font-semibold  " : " xl"}
            />
          </div>
          {/* </div> */}

          {/* toggle */}
          
        </div>
        {/* <div
            className="p-2 z-10 cursor-pointer  text-lg shadow-md bg-blue   rounded-full text-blue-700 absolute top-[5.5rem] -right-5"
            onClick={() => setShow(!show)}
          >
            <BsArrowLeftRight />
          </div> */}
      </div>
    </div>
  );
};

export default DesktopSidebar;
