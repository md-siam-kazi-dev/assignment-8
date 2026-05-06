
import { CourseTimeline } from "@/component/CourseTimeline";
import ScrollBasedVelocityReviewDemo from "@/component/scrollReview";
import Seperator from "@/component/sep";
import fetchData from "@/lib/fetchData";



const CourseDetailsPage =async ({params}) => {
    const {courseTitle} = await params;
   
    const data = await fetchData();
    let course = data.find(c => c.slug === courseTitle);
    console.log(course.slug)


  return (
    <>
    <div className=" container-div mt-30 md:mt-40 p-8 rounded-2xl  mx-auto">
      <div className="heading flex  flex-col lg:flex-row gap-10">
        <img className="rounded-2xl w-full md:w-[50%]" src={course.image}></img>
        <div className="flex justify-between flex-col ">
            <div >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-2">
            {course.title}
          </h1>
          <p className="text-xl font-semibold mb-2 md:text-2xl ">
            Instructor :{" "}
            <span className="text-gray-500">{course.instructor}</span>
          </p>

          <p className="text-[18px] text-black opacity-70 font-serif">
            {course.description}
          </p>

          <p className="text-gray-700 mt-2 text-sm">
            <span className="font-semibold">{course.students}</span> students already enrolled
          </p>

          <div className="flex items-center gap-3 mb-6"></div>
        </div>
          <div className="hidden xl:flex">
            <Seperator course={course} className=""/>
          </div>
        <button className="btn btn-primary p-8 rounded-xl text-xl font-semibold w-fit">Enroll Now</button>
        <div className="flex lg:hidden">
            <Seperator course={course} className=""/>
          </div>
        </div>
      </div>

      <h1 className="section-heading mt-20 text-center text-4xl">Course Curriculum</h1>

      <CourseTimeline course={course}/>
    </div>
     <ScrollBasedVelocityReviewDemo />
    </>
  );
}

export default CourseDetailsPage