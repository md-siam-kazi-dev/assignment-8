

import Banner from "@/component/Banner";
import { BannerAnimatedPhoto } from "@/component/BannerAnimatedPhoto";
import MainCourse from "@/component/MainCourse";

import ScrollBasedVelocityReviewDemo from "@/component/scrollReview";
import TopTeacher from "@/component/TopTeacher";
import TopThreeCourses from "@/component/TopThreeCourses";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { cn } from "@/lib/utils";





export default function  Home() {
  
 
  return (
    <>
    <HexagonPattern radius={20}
            x={20}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            )}></HexagonPattern>
    <div className="w-full mt-40 banner-div">
      <Banner />
      <BannerAnimatedPhoto />
     

    </div>
    <TopThreeCourses />
    <TopTeacher />

    <MainCourse />
    
    

    


    
    
    

    
    
     </>
  );
}


