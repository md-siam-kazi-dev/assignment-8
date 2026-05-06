'use client'

import { signIn, useSession } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";





export default function SkillsphereLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const {data} = useSession();
    const user = data?.user;
    if(user){
      redirect('/');
    }

  const singInFunc =async (e) => {
    e.preventDefault();
    const { data, error } = await signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
  });

    if(error){
      toast.error(error.message);
    }else{
      toast.success('Login Successfull')
    }
  }



  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 font-mono">
     
     
     
    


      <div className="w-full max-w-sm z-10">
        <div className="bg-white border  rounded-lg p-6 shadow-xl ">
          <h2 className=" text-lg font-semibold mb-5 text-center">
            Sign in to your account
          </h2>


          <button onClick={ async() => {
                     const data = await signIn.social({
                     provider: "google",
            });
                    }} 
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-[#30363d] hover:border-[#8b949e] text-sm font-medium py-2.5 px-4 rounded-md transition-all duration-150 mb-5 group"
          >
            
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-[#30363d]" />
            <span className=" text-xs">or sign in with email</span>
            <div className="flex-1 h-px bg-[#30363d]" />
          </div>

   
          <form onSubmit={singInFunc} className="space-y-4">
     
            <div>
              <label className="block  text-sm font-medium mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full  border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]  placeholder-[#484f58] text-sm rounded-md px-3 py-2 transition-all duration-150"
              />
            </div>


            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className=" text-sm font-medium">Password</label>
                <a href="#" className="text-[#58a6ff] text-xs hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full  border border-[#30363d] focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]  placeholder-[#484f58] text-sm rounded-md px-3 py-2 pr-10 transition-all duration-150"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b949e] transition-colors"
                >
                  {showPass ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#238636] hover:bg-[#2ea043] disabled:opacity-60 text-white text-sm font-semibold py-2.5 px-4 rounded-md transition-all duration-150 flex items-center justify-center gap-2 mt-1"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>


        <div className="mt-4 text-center border border-[#30363d] rounded-lg py-3.5 bg-[#161b22]">
          <span className="text-[#8b949e] text-sm">New to Skillsphere? </span>
          <a href="/signup" className="text-[#58a6ff] text-sm hover:underline font-medium">
            Create an account
          </a>
        </div>


        <p className="text-center text-[#484f58] text-xs mt-6">
          © 2026 Skillsphere, Inc. &nbsp;·&nbsp;
          <a href="#" className="hover:text-[#8b949e] transition-colors">Terms</a>
          &nbsp;·&nbsp;
          <a href="#" className="hover:text-[#8b949e] transition-colors">Privacy</a>
          &nbsp;·&nbsp;
          <a href="#" className="hover:text-[#8b949e] transition-colors">Security</a>
        </p>
      </div>
    </div>
  );
}