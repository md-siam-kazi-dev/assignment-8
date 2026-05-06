"use client";
import React from "react";

const tips = {
  learning: [
    {
      title: "Active Learning",
      desc: "Practice coding, solve problems, and build projects instead of just watching tutorials.",
    },
    {
      title: "Break Topics Down",
      desc: "Divide complex topics into small parts and master them step by step.",
    },
    {
      title: "Consistency",
      desc: "Study daily even if it's just 1–2 hours. Consistency beats intensity.",
    },
    {
      title: "Teach Others",
      desc: "Explaining concepts helps you understand them deeply.",
    },
  ],
  time: [
    {
      title: "Set Clear Goals",
      desc: "Define what you want to achieve each day before starting.",
    },
    {
      title: "Pomodoro Technique",
      desc: "Study 25 minutes, take a 5-minute break to stay focused.",
    },
    {
      title: "Avoid Multitasking",
      desc: "Focus on one task at a time for better productivity.",
    },
    {
      title: "Track Your Time",
      desc: "Analyze where your time goes and eliminate distractions.",
    },
  ],
};

export default function TipsSection() {
  return (
    <section className="py-16 container-div px-6  text-center text-black">
      <h2 className="section-heading text-center  mb-20">
         Learning & Time Management Tips
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
       
        <div>
          <h3 className="text-2xl font-semibold mb-6 ">
             Learning Tips
          </h3>
          <div className="space-y-4">
            {tips.learning.map((tip, index) => (
              <div
                key={index}
                className="p-4  rounded-2xl shadow"
              >
                <h4 className="font-semibold text-lg">{tip.title}</h4>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-2xl font-semibold mb-6 ">
          Time Management Tips
          </h3>
          <div className="space-y-4">
            {tips.time.map((tip, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl shadow "
              >
                <h4 className="font-semibold text-lg">{tip.title}</h4>
                <p className="text-gray-400 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}