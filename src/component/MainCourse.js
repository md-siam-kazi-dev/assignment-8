import { Suspense } from "react";
import CourseContent from "./courseContent";
import Skeleton from "./Skeleton";


const MainCourse = () => {
    return (
        <Suspense fallback={<Skeleton />}>
            <CourseContent />
        </Suspense>
    );
}

export default MainCourse;