"use client";
import { FiLogOut } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import {
  ArrowTopRightOnSquareIcon,
  MoonIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="h-screen p-2 hidden md:flex md:flex-col w-[250px] bg-black/90">
      {/* NewChat */}
      <NewChat />
      {/* Map through the chat rows */}
      <div className=" flex-1"></div>
      <div className=" my-3 border-t border-gray-600">
        <div className="sideBarButton">
          <TrashIcon className="h-5 w-5 mr-2" />
          Clear Conversations
        </div>
        <div className="sideBarButton">
          <MoonIcon className="h-5 w-5 mr-2" />
          Dark Mode
        </div>
        <div className="sideBarButton">
          <FaDiscord className="h-5 w-5 mr-2" />
          OpenAI Discord
        </div>
        <div className="sideBarButton">
          <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
          Updates and FAQ
        </div>
        <div onClick={() => signOut()} className="sideBarButton">
          <FiLogOut className="h-5 w-5 mr-2" />
          Log Out
        </div>
      </div>
    </div>
  );
}

export default SideBar;
