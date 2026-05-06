import { Suspense } from "react";
import CourseContent from "./courseContent";
import Skeleton from "./Skeleton";


const MainCourse = () => {
    return (
        <Suspense fallback={<div className="container-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-auto"><Skeleton /></div>}>
            <CourseContent />
        </Suspense>
    );
}

export default MainCourse;