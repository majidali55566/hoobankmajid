import React from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";

function NavBar() {
  return (
    <header>
      <div className="bg-transparent  mb-20 pr-[120px]">
        <div className="flex justify-between items-center pt-7">
          <div>
            <img src={logo} alt="" className="h-6" />
          </div>
          <div className="">
            <ul className="flex justify-around items-center gap-5">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a className="text-white text-opacity-70 hover:text-opacity-100">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
