'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star, Clock, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import SectionTitle from '@/components/SectionTitle';
import { courses, testimonials, blogPosts, whyLoopNest } from '@/utils/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { isArrayBufferView } from 'node:util/types';


export default function HomePage() {
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const upcomingCourses = courses.filter(course => course.isUpcoming);
  const ongoingCourses = courses.filter(course => !course.isUpcoming);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className=" relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-inherit">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Unlock Your
                  <span className="text-accent block">Digital Future</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  Master cutting-edge technologies with industry experts and build the career you&apos;ve always dreamed of.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-white px-8 py-4 text-lg font-semibold transition-colors duration-300">
                  Browse Courses
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-colors duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 w-5 h-5" />
                </Button>
              </div>

            
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative">
                <Image
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students learning online"
                  width={600}
                  height={500}
                  className=" rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">4.9/5 Rating</div>
                      <div className="text-sm text-gray-600">From 2000+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      {upcomingCourses.length > 0 && (
        <section className="py-20 bg-[#010019ef]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Upcoming Courses"
              subtitle="Get ready for our latest courses launching soon"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  className={`animate-fade-in-up animate-delay-${index * 200}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* previous Courses */}
      <section className="py-20 bg-[#010019e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Previous Courses"
            subtitle="Join thousands of students already learning with us"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingCourses.map((course, index) => (
              <CourseCard 
                key={course.id} 
                course={course}
                className={`animate-fade-in-up animate-delay-${index * 200}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Loop Nest */}
      <section className="py-20 bg-[#010019ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose Loop Nest?"
            subtitle="We provide everything you need to succeed in your learning journey"
            centered
          />

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-800/50 rounded-lg">
          {whyLoopNest.map((item, index) => (
            <div
              key={index}
              className=" p-6 hover:bg-slate-800/70 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{item.title}</h3>
                  {/* <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20  bg-gradient-to-l from-primary via-primary to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Students Say"
            subtitle="Real feedback from our amazing learning community"
            centered
            className="text-white [&>h2]:text-white [&>p]:text-gray-300"
          />

          <div className="max-w-6xl mx-auto">
            <div className="relative min-h-[450px] md:min-h-[300px]">
           

<Carousel
  opts={{
    align: "start",
    loop: true
  }}
  plugins={[
    Autoplay({
      delay: 3000,
     
    })
  ]}
  className="w-full max-w-7xl" 
>
  <CarouselContent>
    {testimonials.map((testimonial, index) => (
      <CarouselItem key={testimonial.id || index} className="md:basis-1/2 lg:basis-1/3 ">
        <div className="  [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
          <Card className="bg-slate-800/50 backdrop-blur border-white/20 p-2 text-white">
            <CardContent className="p-8 text-center">
               <div className="flex items-center justify-center space-x-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="h-[80px] w-[80px] rounded-full bg-slate-50"
                />
              
              </div>


              <p className="text-xs leading-relaxed mb-8 italic text-gray-200 font-normal">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
               <div className="text-center">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-accent">{testimonial.role}</div>
                </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  {/* <CarouselPrevious /> */}
  {/* <CarouselNext /> */}
</Carousel>

             
              {/* {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === visibleTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-accent">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))} */}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVisibleTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === visibleTestimonial ? 'bg-accent' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#010019ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest from Our Blog"
            subtitle="Stay updated with the latest trends and insights in technology"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className={`group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up animate-delay-${index * 200} bg-white/70`}>
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent hover:text-accent-light font-medium transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Counselling Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Get Free Career Counselling
                </h2>
                <p className="text-xl text-gray-200">
                  Not sure which course is right for you? Our expert counselors will help you choose the perfect learning path based on your goals and background.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-lg">Free 30-min session</div>
                  <div className="text-gray-300">One-on-one guidance</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Call Back</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Email or Phone
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your email or phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interest
                  </label>
                  <select
                    id="course"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="web-development">Web Development</option>
                    <option value="data-science">Data Science</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent-light text-white py-3 text-lg font-semibold">
                  Request Call Back
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll call you within 24 hours. No spam, guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}