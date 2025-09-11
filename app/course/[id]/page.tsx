// app/course/[_id]/page.tsx
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseDetailsContent from '@/components/CourseDetailsContent';
import { courses } from '@/utils/data';

// export async function generateStaticParams() {
//   // সব _id string হিসেবে return করো
//   return courses.map(course => ({
//     _id: String(course._id), 
//   }));
// }

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  // const course = courses.find(c => String(c._id) === params._id);
 const { id } =  params;
 console.log('jkhkljhlk------------',id)
  if (!id) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <h2>vcxc</h2>
      <Navbar />
      {/* <CourseDetailsContent course={course} /> */}
      <Footer />
    </div>
  );
}
