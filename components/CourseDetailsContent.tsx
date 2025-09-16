"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Play,
  Users,
  BookOpen,
  FolderOpen,
  ClipboardList,
  Star,
  Check,
  Tag,
  Lock,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { toast } from "react-toastify";

interface CourseDetailsContentProps {
  id: string;
}

export default function CourseDetailsContent({
  id,
}: CourseDetailsContentProps) {
  const [course, setCourse] = useState<any>({});
  const router = useRouter();
  const [cuponCode, setCuponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
  let code = cuponCode.toUpperCase()
  // const [showVideo, setShowVideo] = useState(false);
  const videoId = extractYouTubeID(course.videoUrl);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    setUserLoggedIn(isLoggedIn());
    axios
      .get(`${process.env.NEXT_PUBLIC_BASEURL}course/${id}`)
      .then((result) => {
        console.log(result?.data?.data);

        setCourse(result?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
console.log(course)
  const handleEnrollNow = () => {
    if (userLoggedIn) {
      router.push(`/payment/${course?._id}`);
    } else {
      router.push("/login");
    }
  };

  // coupon code
  const applyCoupon = (e: any) => {
    e.preventDefault()
    // if (course && couponCode?.toLowerCase() === "welcome10") {
    //   setDiscountedPrice(course?.price * 0.9);
    // } else {
    //   setDiscountedPrice(null);
    // }
    console.log(cuponCode,id)
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}coupon/use`,{cuponCode:code,courseId:id},{withCredentials:true})
      .then((result) => {
        console.log(result)
        toast.success("token successfully apply", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      setDiscountedPrice(result?.data?.data?.discountAmount)
      }).catch((err) => {
        console.log(err?.response?.data?.message)
        toast.error(err?.response?.data?.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  // extarct video url
 function extractYouTubeID(url:any) {
  if (!url) return null; // url undefined বা null হলে safe return

  const regExp =
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(regExp);

  return match ? match[1] : null;
}


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
          <span className="text-gray-300">{course?.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Fixed */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 ">
              {/* Media Section */}
              <Card className="p-0 m-0 border-0">
                <div className="relative w-full  mx-auto">
                  {/* <Carousel>
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <Dialog>
                           
                            <DialogTrigger asChild>
                              <div className="relative aspect-video overflow-hidden w-full">
                                <Image
                                  src={course.imageUrl}
                                  alt={course.title}
                                  width={600}
                                  height={500}
                                  className=" w-full object-cover rounded-lg"
                                />
                                <button
                                
                                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 rounded-lg"
                                >
                                  <Play className="w-16 h-16 text-white" />
                                </button>
                              </div>
                            </DialogTrigger>

                           
                            <DialogContent>
                              <CardContent className="p-0">
                                <div className="relative aspect-video overflow-hidden">
                                  <Image
                                    src={course.imageUrl}
                                    alt={course.title}
                                    width={600}
                                    height={500}
                                    className=" w-full object-cover rounded-lg"
                                  />
                                  <button
                                   
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 rounded-lg"
                                  >
                                    <Play className="w-16 h-16 text-white" />
                                  </button>
                                </div>
                              </CardContent>
                            </DialogContent>
                          </Dialog>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* ✅ Position arrows */}
                    {/* <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                  </Carousel> */} 

                  <Carousel>
  <CarouselContent>
    {/* 🔹 প্রথম স্লাইড = ভিডিও */}
    <CarouselItem>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative aspect-video overflow-hidden w-full">
            {/* Thumbnail */}
            <Image
              src={course?.imageUrl}
              alt={course?.title}
              width={600}
              height={500}
              className="w-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center 
                               bg-black bg-opacity-40 hover:bg-opacity-60 
                               transition-all duration-300 rounded-lg">
              <Play className="w-16 h-16 text-white" />
            </button>
          </div>
        </DialogTrigger>

        <DialogContent>
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden w-full">
            <iframe
  className="w-full h-full rounded-lg"
  src={
    videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : `https://www.youtube.com/embed/o_ynw4cdMwI?autoplay=1` // fallback video
  }
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  title="Course Intro Video"
/>
            </div>
          </CardContent>
        </DialogContent>
      </Dialog>
    </CarouselItem>

    {/* 🔹 দ্বিতীয় স্লাইড = ইমেজ */}
    <CarouselItem>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative aspect-video overflow-hidden w-full">
            <Image
              src={course?.imageUrl}
              alt="Course Preview"
              width={600}
              height={500}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </DialogTrigger>

        <DialogContent>
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden w-full">
              <Image
                src={course?.imageUrl}
                alt="Course Preview"
                width={600}
                height={500}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </DialogContent>
      </Dialog>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 rounded-full shadow-md disabled:opacity-50 disabled:pointer-events-auto" />
                 

</Carousel>

                  {/* )} */}
                </div>
              </Card>

              {/* Pricing Card */}
              <Card className="bg-transparent border-[1px] border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-accent">
                        ৳{(discountedPrice || course?.price)?.toLocaleString()}
                      </div>
                      {course?.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">
                          ৳{course?.originalPrice?.toLocaleString()}
                        </div>
                      )}
                      {discountedPrice && (
                        <Badge className="bg-green-100 text-green-800 mt-2">
                          ৳{(course.price - discountedPrice)?.toLocaleString()}{" "}
                          saved!
                        </Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          course.courseType === "live"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {course.courseType === "live" ? "LIVE" : "RECORDED"}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Coupon Input */}
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Have a coupon code?
                    </label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={cuponCode}
                        onChange={(e) => setCuponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        // disabled
                        onClick={applyCoupon}
                        variant="outline"
                        size="sm"
                      >
                        <Tag className="w-4 h-4 mr-1" />
                        Apply
                      </Button>
                    </div>
                   
                  </div> */}

                  <Button
                    onClick={handleEnrollNow}
                    size="lg"
                    className="w-full bg-accent hover:bg-accent-light text-white text-lg font-semibold py-4"
                  >
                    Enroll Now
                  </Button>

                  {/* <div className="text-center text-sm text-gray-600">
                    30-day money-back guarantee
                  </div> */}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className=" bg-transparent border-[1px] border-gray-700">
                <CardContent className="p-4 grid grid-cols-2 gap-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>
                      {course.enrolledStudents?.toLocaleString()} students
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
                <Badge variant="outline" className="text-gray-300">
                  {course.batchName}
                </Badge>
                {/* <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-current"
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    (4.9) • 2,847 reviews
                  </span>
                </div> */}
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
                <CardTitle className="text-gray-300">কোর্স সম্পর্কেঃ</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Creative Design Mastery (Batch-01) একটি লাইভ কোর্স, যেখানে
                  আপনি একেবারে বেসিক থেকে শুরু করে প্রফেশনাল লেভেলের ডিজাইন
                  শেখার সুযোগ পাবেন। এই কোর্সে শুধু সফটওয়্যার শেখানো হবে না,
                  বরং আপনাকে শেখানো হবে কিভাবে ডিজাইনকে ক্যারিয়ার বা আয়ের উৎসে
                  রূপান্তর করবেন।
                </p>

                <p className="text-gray-300 leading-relaxed mb-2">
                  কোর্সে থাকছেঃ{" "}
                </p>

                <ul className="text-gray-400 leading-relaxed mb-4">
                  <li>
                    ✅ Photoshop Basics থেকে Advanced Design – লেয়ার, কালার
                    থিওরি, টাইপোগ্রাফি, কম্পোজিশন
                  </li>
                  <li>
                    ✅ AI-পাওয়ারড ডিজাইন টেকনিকস – নতুন আইডিয়া, প্রোডাক্ট
                    কনসেপ্ট ও ক্রিয়েটিভ এসেট জেনারেশন
                  </li>
                  <li>
                    ✅ Portfolio & Branding – নিজের ডিজাইন আইডেন্টিটি তৈরি ও
                    পোর্টফোলিও সাজানো
                  </li>
                  <li>
                    ✅ Print & Digital Design – পোস্টার, ব্রোশিওর, সোশ্যাল
                    মিডিয়া ব্যানার, ক্যাম্পেইন ডিজাইন
                  </li>
                  <li>
                    ✅ Freelancing & Career Growth Roadmap – ক্লায়েন্টের সাথে
                    কানেক্ট হওয়া, LinkedIn এ গ্রোথ, আয়ের উৎস তৈরি ইত্যাদি।{" "}
                  </li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  ২০টি ক্লাসে আপনি পাবেন ২৫টির বেশি হ্যান্ডসঅন প্রজেক্ট এবং
                  ২০টির বেশি অ্যাসাইনমেন্ট, যা আপনাকে বাস্তব অভিজ্ঞতা দেবে।
                  কোর্স শেষে আপনার হাতে থাকবে ফাইনাল ব্র্যান্ড কিট ও পূর্ণাঙ্গ
                  পোর্টফোলিও, যা দিয়ে আপনি সহজেই ফ্রিল্যান্সিং শুরু করতে পারবেন
                  অথবা ডিজাইন ইন্ডাস্ট্রিতে প্রবেশ করতে পারবেন।আর পুরো কোর্সটা
                  ডিজাইন করা হয়েছে প্রজেক্ট বেইজড লার্নিং এর ধাঁচে, যাতে করে
                  আপনি প্রজেক্ট করতে করতে শিখতে পারেন।
                </p>
              </CardContent>
            </Card>
            {/* Course Features */}
            <Card className=" bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">
                  কোর্স থেকে আপনি কি কি পাবেনঃ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course?.courseFeatures?.map(
                    (feature: any, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-400">{feature.value}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            {/* What You'll Learn */}
            <Card className="bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">
                  {/* What You&apos;ll Learn */}
                  কোর্স থেকে আপনি কি কি শিখবেনঃ 
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-800/50 border-l-4 border-accent p-6 rounded-r-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Photoshop Basics থেকে Advanced",
                      "Composition, Color & Typography",
                      "AI-পাওয়ারড ডিজাইন",
                      "Product Manipulation",
                      "Poster & Banner Design",
                      "Print Design Skills",
                      "Portfolio Development",
                      "Branding & Campaign Design",
                      "Networking & Career Growth",
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
                <CardTitle className="text-gray-300">
                  কোর্সটি কাদের জন্যেঃ 
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "যারা একেবারে শুরু থেকে ডিজাইন শিখতে চান",
                    "যারা গ্রাফিক্স ডিজাইন শিখতে চান",
                    "যারা AI টুল ব্যবহার করে ক্রিয়েটিভ ডিজাইন বানাতে আগ্রহী",
                    "যারা ফ্রিল্যান্সিং শুরু করতে চান",
                    "যারা নিজেদের জন্য প্রফেশনাল ডিজাইন পোর্টফোলিও বানাতে চান",
                    "যারা সোশ্যাল মিডিয়া পোস্টার, ব্যানার, থাম্বনেইল ডিজাইন শিখতে চান",
                    "যারা প্রিন্ট ডিজাইন (ফ্লায়ার, ব্রোশিওর, পোস্টার) শিখতে চান",
                    "যারা ক্যারিয়ার হিসেবে ডিজাইন ফিল্ডে প্রবেশ করতে চান",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/*rd> */}

            {/* Instructor */}
            <Card className=" bg-transparent border-0">
              {/* <SectionTitle title="Instructor" subtitle=" " centered /> */}
              {course?.instructors?.map((instructor: any, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-slate-800/50  mb-4 p-4 shadow-lg transition-shadow duration-300 border-[1px] border-gray-800 rounded-lg"
                >
                  {/* Profile Image */}
                  <div>
                    <Image
                      src={instructor?.imageUrl}
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
              {/* <Link href="/course/${course.slug}">
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 border-[1px] border-gray-800 rounded-lg ">
               fghg
                </CardContent>
              </Link> */}
            </Card>

            {/* Course Content */}
            <Card className="bg-transparent border-[1px] border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-300">
                  Course Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course?.courseModules?.map((module: any, index: number) => (
                    <div
                      key={index}
                      className="border border-gray-800 rounded-lg p-4"
                    >
                      <h4 className="font-semibold text-gray-300 mb-3">
                        Module {index + 1}: {module.title}
                      </h4>
                      <ul className="space-y-2">
                        {module?.lessons?.map(
                          (lesson: string, lessonIndex: number) => (
                            <li
                              key={lessonIndex}
                              className="flex items-center space-x-2 text-sm text-gray-400"
                            >
                              {/* <Play className="w-3 h-3 text-accent flex-shrink-0" /> */}
                              <Lock className="w-3 h-3 text-accent flex-shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assignments & Projects */}
            <div className="space-y-6">
              {/* Assignments */}
              {/* <Card className=" bg-transparent border-[1px] border-gray-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <ClipboardList className="w-5 h-5 mr-2 text-accent" />
                    Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course?.assignments?.map((assignment: any, index: number) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{assignment}</span>
                      </li>
                    ))}
                    {(!course?.assignments || course.assignments.length === 0) && (
                      <li className="text-gray-400 text-sm">No assignments available</li>
                    )}
                  </ul>
                </CardContent>
              </Card> */}

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
                    {course?.projects?.map((project: any, index: number) => (
                      <div
                        key={index}
                        className="bg-slate-800/50  border border-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <FolderOpen className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-300 mb-2">
                              {project.name}
                            </h4>
                            <p className="text-sm text-gray-400 mb-3">
                              Build a complete {project.name?.toLowerCase()}{" "}
                              with modern technologies and best practices.
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
