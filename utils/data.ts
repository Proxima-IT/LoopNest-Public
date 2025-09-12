// Mock data for courses, testimonials, blog posts, etc.

export interface Course {
  _id: any;
  id: string;
  slug: string;
  title: string;
  batchName: string;
  description: string;
  imageUrl: string;
  type: 'live' | 'recorded';
  enrolledStudents: number;
  moduleCount: number;
  projectCount: number;
  assignmentCount: number;
  price: number;
  originalPrice?: number;
  instructors: {
    name: string;
    bio: string;
    role: string;
    image: string;
  }[];
  courseFeatures: string[];
  modules: {
    title: string;
    lessons: string[];
  }[];
  assignments: string[];
  projects: string[];
  upcomingCourse?: boolean;
}


export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  publishDate: string;
  slug: string;
}

export const courses: Course[] = [
  {
    _id: '1',
    id:"1",
    slug: 'full-stack-web-development',
    title: 'Complete Full Stack Web Development',
    batchName: 'Batch 15',
    description: 'Master modern web development with React, Node.js, MongoDB, and more. Build real-world projects and get job-ready skills.',
    imageUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'live',
    enrolledStudents: 2847,
    moduleCount: 12,
    projectCount: 6,
    assignmentCount: 24,
    price: 15000,
    originalPrice: 20000,
    instructors: [
      {
        name: 'Sarah Johnson',
        role: "LEAD INSTRUCTOR",
        bio: 'Senior Full Stack Developer with 8+ years experience at top tech companies',
        image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'David Miller',
        role: "Backend Engineer",
        bio: 'Specialist in Node.js, databases, and scalable systems',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Emily Davis',
        role: "Frontend Architect",
        bio: 'React and UI/UX expert with 6+ years of teaching experience',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      }
    ],
    courseFeatures: [
      'Live interactive sessions',
      '24/7 doubt support',
      'Industry projects',
      'Job placement assistance',
      'Certificate of completion'
    ],
    modules: [
      {
        title: 'HTML & CSS Fundamentals',
        lessons: ['HTML5 Semantics', 'CSS Grid & Flexbox', 'Responsive Design', 'CSS Animations']
      },
      {
        title: 'JavaScript Mastery',
        lessons: ['ES6+ Features', 'DOM Manipulation', 'Async Programming', 'APIs & Fetch']
      },
      {
        title: 'React Development',
        lessons: ['Components & JSX', 'State Management', 'React Hooks', 'React Router']
      }
    ],
    assignments: [
      'Build a responsive landing page',
      'Create an interactive dashboard',
      'Develop a full-stack application'
    ],
    projects: [
      'E-commerce website',
      'Social media app',
      'Task management system'
    ],
    upcomingCourse: false
  },
  {
    _id:2,
    id: '2',
    slug: 'mobile-app-development',
    title: 'Mobile App Development with React Native',
    batchName: 'Batch 8',
    description: 'Build cross-platform mobile apps with React Native. Learn to create iOS and Android apps with a single codebase.',
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'recorded',
    enrolledStudents: 1523,
    moduleCount: 10,
    projectCount: 4,
    assignmentCount: 20,
    price: 12000,
    originalPrice: 16000,
     instructors: [
      {
        name: 'Sarah Johnson',
        role: "Full stack developer",
        bio: 'Senior Full Stack Developer with 8+ years experience at top tech companies',
        image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'David Miller',
        role: "Backend Engineer",
        bio: 'Specialist in Node.js, databases, and scalable systems',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Emily Davis',
        role: "Frontend Architect",
        bio: 'React and UI/UX expert with 6+ years of teaching experience',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      }
    ],
    courseFeatures: [
      'Pre-recorded HD videos',
      'Downloadable resources',
      'Mobile app projects',
      'App store deployment guide',
      'Lifetime access'
    ],
    modules: [
      {
        title: 'React Native Basics',
        lessons: ['Setup & Environment', 'Components & Styling', 'Navigation', 'State Management']
      },
      {
        title: 'Native Features',
        lessons: ['Camera & Gallery', 'Push Notifications', 'Location Services', 'Device APIs']
      }
    ],
    assignments: [
      'Todo app',
      'Weather app',
      'Chat application'
    ],
    projects: [
      'Food delivery app',
      'Fitness tracker',
      'News reader app'
    ]
  },
  {
    _id: '3',
    id: '3',
    slug: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning',
    batchName: 'Batch 12',
    description: 'Dive into data science and machine learning with Python. Learn to analyze data and build predictive models.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'live',
    enrolledStudents: 1876,
    moduleCount: 14,
    projectCount: 5,
    assignmentCount: 28,
    price: 18000,
    originalPrice: 24000,
     instructors: [
      {
        name: 'Sarah Johnson',
        role: "Full stack developer",
        bio: 'Senior Full Stack Developer with 8+ years experience at top tech companies',
        image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'David Miller',
        role: "Backend Engineer",
        bio: 'Specialist in Node.js, databases, and scalable systems',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Emily Davis',
        role: "Frontend Architect",
        bio: 'React and UI/UX expert with 6+ years of teaching experience',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      }
    ],
    courseFeatures: [
      'Live coding sessions',
      'Real datasets',
      'Industry case studies',
      'ML model deployment',
      'Research paper discussions'
    ],
    modules: [
      {
        title: 'Python for Data Science',
        lessons: ['NumPy & Pandas', 'Data Visualization', 'Statistical Analysis', 'Data Cleaning']
      },
      {
        title: 'Machine Learning',
        lessons: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Deep Learning']
      }
    ],
    assignments: [
      'Data analysis project',
      'Prediction model',
      'Classification task'
    ],
    projects: [
      'Customer segmentation',
      'Stock price prediction',
      'Image recognition system'
    ],
    upcomingCourse: true
  }
];



export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Ahmed',
    role: 'Software Engineer at TechCorp',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Loop Nest transformed my career completely. The instructors are amazing and the curriculum is industry-relevant. I landed my dream job within 3 months of completing the course!',
    rating: 5
  },
  {
    id: '2',
    name: 'Fatima Khan',
    role: 'Full Stack Developer',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'The hands-on projects and real-world applications made learning so engaging. I went from zero coding knowledge to building full applications. Highly recommend Loop Nest!',
    rating: 5
  },
  {
    id: '3',
    name: 'Arif Hassan',
    role: 'Mobile App Developer',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Excellent course structure and mentorship. The community support is incredible. I built my first mobile app during the course and now I have my own app development business.',
    rating: 5
  },
  {
    id: '4',
    name: 'Arif Hassan',
    role: 'Mobile App Developer',
       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Excellent course structure and mentorship. The community support is incredible. I built my first mobile app during the course and now I have my own app development business.',
    rating: 5
  },
  {
    id: '5',
    name: 'Arif Hassan',
    role: 'Mobile App Developer',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Excellent course structure and mentorship. The community support is incredible. I built my first mobile app during the course and now I have my own app development business.',
    rating: 5
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Skills Every Developer Should Master in 2024',
    excerpt: 'Discover the most in-demand programming skills and technologies that will boost your career in the current tech landscape.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '5 min read',
    publishDate: '2024-01-15',
    slug: 'essential-developer-skills-2024'
  },
  {
    id: '2',
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore emerging trends in web development including AI integration, serverless architecture, and new JavaScript frameworks.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min read',
    publishDate: '2024-01-10',
    slug: 'future-web-development-trends'
  },
  {
    id: '3',
    title: 'How to Build a Successful Career in Tech',
    excerpt: 'A comprehensive guide to starting and advancing your career in the technology industry, with tips from industry experts.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read',
    publishDate: '2024-01-05',
    slug: 'successful-tech-career-guide'
  }
];

export const whyLoopNest = [
  {
    icon: "💻",
    title: "প্রজেক্ট বেইজড লার্নিং",
    description: "শেখা শুধু তাত্ত্বিক না, শেখা হবে স্কিলভিত্তিক এবং প্রজেক্ট এর মাধ্যমে।",
  },
  {
    icon: "🎯",
    title: "লাইফটাইম সাপোর্ট",
    description: "কোর্স চলাকালীন থাকবে ২৪/৭ সাপোর্ট এবং কোর্স শেষ হলেও লাইফটাইম সাপোর্ট থাকবে।",
  },
  {
    icon: "💰",
    title: "অ্যাফোর্ডেবল প্রাইসে সেরা লার্নিং",
    description:
      "কোর্সের দাম হবে সবার সাধ্যের মাঝে তবে শেখা হবে সবার থেকে বেস্ট। কারণ আমরা দিচ্ছি ভ্যালু, যাতে সবাই শিখতে পারে এবং গড়তে পারে তাদের ক্যারিয়ার।",
  },
  {
    icon: "🔍",
    title: "জব প্লেসমেন্ট সাপোর্ট",
    description: "কোর্স শেষে থাকবে জব প্লেসমেন্ট সাপোর্ট, যেখানে আপনাকে স্পেশাল গাইডলাইনের মাধ্যমে চাকরির বাজারের জন্যে তৈরি করা হবে।",
  },
  {
    icon: "📹",
    title: "ইন্ড্রাস্টি লেভেল প্রজেক্ট, এসাইনমেন্ট",
    description:
      "আমাদের কোর্সের প্রতিটা প্রজেক্ট, এসাইনমেন্ট এবং কুইজ সব হবে ইন্ড্রাস্টি স্ট্যান্ডার্ড, যাতে কোর্স শেষে আপনার পোর্টফলিও হবে বাকিদের থেকে আলাদা।",
  },
  {
    icon: "🎓",
    title: "আপডেটেড মডিউল",
    description: "আমাদের কোর্সের প্রতিটা মডিউল থাকে আপডেটেড, যাতে করে শেখা হয় সময় এর সাথে তাল মিলিয়ে।",
  },
  {
    icon: "👥",
    title: "স্টুডেন্ট ফ্রেন্ডলি লার্নিং পরিবেশ",
    description: "আমরা শুধু কোর্স করাই না, আমরা আপনাদের দিচ্ছি একটা পরিবেশ যেটা হবে স্টুডেন্ট ফ্রেন্ডলি এবং শেখা হবে সেরাদের সেরা।",
  },
  {
    icon: "🏆",
    title: "সেরা মেন্টর প্যানেল",
    description:
      "আমরা আমাদের প্রতিটা কোর্সে আপনাদের জন্যে খুঁজে বের করি সেরা মেন্টরদের, যারা শুধু শেখাবে না বরং হয়ে উঠবে আপনাদের লার্নিং জার্নির গাইড।",
  },
]
