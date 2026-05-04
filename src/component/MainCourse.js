import { Suspense } from "react";
import CourseContent from "./courseContent";

// 2. Wrap the Sub-Component in Suspense for the main export
const MainCourse = () => {
    return (
        <Suspense fallback={<div className="text-center mt-20">Loading Courses...</div>}>
            <CourseContent />
        </Suspense>
    );
}

export default MainCourse;