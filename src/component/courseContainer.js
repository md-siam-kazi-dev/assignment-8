"use client";
export const dynamic = 'force-dynamic';
import fetchData from "@/lib/fetchData";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Skeleton from "./Skeleton";

const CourseContainer = ({category,searchInput,setSearchInput}) => {
  
  const [data, setData] = useState([]);
  
  
  


  useEffect(() => {
   
    const getData = async () => {
     
      const resData = await fetchData();
       
      
      
      


      if (category === 'all' && searchInput === "") {
      
        setData(resData);
      }else if(searchInput != ""){
        console.log('yy')
         let searchResult = resData.filter(c =>  c.title.toLowerCase().includes(searchInput.toLowerCase())
);
         setData(searchResult)
      }else {
        console.log(category,searchInput);
        setSearchInput("");
        let filterData = resData.filter(
          (c) => c.category_slug === category
        );
        console.log(filterData)
        
        setData(filterData);
      }
    };
    getData();
  }, [category,searchInput]);
  
  



  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-auto">

      {data.length != 0 ?data.map(course => {
          return  (
            <CourseCard key={course.id} course={course} />
          )
        }) : <Skeleton />}
        
    </div>
  );
};

export default CourseContainer;
