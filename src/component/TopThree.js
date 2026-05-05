
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CourseCard from "./CourseCard"

export function TopThree({course}) {
    console.log(course)
  return (<>
    {/* <Carousel className=" lg:hidden w-[80%] mx-auto  ">
      <CarouselContent >
        {course.map((c,index) => (
          <CarouselItem key={index} className='basis-full'>
            <CourseCard course = {c}></CourseCard>
           
             
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}
    <div className="w-8/10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6  ">
        {course.map((c,index) => (
            <CourseCard key={index} course={c} />
))}
    </div>
    </>
  )
}
