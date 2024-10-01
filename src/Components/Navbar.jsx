import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { LiaBlogSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Navbar = ({ bgcolor, darkmode }) => {
  return (
    <nav className={`w-full ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-primary`} p-5 flex justify-center`}>
      <div className="flex items-center gap-5">
        <NavLink to="/">
          <div
            className={`flex flex-col justify-center items-center p-2 rounded-lg ${bgcolor === "white" ? "bg-slate-100" : "bg-gray-800"}`}
            style={{ color: `${bgcolor === "white" ? "black" : "#A6A6A6"}` }}
          >
            <FaRegUser className="text-2xl" />
            <h1 className="text-sm">About</h1>
          </div>
        </NavLink>
{/* 
        <NavLink to="/Resume">
          <div
            className={`flex flex-col justify-center items-center p-2 rounded-lg ${bgcolor === "white" ? "bg-slate-100" : "bg-gray-800"}`}
            style={{ color: `${bgcolor === "white" ? "black" : "#A6A6A6"}` }}
          >
            <PiNotepad className="text-2xl" />
            <h1 className="text-sm">Resume</h1>
          </div>
        </NavLink> */}

        <NavLink to="/Projects">
          <div
            className={`flex flex-col justify-center items-center p-2 rounded-lg ${bgcolor === "white" ? "bg-slate-100" : "bg-gray-800"}`}
            style={{ color: `${bgcolor === "white" ? "black" : "#A6A6A6"}` }}
          >
            <FaLaptopCode className="text-2xl" />
            <h1 className="text-sm">Projects</h1>
          </div>
        </NavLink>

        <NavLink to="/Certify">
          <div
            className={`flex flex-col justify-center items-center p-2 rounded-lg ${bgcolor === "white" ? "bg-slate-100" : "bg-gray-800"}`}
            style={{ color: `${bgcolor === "white" ? "black" : "#A6A6A6"}` }}
          >
            <AiOutlineSafetyCertificate className="text-2xl" />
            <h1 className="text-sm p-1">Skills</h1>
          </div>
        </NavLink>

        <NavLink to="/Contact">
          <div
            className={`flex flex-col justify-center items-center p-2 rounded-lg ${bgcolor === "white" ? "bg-slate-100" : "bg-gray-800"}`}
            style={{ color: `${bgcolor === "white" ? "black" : "#A6A6A6"}` }}
          >
            <TiContacts className="text-2xl" />
            <h1 className="text-sm">Contacts</h1>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
