"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Play,
  Users,
  BookOpen,
  FolderOpen,
  ClipboardList,
  Star,
  Check,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isLoggedIn } from "@/utils/auth";
import type { Course } from "@/utils/data";
import SectionTitle from "./SectionTitle";
// import { Play } from "lucide-react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // your shadcn carousel
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import Link from "next/link";

interface CourseDetailsContentProps {
  course: Course;
}

export default function CourseDetailsContent({
  course,
}: CourseDetailsContentProps) {
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setUserLoggedIn(isLoggedIn());
  }, []);

  const handleEnrollNow = () => {
    if (userLoggedIn) {
      router.push("/payment");
    } else {
      router.push("/login");
    }
  };

  const applyCoupon = () => {
    if (course && couponCode.toLowerCase() === "welcome10") {
      setDiscountedPrice(course.price * 0.9);
    } else {
      setDiscountedPrice(null);
    }
  };

  return (
    <div className="pt-20 bg-[#010019e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
          <button
            onClick={() => router.push("/")}
            className="hover:text-accent transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => router.push("/courses")}
            className="hover:text-accent transition-colors"
          >
            Courses
          </button>
          <span>/</span>
          <span className="text-gray-300">{course.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Fixed */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 ">
              {/* Media Section */}
              <Card className="">
                <div className="relative w-full  mx-auto">
                  {showVideo ? (
                    <div className="aspect-video bg-gray-900 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Video preview would play here</p>
                      </div>
                    </div>
                  ) : (
                    <Carousel>
                      <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <CarouselItem key={index}>
                            <div className=" ">
                              {/* <Card> */}
                                <CardContent className="p-0">
                                  <div className="relative aspect-video overflow-hidden">
                                    <Image
                                      src={course.image}
                                      alt={course.title}
                                      width={600}
                                      height={500}
                                      className=" w-full object-cover rounded-lg"
                                    />
                                    <button
                                      onClick={() => setShowVideo(true)}
                                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 rounded-lg"
                                    >
                                      <Play className="w-16 h-16 text-white" />
                                    </button>
                                  </div>
                                </CardContent>
                              {/* </Card> */}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>

                      {/* ✅ Position arrows */}
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                    </Carousel>
                  )}
                </div>
              </Card>

              {/* Pricing Card */}
              <Card className="bg-transparent border-[1px] border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-accent">
                        ৳{(discountedPrice || course.price).toLocaleString()}
                      </div>
                      {course.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">
                          ৳{course.originalPrice.toLocaleString()}
                        </div>
                      )}
                      {discountedPrice && (
                        <Badge className="bg-green-100 text-green-800 mt-2">
                          ৳{(course.price - discountedPrice).toLocaleString()}{" "}
                          saved!
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          course.type === "live" ? "destructive" : "secondary"
                        }
                      >
                        {course.type === "live" ? "LIVE" : "RECORDED"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Coupon Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Have a coupon code?
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={applyCoupon} variant="outline" size="sm">
                        <Tag className="w-4 h-4 mr-1" />
                        Apply
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Try &quot;welcome10&quot for 10% off
                    </p>
                  </div>

                  <Button
                    onClick={handleEnrollNow}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent-light text-white text-lg font-semibold py-4"
                  >
                    Enroll Now
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    30-day money-back guarantee
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className=" bg-transparent border-[1px] border-gray-700">
                <CardContent className="p-4 grid grid-cols-2 gap-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>
                      {course.enrolledStudents.toLocaleString()} students
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>{course.moduleCount} modules</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <FolderOpen className="w-4 h-4 text-accent" />
                    <span>{course.projectCount} projects</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <ClipboardList className="w-4 h-4 text-accent" />
                    <span>{course.assignmentCount} assignments</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Panel - Scrollable */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge variant="outline" className="text-gray-300">{course.batchName}</Badge>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    (4.9) • 2,847 reviews
                  </span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* About the Course */}
            <Card className=" bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">About This Course</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-400 leading-relaxed mb-4">
                  This comprehensive course is specifically designed for
                  students and professionals in Bangladesh who want to master
                  modern web development technologies. Our curriculum covers
                  everything from the basics to advanced concepts, ensuring
                  you&apos;re job-ready by the end of the program.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  With hands-on projects, real-world case studies, and direct
                  mentorship from industry experts, you&apos;ll gain practical
                  experience that employers value. Our focus on the Bangladeshi
                  tech market ensures you learn the most relevant skills for
                  local opportunities.
                </p>
              </CardContent>
            </Card>
            {/* Course Features */}
            <Card className=" bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">What You&apos;ll Get</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card className="bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">What You&apos;ll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-800/50 border-l-4 border-accent p-6 rounded-r-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Build responsive web applications from scratch",
                      "Master modern JavaScript frameworks and libraries",
                      "Implement secure authentication and authorization",
                      "Deploy applications to production environments",
                      "Work with databases and APIs effectively",
                      "Follow industry best practices and coding standards",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Who This Course Is For */}
            <Card className=" bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">Who This Course Is For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Complete beginners to programming",
                    "Computer science students",
                    "Career changers into tech",
                    "Freelancers wanting to upskill",
                    "Small business owners",
                    "Anyone passionate about technology",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card className=" bg-transparent border-0">
            {/* <SectionTitle title="Instructor" subtitle=" " centered /> */}
              
             <Link href="/course/${course.slug}"> 
             <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 border-[1px] border-gray-800 rounded-lg ">
                {course?.instructors?.map((instructor, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-slate-800/50  mb-4 p-4 shadow-lg transition-shadow duration-300 border-[1px] border-gray-800 rounded-lg"
                  >
                    {/* Profile Image */}
                    <div>
                      <Image
                        src={instructor.image}
                        alt={instructor.name}
                        width={80}
                        height={80}
                        className="rounded-xl w-32 h-32"
                      />
                    </div>

                    <div className="pr-4 flex-1">
                      {/* Role Badge */}
                      <Badge
                        variant={
                          instructor.role === "LEAD INSTRUCTOR"
                            ? "default"
                            : "secondary"
                        }
                        className={`mb-3 px-3 py-1 text-xs font-semibold rounded-full border-2 ${
                          instructor.role === "LEAD INSTRUCTOR"
                            ? "bg-purple-100 text-purple-700 border-purple-300"
                            : "bg-green-100 text-green-700 border-green-300"
                        }`}
                      >
                        {instructor.role}
                      </Badge>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-gray-300 mb-2 leading-tight">
                        {instructor.name}
                      </h3>

                      {/* Bio */}
                      <p className="text-sm  text-gray-400">{instructor.bio}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
              </Link>
            </Card>

            {/* Course Content */}
            <Card className="bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="border border-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-300 mb-3">
                        Module {index + 1}: {module.title}
                      </h4>
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-center space-x-2 text-sm text-gray-400"
                          >
                            <Play className="w-3 h-3 text-accent flex-shrink-0" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assignments & Projects */}
            <div className="space-y-6">
              {/* Assignments */}
              <Card className=" bg-transparent border-[1px] border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <ClipboardList className="w-5 h-5 mr-2 text-accent" />
                    Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.assignments.map((assignment, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{assignment}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className=" bg-transparent border-[1px] border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <FolderOpen className="w-5 h-5 mr-2 text-accent" />
                    Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.projects.map((project, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/50  border border-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <FolderOpen className="w-4 h-4 text-white" />
                           {/* <Image
                                      src='https://cdn.dribbble.com/userupload/26375831/file/still-0881fd5ba2033c2cbc13b366c678861e.png?resize=400x0'
                                      alt='projects'
                                      fill
                                      className="rounded-lg"
                                    /> */}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-300 mb-2">
                              {project}
                            </h4>
                            <p className="text-sm text-gray-400 mb-3">
                              Build a complete {project.toLowerCase()} with
                              modern technologies and best practices.
                            </p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {index < 2 ? "Required" : "Optional"}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {index === 0
                                  ? "Beginner"
                                  : index === 1
                                  ? "Intermediate"
                                  : "Advanced"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
