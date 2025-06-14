import { useState } from "react";
import Logo from "../assets/logo.svg";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setopen] = useState(true);

  return (
    <div className="bg-[#F8FAF7] py-2 sticky z-50 top-0 transition-all duration-300 ease-in-out">
      <div className="max-w-5xl mx-auto 2xl:max-w-full 2xl:mx-40">
        <div className="grid mx-[10px] lg:mx-0 lg:flex justify-between items-center">
          <div className="w-[150px] lg:w-[200px] mt-5 lg:mt-0">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div
            className={`lg:flex lg:items-center text-[#252657] font-[400] ${
              !open ? "block" : "hidden"
            }`}
          >
            <ul className="grid lg:flex gap-5 my-5 lg:gap-10 list-none text-[14px]">
              {[
                { to: "/steps", label: "How it works" },
                { to: "/tailored", label: "Taxapp for" },
                { to: "/products", label: "Products" },
                { to: "/resources", label: "Resources" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-[16px] ${
                        isActive
                          ? "text-[#313272]  font-[500]"
                          : "text-[#898989]  font-[400]"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {open ? (
            <div
              className="absolute top-8 right-4 lg:hidden cursor-pointer"
              onClick={() => setopen(false)}
            >
              <Menu1LineIcon className="text-[#252657]" />
            </div>
          ) : (
            <div
              className="absolute top-8 right-4 lg:hidden cursor-pointer"
              onClick={() => setopen(true)}
            >
              <CloseLineIcon className="text-[#252657]" />
            </div>
          )}

          <div
            className={`lg:flex lg:items-center ${!open ? "block" : "hidden"}`}
          >
            <ul className="grid lg:flex gap-5 my-5 lg:gap-10 list-none text-[18px] font-[500]">
              <li>
                <Link
                  to="https://web.taxpoint.ng/"
                  target="_blank"
                  className="text-[14px] lg:text-[16px] text-[#252657] font-[500]"
                >
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="https://web.taxpoint.ng/"
                  target="_blank"
                  className="text-[14px] font-[400]"
                >
                  <span className="text-white rounded-[50px] bg-[#2EAB8D] px-[24px] py-[10px]">
                    Get started
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
