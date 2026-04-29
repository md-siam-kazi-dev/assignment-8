"use client";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import React from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ST } from "next/dist/shared/lib/utils";

const NavBar = () => {
  const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
  return (
    <nav>
    
        <motion.header
      className="navbar header bg-base-100 px-3 md:px-5 xl:px-10 flex justify-between shadow-sm"

      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex ">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>My Profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="">
            <DiaTextReveal
              className="text-4xl font-bold tracking-tight"
              text="SkillSphere"
              colors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            />
          </div>
        </div>
      </div>

      <div className="center hidden lg:flex  justify-between gap-4">
        <a className="font-semibold hover:text-red-400 transition-colors">
          Home
        </a>
        <a className="font-semibold hover:text-red-400 transition-colors">
          Courses
        </a>
        <a className="font-semibold hover:text-red-400 transition-colors">
          My Profile
        </a>
      </div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Search courses"
          className="input hidden lg:block border outline-none input-bordered w-24 md:w-auto"
        />

        <div className="login-signin">
          <button className="btn border-none hover:bg-transparent shadow-none">
            Log In
          </button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
        {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
      </div>
    </motion.header>
    <StyleSheet />
    </nav>
   
    
  );
};




/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
            #example {
                height: auto;
                overflow: visible;
            }

            .header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                
                
                
                z-index: 100;
                backdrop-filter: blur(12px);
            }

            .header-content {
                max-width: 900px;
                margin: 0 auto;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 24px;
            }

            .logo {
                display: flex;
                align-items: center;
                color: #f5f5f5;
            }

            .logo-icon {
                height: 18px;
                width: auto;
            }

            nav {
                display: flex;
                gap: 32px;
            }

            nav a {
                color: #f5f5f5;
                text-decoration: none;
                font-size: 14px;
                opacity: 0.6;
                transition: opacity 0.2s;
            }

            nav a:hover {
                opacity: 1;
            }

            

           

            

            @media (max-width: 600px) {
                nav {
                    gap: 20px;
                }

                nav a {
                    font-size: 13px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .header {
                    transition: none;
                }
            }
        `}</style>
    )
}
export default NavBar;
