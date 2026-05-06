"use client";

import { use, useState } from "react";
import { signupLogic } from "../../../signupLogic";
import { signIn, useSession } from "@/lib/auth-client";
import { useRouter } from "next/router";






export default function SkillsphereSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [img,setImg] = useState("")
  const {data} = useSession();
  const user = data?.user;
  const router = useRouter()
  if(user){
   router.push('/');
   return;
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (password !== confirmPass) {
      setError("Passwords do not match");
      return;
    }

    signupLogic({name,email,password,img})

   

   
    
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-mono">
      
     
      
      <div className="w-full max-w-sm z-10">
        
        
        <div className="bg-white border rounded-lg p-6 shadow-xl">
          
          <h2 className="text-lg font-semibold mb-5 text-center">
            Create your account
          </h2>

        
          <button onClick={ async() => {
                     const data = await signIn.social({
                     provider: "google",
            });
                    }} 
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-[#30363d] hover:border-[#8b949e] text-sm font-medium py-2.5 px-4 rounded-md transition mb-5"
          >
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-[#30363d]" />
            <span className="text-xs">or sign up with email</span>
            <div className="flex-1 h-px bg-[#30363d]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Doe"
                className="w-full  border border-[#30363d]   text-sm rounded-md px-3 py-2 "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full  border border-[#30363d] text-sm rounded-md px-3 py-2 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Your Image Link
              </label>
              <input
                type="url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
                placeholder="Your Image Link"
                className="w-full  border border-[#30363d] text-sm rounded-md px-3 py-2 "
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full  border border-[#30363d] text-sm rounded-md px-3 py-2 pr-10 "
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b949e]"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPass ? "text" : "password"}
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full  border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] text-sm rounded-md px-3 py-2 pr-10 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b949e]"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-xs">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#238636] hover:bg-[#2ea043] disabled:opacity-60 text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  </svg>
                  Creating account…
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
        </div>

        {/* Login link */}
        <div className="mt-4 text-center border border-[#30363d] rounded-lg py-3.5 bg-[#161b22]">
          <span className="text-[#8b949e] text-sm">
            Already have an account?
          </span>{" "}
          <a href="/login" className="text-[#58a6ff] text-sm hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}