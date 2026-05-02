import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function CourseTimeline({course}) {
  const data = course.curriculum.map(c => {
    return (
        {
            title:c.title,
            content:c.lessons.map(les => {
                return (
                   <div className="card border-gray-300 rounded-2xl shadow mb-3 card-dash bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{les.title}</h2>
    <p>Duration: <span className="text-gray-400">{les.duration}</span></p>
    <p>Type : <span className="text-gray-400">{les.type}</span></p>
    
  </div>
</div>
                )
            })
        }
    )
  })
  return (
    <div className="relative  mx-auto  overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
