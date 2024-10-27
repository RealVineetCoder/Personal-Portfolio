import React from "react";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="z-50 fixed w-full mr-[10%]">
      <div className=" h-[70px] flex justify-center ">
        <ul className="flex justify-center rounded-full m-5 text-white items-center h-full gap-x-[100px] w-[800px] bg-[#55AD9B]">
          <li>
            <Link href={"#"} className="hover:text-[#]">Home</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-[#]">About Us</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-[#]">Work</Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-[#]">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
