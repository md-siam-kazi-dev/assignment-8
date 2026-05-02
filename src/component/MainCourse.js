
'use client'


import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CourseContainer from "./courseContainer";
import { useEffect, useState } from "react";



const categories = [
  { id: 0, name: "All Courses", slug: "all" },
  { id: 1, name: "AI / ML", slug: "ai-ml" },
  { id: 2, name: "Blockchain", slug: "blockchain" },
  { id: 3, name: "Business", slug: "business" },
  { id: 4, name: "Cloud Computing", slug: "cloud-computing" },
  { id: 5, name: "Computer Science", slug: "computer-science" },
  { id: 6, name: "Cybersecurity", slug: "cybersecurity" },
  { id: 7, name: "Data Science", slug: "data-science" },
  { id: 8, name: "Database", slug: "database" },
  { id: 9, name: "Design", slug: "design" },
  { id: 10, name: "DevOps", slug: "devops" },
  { id: 11, name: "Development", slug: "development" },
  { id: 12, name: "Finance", slug: "finance" },
  { id: 13, name: "Game Development", slug: "game-development" },
  { id: 14, name: "Language", slug: "language" },
  { id: 15, name: "Marketing", slug: "marketing" },
  { id: 16, name: "Mobile Development", slug: "mobile-development" },
  { id: 17, name: "Photography", slug: "photography" },
]

const MainCourse = () => {
    const pathName = usePathname();
    const [categoryMain,setcategoryMain] = useState('')
    console.log(pathName)
    
    
    const router = useRouter();
    const Params = useSearchParams();
    const categoryName = Params.get('category') || "all"
    useEffect(() => {
        setcategoryMain(categoryName)

    },[categoryName])
    
   
    const handleClick = (slug) => {
     if(slug != 'all'){
        router.push(`/?category=${slug}`,{scroll:false});
     }else{
        router.push('/',{scroll:false})
     }
     
};
  
  
    
    
  return (
    <div className="container-div mt-20 text-center">
      <h1 className="section-heading mb-10">Explore Inspiring Online Courses</h1>
      <div className="btn-container  flex-wrap  flex gap-1">
        {categories.map((cate) => {
          return (
            <button onClick={() => handleClick(cate.slug)} key={cate.id} className={`btn ${categoryName === cate.slug ? 'btn-primary text-white':'btn-outline'} $ rounded-full border-primary md:text-[16px] text-[12px] text-primary border-1`} >
              {cate.name}
            </button>
          );
        })}
      </div>
      <CourseContainer category = {categoryMain}/>
      
    </div>
  );
};

export default MainCourse;
