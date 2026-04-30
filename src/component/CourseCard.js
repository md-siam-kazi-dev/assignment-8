
import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div className="border  rounded-2xl shadow border-gray-300">
       
                <img className="rounded-tr-2xl rounded-tl-2xl" src={course.image}></img>
                <div className="w-full  text-left flex justify-between flex-col justify-between p-5">
                    <div className='flex-1'>
                        <h1 className="text-xl font-bold mb-1">{course.title}</h1>
                    <p className="text-[16px] text-gray-500 font-semibold">{course.instructor}</p>
                    <p className="text-[16px] mb-4 font-semibold text-gray-400">Rating : {course.rating}</p>
                    </div>
                    <button className="btn w-full rounded-2xl btn-primary">Details</button>
                </div>
                
            </div>
  )
}

export default CourseCard