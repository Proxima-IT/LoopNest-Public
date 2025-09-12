import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Loop Nest
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering learners with cutting-edge technology education and practical skills for the digital future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Home
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                All Courses
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                About Us
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Popular Courses */}
          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Popular Courses</h3>
            <div className="space-y-2">
              <Link href="/course/full-stack-web-development" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Full Stack Development
              </Link>
              <Link href="/course/mobile-app-development" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Mobile App Development
              </Link>
              <Link href="/course/data-science-machine-learning" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Data Science & ML
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                UI/UX Design
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent transition-colors duration-300 text-sm">
                Digital Marketing
              </Link>
            </div>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">+880 1234-567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@loopnest.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Loop Nest. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Powered and developed by proxima it
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}