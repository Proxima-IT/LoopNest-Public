import { courses } from '@/utils/data';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}