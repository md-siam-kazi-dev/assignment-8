'use client';

import Image from "next/image";
import { cn } from "@/lib/utils"; // make sure this exists
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { Pointer } from "@/components/ui/pointer";

const review  = [
  {
    name: "Ayan Rahman",
    username: "@ayan",
    body: "This platform made complex topics like data structures so easy to understand. .",
    img: "https://avatar.vercel.sh/ayan",
  },
  {
    name: "Nusrat Jahan",
    username: "@nusrat",
    body: "I love the structured courses. Everything is step-by-step and beginner friendly. .",
    img: "https://avatar.vercel.sh/nusrat",
  },
  {
    name: "Rakib Hasan",
    username: "@rakib",
    body: "The problem-solving section is amazing. It pushed me to think logically.",
    img: "https://avatar.vercel.sh/rakib",
  },
  {
    name: "Sadia Islam",
    username: "@sadia",
    body: "I finally understand algorithms! The explanations are simple but powerful. ",
    img: "https://avatar.vercel.sh/sadia",
  },
  {
    name: "Mehedi Hasan",
    username: "@mehedi",
    body: "Great platform for learning app development. The real-world examples make everything practical.",
    img: "https://avatar.vercel.sh/mehedi",
  },
  {
    name: "Tanvir Ahmed",
    username: "@tanvir",
    body: "Clean UI, fast loading, and very helpful content. I enjoy learning here every day.",
    img: "https://avatar.vercel.sh/tanvir",
  },
  {
    name: "Farhana Akter",
    username: "@farhana",
    body: "The courses are well organized and easy to follow. I improved my coding skills within weeks.",
    img: "https://avatar.vercel.sh/farhana",
  },
  {
    name: "Imran Hossain",
    username: "@imran",
    body: "Best platform for beginners. Concepts are explained in a very simple way with great examples.",
    img: "https://avatar.vercel.sh/imran",
  },
  {
    name: "Sharmin Sultana",
    username: "@sharmin",
    body: "I love the interactive learning style. It keeps me engaged and motivated to learn more.",
    img: "https://avatar.vercel.sh/sharmin",
  },
  {
    name: "Arif Chowdhury",
    username: "@arif",
    body: "This platform helped me prepare for coding interviews. The practice problems are very useful.",
    img: "https://avatar.vercel.sh/arif",
  },
];



function ReviewCard({ img, name, username, body }) {
  return (
    <div
      className={cn(
        "relative h-full w-auto overflow-hidden h-35 mr-2 ml-2 rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]  dark:hover:bg-gray-50/[.15]"
      )}
    >
      
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
     <p className="mt-3 text-sm max-w-xs whitespace-normal break-words">
  {body}
</p>

    </div>
  );
}

export default function ScrollBasedVelocityReviewDemo() {
  return (
    <div className="relative mt-20  flex w-full flex-col items-center justify-center overflow-hidden py-8">

      <h1 className="section-heading mb-10 ">Our Learners Review</h1>
      
      <ScrollVelocityContainer className="w-full">
        <Pointer className="absolute z-40">
          <div className="text-2xl ">👆</div>
        </Pointer>

        {/* Row A */}
        <ScrollVelocityRow baseVelocity={1} direction={1} className="py-4">
          {review.map((item, idx) => (
            <ReviewCard key={idx} {...item} />
          ))}
        </ScrollVelocityRow>

        {/* Row B */}
        <ScrollVelocityRow baseVelocity={2} direction={-1} className="py-4 flex gap-2">
          {review.map((item, idx) => (
            <ReviewCard key={idx} {...item} />
          ))}
        </ScrollVelocityRow>

      </ScrollVelocityContainer>

      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}