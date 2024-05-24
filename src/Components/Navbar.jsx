import { useState } from "react";
import Logo from "../assets/logo.svg";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className=" bg-[#F8FAF7] py-2 sticky z-50 top-0 transition-all duration-300 ease-in-out">
      <div className="  max-w-5xl mx-auto 2xl:max-w-full 2xl:mx-40">
        <div className="grid mx-[10px] md:mx-0 md:flex justify-between items-center">
          <div className="w-[150px] md:w-[200px] mt-5 md:mt-0">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div
            className={`md:flex md:items-center text-[#252657] font-[400] ${
              !open ? "block" : "hidden"
            }`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[14px]  ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]   text-[#252657] font-[400] "
                    : isActive
                    ? "text-[14px]   text-[#14142e] font-[400] "
                    : ""
                }
              >
                <li>How it works</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]   text-[#252657] font-[400] "
                    : isActive
                    ? "text-[14px]   text-[#14142e] font-[400] "
                    : ""
                }
              >
                <li>Taxapp for</li>
              </NavLink>
              <NavLink
                to="/properties"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]   text-[#252657] font-[400] "
                    : isActive
                    ? "text-[14px]   text-[#14142e] font-[400]  "
                    : ""
                }
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to="/agents"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  text-[#252657] font-[400]  "
                    : isActive
                    ? " text-[14px]  text-[#14142e] font-[400]  "
                    : ""
                }
              >
                <li>Resources</li>
              </NavLink>
            </ul>
          </div>
          {open === true ? (
            <div
              className="absolute top-8 right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(false)}
            >
              <Menu1LineIcon className="text-[#252657]" />
            </div>
          ) : (
            <div
              className="absolute  top-8 right-4 md:hidden cursor-pointer text-white"
              onClick={() => setopen(true)}
            >
              <CloseLineIcon className="text-[#252657]" />
            </div>
          )}
          <div
            className={`md:flex md:items-center ${!open ? "block" : "hidden"}`}
          >
            <ul className="grid md:flex gap-5 my-5 md:gap-10 list-none text-[18px] font-[500]   ">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px] lg:text-[18px]    text-[#252657]"
                    : isActive
                    ? "text-[14px] lg:text-[18px]   text-[#252657]"
                    : ""
                }
              >
                <li className=" font-[500] md:px-3 md:py-2 text-[#252657]">
                  Log in
                </li>
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-[14px]  "
                    : isActive
                    ? "text-[14px]   font-[400]"
                    : ""
                }
              >
                <li className=" text-white rounded-[50px]  bg-[#2EAB8D] px-[24px] py-[10px]">
                  Get started
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
