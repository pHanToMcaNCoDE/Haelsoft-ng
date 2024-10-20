import React from 'react'
import Hero from '../../course-details/components/Hero'
import CourseTrailer from '../../course-details/components/CourseTrailer'
import CourseTutor from '../../course-details/CourseTutor'
import ImageDisplay from '../../course-details/ImageDisplay'
import CourseContent from '../../course-details/CourseContent'
import Instructors from '../../course-details/Instructors'
import BuildYourPortfolio from '../../course-details/BuildYourPortfolio'
import Expectation from '../../course-details/Expectation'
import OnlineClassroom from '../../course-details/OnlineClassroom'
import GraduateFeedback from '../../course-details/GraduateFeedback'
import Community from '../../course-details/Community'
import GetStartedCourse from '../../course-details/GetStartedCourse'

const page = () => {

  const pathname = usePathname();
  const courseTitle = decodeURIComponent(pathname.split('/').pop());
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const courseTtl = searchParams.get('details');
  const { courses } = useSelector((state) => state.courses);
  // useEffect(() => {
  //   console.log('Course title from URL:', courses);
  //   console.log('Course title from search params:', courseTtl);

  //   const fetchCourse = () => {
  //     const allCourses = Object.values(courseDetails).flat();
 
  //     const cartDataCourse = courses.find((c) => c.title.toLowerCase() === (courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase()));

  //     const displayDataCourse =  allCourses.find((c) => c.course_title.toLowerCase() === (courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase()));
  //     // console.log('Fetched course:', displayDataCourse);
  //     const mergedCourseData = {
  //       ...cartDataCourse,
  //       ...displayDataCourse
  //     };
  //     console.log("mergedCourseData",mergedCourseData);
      
  //     if (displayDataCourse && cartDataCourse) {
  //       setCourse(mergedCourseData );
  //     } else {
  //       setError('Course not found');
  //     }
  //     setLoading(false);
  //   };

  //   fetchCourse();
  // }, [courseTitle, courseTtl]);

  // if (loading) {
  //   return <Loading />;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  return (
    <main>
      <Hero course={course} />
      <CourseTrailer course={course} />
      <CourseTutor course={course} />
      <ImageDisplay />
      <CourseContent course={course} />
      <Instructors course={course} />
      <BuildYourPortfolio course={course} />   
      <Expectation course={course} />
      <OnlineClassroom course={course} />
      <GraduateFeedback course={course} />
      <Community />
      <GetStartedCourse course={course} />
    </main>
  )
}

export default page