import { Link } from "react-router-dom";
import { useState } from "react"; 
import { CgProfile } from "react-icons/cg";
import werty from "../../assets/to.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavBar() {
  const [loggedIn] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center   px-4 py-1  text-black">
      <div className="text-lg font-extrabold ">
        <div className="w-[160px]  flex-col justify-start items-start gap-2 inline-flex">
          <div className="w-[216px] text-gray-900 text-base font-extrabold font-['Roboto'] leading-9">
            Hello, MPANO
          </div>
          <div className=" text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal">
            26th March 2024
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mr-20 ">
        <div>
          {loggedIn ? (
            <Link
              to="/user_profile"
              className="flex items-center gap-10 text-white"
            >
              <CgProfile className="w-10 h-10 rounded-full object-cover transition-transform duration-500 transform hover:scale-110" />{" "}
              <p className="mb-0 text-xs">My Profile</p>
            </Link>
          ) : (
            <div className="relative flex items-center gap-4 text-black">
              <IoMdNotificationsOutline />
              <Link to="/login" className="flex items-center gap-10 text-black">
                <img
                  src={werty}
                  className="w-8 h-8 rounded-full object-cover transition-transform duration-500 transform hover:scale-110"
                  alt="Profile Picture"
                />
                <p className="-ml-6 ">
                  <div className=""> MPANO NZIZA Toussant</div>

                  
                  <div className="text-neutral-400 flex gap-20 text-xs font-normal font-['Roboto'] leading-normal">
                    FARMER
                    <RiArrowDropDownLine className="w-5 h-5" />
                  </div>
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
