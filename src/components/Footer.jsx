import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { VscLocation } from "react-icons/vsc";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";

const Footer = () => {

  return (
    <div >
      <div className="relative">
        <svg
          className="absolute top-0 w-full -z-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 48"
        >
          <path
            stroke="#000000"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            d="M0,24 C200,0 400,0 600,24 C800,48 1000,48 1200,24 C1400,0 1600,0 1800,24 L1440,24"
          ></path>
        </svg>

        <div className="px-4 md:px-10 lg:px-20 py-20 flex lg:grid grid-cols-3 flex-col sm:flex-col">
          <div className="mx-auto flex flex-col items-center md:items-start w-full">
            <div className="home-logo w-full" />

            <div className="">
              <div className="flex">
                <img src="/images/logo.jpg" alt="Logo" className="w-[142px] h-[36.91px] " />
              </div>
            </div>
            <div className="mt-10 mb-5 ">
              <div className="mr-2 w-full">
                Design amazing digital experiences that create more happy in the world.
              </div>
            </div>
          </div>
          <div className="md:ml-16 grid grid-cols-3 leading-10">
            <div className="font-bold">
              <div className="px-4 block">
                Product
              </div>
              <NavLink to="/about" className="text-violet-600 px-4 block">
                Overview
              </NavLink>
              <NavLink to="/rules" className="text-violet-600 px-4 block">
                Features
              </NavLink>
              <NavLink to="/leagueplayer" className="text-violet-600 px-4 block">
                Solutions
              </NavLink>
              <NavLink to="/leagueinfo" className="text-violet-600 px-4 block">
                Tutorials
              </NavLink>
              <NavLink to="/leagueteam" className="text-violet-600 px-4 block">
                Pricing
              </NavLink>
              <NavLink to="/events" className="text-violet-600 px-4 block">
                Releases
              </NavLink>
            </div>
            <div className="font-bold">
              <div className="px-4 block">
                Resources
              </div>
              <NavLink to="/store" className="text-violet-600 px-4 block">
                Blog
              </NavLink>
              <NavLink to="/vlog" className="text-violet-600 px-4 block">
                Newsletter
              </NavLink>
              <NavLink to="/blog" className="text-violet-600 px-4 block">
                Events
              </NavLink>
              <NavLink to="/contact" className="whitespace-nowrap text-violet-600 px-4 block">
                Help center
              </NavLink>
              <NavLink to="/leagueinfo" className="text-violet-600 px-4 block">
                Tutorials
              </NavLink>
              <NavLink to="/leagueteam" className="text-violet-600 px-4 block">
                Support
              </NavLink>
            </div>
          </div>

          <div className="md:ml-4">
            <div className="mb-4 text-sm font-bold">
              Stay up to date
            </div>
            <div className="flex">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-violet-600 w-32 md:w-48"
                />
                <button className="flex items-center bg-violet-600 text-white py-2 px-4 ml-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-between  px-4 md:px-10 lg:px-20 py-20">
          <div className="mb-4 md:mb-0">
            <span className="underline mr-10 whitespace-nowrap">@2024 codestuk. All rights reserved.</span>
          </div>
          <div>
            <span className="underline mr-10">Terms</span>
            <span className="underline mr-10">Privacy</span>
            <span className="underline mr-2">Cookies</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
