'use client';

import { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import SectionTitle from '@/components/SectionTitle';
import { courses } from '@/utils/data';


export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || course.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || 
                           course.title.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const categories = [
    { value: 'all', label: 'All Courses' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'data', label: 'Data Science' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'marketing', label: 'Digital Marketing' }
  ];

  return (
    <div className="min-h-screen bg-[#010019ef]">
      <Navbar />
      
      <div className="pt-16">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Courses
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our comprehensive collection of courses designed to help you master the latest technologies and advance your career.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="text-sm"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex gap-2">
                <Button
                  variant={selectedType === 'all' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType('all')}
                >
                  All
                </Button>
                <Button
                  variant={selectedType === 'live' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType('live')}
                >
                  Live
                </Button>
                <Button
                  variant={selectedType === 'recorded' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType('recorded')}
                >
                  Recorded
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-300">
                  {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
                </h2>
                <p className="text-gray-600 mt-1">
                  {searchTerm && `Results for "${searchTerm}"`}
                  {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Sort by: Popular</span>
              </div>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <CourseCard 
                    key={course.id} 
                    course={course}
                    className={`animate-fade-in-up animate-delay-${(index % 6) * 100}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 ">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No courses found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or browse all courses.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 ">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our course catalog is constantly growing. Let us know what you&apos;d like to learn and we&apos;ll consider adding it to our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-white">
                Request a Course
              </Button>
              <Button size="lg" variant="outline">
                Get Free Counselling
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}