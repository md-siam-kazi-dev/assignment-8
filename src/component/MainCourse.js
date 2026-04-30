'use client'


import { useRouter } from "next/navigation";


const categories = [
  { id: 0, name: "All Courses", slug: "/" },
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

const MainCourse = ({children}) => {
    const router = useRouter();
    const handleCat =(slug)=>{
        
            router.push(`/${slug}`)
        
    }
  return (
    <div className="container-div mt-20 text-center">
      <h1 className="section-heading mb-10">Explore Inspiring Online Courses</h1>
      <div className="btn-container flex-wrap  flex gap-1">
        {categories.map((cate) => {
          return (
            <button key={cate.id} className="btn btn-outline rounded-full border-primary  text-primary border-1" onClick={() => handleCat(cate.slug)}>
              {cate.name}
            </button>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default MainCourse;
