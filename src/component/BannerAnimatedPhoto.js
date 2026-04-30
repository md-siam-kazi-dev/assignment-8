'use client'
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
const moreDomains = [
  {
    name: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    name: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
  },
  {
    name: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    name: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    name: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    name: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
  },
  {
    name: "DevOps",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051"
  },
  {
    name: "Game Development",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
  },
  {
    name: "Graphic Design",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
  },
  {
    name: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    name: "Business & Entrepreneurship",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  },
  {
    name: "Finance & Investing",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373"
  }
];
export function BannerAnimatedPhoto() {
  return (
    <div className="relative flex w-full mt-20 flex-col items-center justify-center overflow-hidden py-8">
        <h1 className="section-heading mb-10">You Can Learn</h1>
      <ScrollVelocityContainer className="w-full h-[40px]  bg-yellow-300 ">
        <ScrollVelocityRow baseVelocity={-2} direction={0} className="">
          {moreDomains.map(dom => {
            return (
                <div className={` mx-10 bg-cover  h-[300px]`} ><h1 className="text-xl md:text-2xl  text-gray-900 font-bold">{dom.name}</h1></div>
            )
          })}
        </ScrollVelocityRow>
        
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}