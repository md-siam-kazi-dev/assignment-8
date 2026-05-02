'use client'
import { Separator } from "@/components/ui/separator"
import { PlayCircle, Star } from "lucide-react"
import React from 'react'

const Seperator = ({course}) => {
  return (
       <div className="flex w-full mt-10 xl:mt-0 items-start flex-col mb-5 bg-white shadow-lg rounded-2xl px-5 py-10 xl:flex-row  items-center xl:gap-4 text-sm">
      <div className=" p-5 text-xl font-semibold"><p>{course.curriculum.length} course series</p>
      <p className="text-[14px] text-gray-500 font-normal">Get in-depth knowledge of a subject</p></div>

      <Separator orientation="vertical" />


      <div className="p-5">
        <p  className="flex gap-1 text-xl font-semibold">{course.rating} <Star /></p>
        <p className="text-gray-400">from {course.students} reviews of courses in this program</p>
      </div>
      
    </div>
  )
}

export default Seperator