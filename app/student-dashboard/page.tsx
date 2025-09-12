import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

import React from "react";

const StudentDashboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#010019ef] text-white">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-100 ">Loop Nest</h1>
          <p className="text-lg text-gray-400 dark:text-gray-400 pb-4">
            Student Enrollment System
          </p>

          <Link href="/enrollment-status">
            <Button className="px-8 py-3 text-lg bg-pink-700 text-white flex gap-4">
              View Enrollment Status  <FaArrowAltCircleRight />
            </Button>
          </Link>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
