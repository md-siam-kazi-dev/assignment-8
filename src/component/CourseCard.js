'use client'
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const CourseCard = ({ course }) => {
  
  return (
    <div className="card max-w-[350px] w-full mx-auto text-left border rounded-2xl border-gray-300 bg-base-100 shadow-sm">
  <figure>
    <img
      src={course.image}
      alt={course.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title mb-0 text-2xl">{course.title}</h2>
    <p className="text-gray-500 text-[16px] mb-0"><span className="text-black">Instructor : </span>{course.instructor}</p>
    
    <div className="card-actions items-center justify-end">
        <p className="text-[16px]">⭐ <span className="text-gray-500">{course.rating}</span></p>
      <Link className="btn btn-primary" href={`/${course.category_slug}/${course.slug}`}>Details</Link>
    </div>
  </div>
</div>
  );
};

export default CourseCard;
