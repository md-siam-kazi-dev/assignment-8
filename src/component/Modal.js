'use client'
import { redirect } from "next/dist/server/api-utils";
import React from "react";

const Modal = () => {
    const Avatar = async (e) => {
        e.preventDefault();
        console.log('sh')
        redirect('#')
    }
  return (
    <>
      {/* <div class="modal" role="dialog" id="changeName">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Hello!</h3>
          
          <div class="modal-action">
            <a href="#" class="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
      <div class="modal" role="dialog" id="changeAvatar">
        <div class="modal-box">
          <h3 class="text-lg font-bold mb-3">Change Avatar</h3>
          
          <form onSubmit={Avatar}>
            <label className="input border validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="text"
                required
                placeholder="https://"
                
                
                title="Must be valid URL"
              />
            </label>
            <p className="validator-hint">Must be valid URL</p>
            <div className="modal-action">
      <label type="submit" htmlFor="changeAvatar" className="btn btn-primary">Change Avatar</label>
    </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Modal;
