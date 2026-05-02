"use client";
import fetchData from "@/lib/fetchData";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const CourseContainer = ({category}) => {
  console.log(category)
  const [data, setData] = useState([]);
  
  
  


  useEffect(() => {
   
    const getData = async () => {
      const resData = await fetchData();
      console.log('ss')
      if (category === 'all') {
        console.log('xx')
        setData(resData);
      } else {
        let filterData = resData.filter(
          (c) => c.category_slug === category
        );
        console.log(filterData)
        
        setData(filterData);
      }
    };
    getData();
  }, [category]);
  
  



  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-auto">
        {data.map(course => {
          return  (
            <CourseCard key={course.id} course={course} />
          )
        })}
    </div>
  );
};

export default CourseContainer;
