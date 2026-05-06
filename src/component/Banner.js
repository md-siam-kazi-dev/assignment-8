'use client';

import { AuroraText } from "@/components/ui/aurora-text";
import { Backlight } from "@/components/ui/backlight";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { WordRotate } from "@/components/ui/word-rotate";
import { signIn, useSession } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Lottie from "lottie-react";
import Link from "next/link";

const websuiteHeadlines = [
  "Build Modern Websites from Scratch 🌐",
  "Master Full-Stack Web Development",
  "Create Fast & Responsive Web Apps ⚡",
  "Turn Ideas into Real Websites",
  "Learn HTML, CSS, JavaScript & Beyond",
  "Launch Your Web Development Career 🚀"
];

const Banner = () => {
  const {data,isPending} = useSession();
  console.log(data)
  const user = data?.user;
  return (
    <div
      className="flex justify-between container-div relative mx-auto  flex-col mt-40 lg:flex-row items-center"
      
    >
        
      {/* LEFT SIDE */}
      <div className="text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="text-5xl flex flex-col font-bold tracking-tighter md:text-6xl lg:text-7xl">
          SkillSphere

          <AuroraText className="text-3xl md:text-3xl lg:text-4xl tracking-normal">
            <TypingAnimation showCursor={true}>
              Online Learning Platform
            </TypingAnimation>
          </AuroraText>
          <WordRotate
      className="text-xl font-semibold tracking-normal text-black dark:text-white"
      words={websuiteHeadlines}
    />
        </h1>
      </div>

      {/* RIGHT SIDE */}
     {!user?(!isPending?  <Backlight  blur={60}  className="border mt-10 lg:mt-0 bg-white/10 backdrop-blur-sm rounded-2xl text-center border-gray-300 p-10">
        <h2 className="font-extrabold text-2xl md:text-3xl mb-4">
          Get 7 Days Free Trials
        </h2>

        <div className="flex flex-col gap-2">
         <Link href='/login' className="btn border-1 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Continue with Email
</Link>

          <button onClick={async() => {
           const data = await signIn.social({
           provider: "google",
  });
          }} className="btn border-1 bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>
        </div>

        <div className="mt-2 ">
            <p className="text-xs text-gray-500 leading-relaxed max-w-md text-center mx-auto">
  By signing up you agree to SkillSphere's{" "}
  <span className="text-blue-500 underline cursor-pointer">Terms of Service</span>
  {" "}and{" "}
  <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>
  , and agree to receive marketing communications...
</p>
        </div>
      </Backlight>:<></>):<div>
         <DotLottieReact src='/Developer.lottie' loop autoplay className="md:w-[500px] lg:w-[600px]"></DotLottieReact>
        </div>}
    </div>
  );
};

export default Banner;