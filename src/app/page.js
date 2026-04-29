import Banner from "@/component/Banner";
import ScrollBasedVelocityReviewDemo from "@/component/scrollReview";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { cn } from "@/lib/utils";



export default function Home() {
  return (
    <>
    <HexagonPattern radius={20}
            x={20}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            )}></HexagonPattern>
    <Banner />
    
    

    <ScrollBasedVelocityReviewDemo />
     <div className="min-h-screen">siam</div>
      <div className="min-h-screen">siam</div>
     </>
  );
}
