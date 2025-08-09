import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseDetailsContent from '@/components/CourseDetailsContent';
import { courses } from '@/utils/data';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return notFound(); // ✅ Proper use: return it
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CourseDetailsContent course={course} />
      <Footer />
    </div>
  );
}
