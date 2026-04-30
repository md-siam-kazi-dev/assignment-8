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
    <Carousel className="w-8/10 lg:hidden  mx-auto max-w-[350px] sm:max-w-xs">
      <CarouselContent>
        {course.map((c,index) => (
          <CarouselItem key={index}>
            <CourseCard course = {c}></CourseCard>
           
             
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <div className="container-div hidden lg:grid grid-cols-3 gap-6  justify-center">
        {course.map((c,index) => (
            <CourseCard key={index} course={c} />
))}
    </div>
    </>
  )
}
