import Link from 'next/link';
import Image from 'next/image';
import { Users, BookOpen, FolderOpen, ClipboardList, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/utils/data';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export default function CourseCard({ course, className = '' }: CourseCardProps) {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${className}`}>
      <div className="relative overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          {course.type === 'live' ? (
            <div className="flex items-center bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              <div className="w-2 h-2 mr-1 bg-white rounded-full animate-ping"></div>
              LIVE
            </div>
          ) : (
            <div className="flex items-center bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
              <div className="w-2 h-2 mr-1 bg-white rounded-full"></div>
              REC
            </div>
          )}
        </div>

        {/* Batch Name */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {course.batchName}
          </Badge>
        </div>

        {/* Price Badge */}
        {course.originalPrice && (
          <div className="absolute bottom-3 right-3 bg-accent text-white px-2 py-1 rounded text-sm font-semibold">
            ৳{course.price.toLocaleString()}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {course.title}
        </h3>
        
        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-accent" />
            <span>{course.enrolledStudents.toLocaleString()} students</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>{course.moduleCount} modules</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FolderOpen className="w-4 h-4 text-accent" />
            <span>{course.projectCount} projects</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <ClipboardList className="w-4 h-4 text-accent" />
            <span>{course.assignmentCount} assignments</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-accent">
              ৳{course.price.toLocaleString()}
            </span>
            {course.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ৳{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {course.isUpcoming && (
            <Badge variant="outline" className="text-orange-600 border-orange-600">
              Upcoming
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/course/${course.slug}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-accent text-white transition-colors duration-300 font-semibold">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}