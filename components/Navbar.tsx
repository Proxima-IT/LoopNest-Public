'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isLoggedIn, getCurrentUser, logout, User } from '@/utils/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link as Navlink } from 'react-scroll';
import Image from 'next/image';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [position, setPosition] = useState<string>("bottom")
  const router = useRouter();

  useEffect(() => {
    setUserLoggedIn(isLoggedIn());
    setCurrentUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logout();
    setUserLoggedIn(false);
    setCurrentUser(null);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
              <Image src='/public/logo.png' alt="loop nest"
                  width={150}
                  height={150} className='w-16 h-12' />
                 <h2> Loop Nest</h2>
             
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/courses" className="text-white hover:text-accent transition-colors duration-300 font-medium">
              Courses
            </Link>
            {/* <Link href="/about" className="text-white hover:text-accent transition-colors duration-300 font-medium">
              About
            </Link> */}
            <Link href="/#blog"  className="text-white hover:text-accent transition-colors duration-300 font-medium cursor-pointer">
              Blog
            </Link>
            {/* <Link href="/contact" className="text-white hover:text-accent transition-colors duration-300 font-medium">
              Contact
            </Link> */}

              {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  className="text-white hover:text-accent transition-colors duration-300 font-medium">More <ChevronDown /> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-primary text-white">
        <DropdownMenuLabel>Explore</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="career">Career</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="hire-talent">Hire Talent</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="blogs">Blogs</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu> */}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {userLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-white">
                  <UserIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">{currentUser?.name}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="text-white border-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className=" border-white hover:bg-white bg-transparent text-white hover:text-primary transition-colors duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent-light text-white transition-colors duration-300"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-700">
                {userLoggedIn ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-white text-sm">
                      Welcome, {currentUser?.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-white hover:text-accent transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-3 py-2 text-accent hover:text-accent-light transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}