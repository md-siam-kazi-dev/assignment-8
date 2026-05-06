import { Suspense } from "react";
import CourseContent from "./courseContent";


const MainCourse = () => {
    return (
        <Suspense fallback={<div className="text-center mt-20">Loading Courses...</div>}>
            <CourseContent />
        </Suspense>
    );
}

export default MainCourse;