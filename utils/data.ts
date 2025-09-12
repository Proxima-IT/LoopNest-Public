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
    name: 'Sadia Ashra',
    role: 'N/A',
    image: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-1/459861866_828083206150976_3652064759255190968_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=KolphMLfeiIQ7kNvwEM6UZy&_nc_oc=AdnUdDL89LvxuQGXcrcO2kgQkAPFmKtjjpWcDmL3Xw7jKsf4v-aA1V0uuvxXGeUpwBM&_nc_zt=24&_nc_ht=scontent.fcgp36-1.fna&_nc_gid=VcFtNzxGe_MhDRnCXpvdvg&oh=00_AfaJ1xgr_98XnSrc65I_Y_OokGSerDQ44go5TX3unbaluQ&oe=68C99584',
    content: '১৪ দিনের ওয়েব ডিজাইন বুটক্যাম্পে জয়েন করাই হয়েছিল আগের ফ্রী পাইথন ক্লাসগুলো থেকে। পাইথনের মতোই ওয়েব ডিজাইনের ক্লাস গুলোও খুবই স্মুথ ছিল। Md Ha San ভাই HTML, CSS  এবং Ettisaf Rup ভাই JS ও গিটের ক্লাসগুলো খুব সহজভাবে আমাদের বুঝিয়ে দিয়েছেন। Tahsin Ahmad ভাইয়ের ভাইব কোডিং ক্লাস সহ সকল মেন্টরদের সার্বক্ষণিক মেন্টরশিপ অনেক হেল্পফুল ছিল ।ভবিষ্যতে এই সেক্টরে থাকলে এইগুলো নিঃসন্দেহে অনেক সাহায্য করবে। ধন্যবাদ।',
    rating: 5
  },
  {
    id: '2',
    name: 'Saker Ahmed Hridoy',
    role: 'Founder at NST BIKER',
    image: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-6/542753017_3194166497453382_6329904304193556114_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DYfPA3wML5UQ7kNvwFwodJE&_nc_oc=AdkgPb6QXuOscq7fOlshD_gNdOnDWPU0xnFCD61_D8GdJ27-ioHIO2aLHfzosg5L8Lc&_nc_zt=23&_nc_ht=scontent.fcgp36-1.fna&_nc_gid=tNFnBZTkyEpjfbumDOwvjg&oh=00_AfZlCWWFsSn_3xnbFa83o-8s_OQp4SBzFZmu1ooxoKzOKQ&oe=68C98DD5',
    content: 'আমি Saker Ahmed Hridoy সম্প্রতি Loop Nest-এর ১৫ দিনের HTML5, CSS3 এবং JavaScript বুটক্যাম্পে অংশগ্রহণ করেছি, এবং অভিজ্ঞতাটি ছিল সত্যিই চমৎকার। HTML ও CSS এর ক্লাস নিয়েছেন হাসান ভাই, যিনি খুব সহজ ও বাস্তব উদাহরণ দিয়ে প্রতিটি টপিক সুন্দরভাবে বুঝিয়েছেন। তার শেখানোর স্টাইল ছিল গঠনমূলক এবং শিক্ষার্থীবান্ধব। JavaScript এর ক্লাস নিয়েছেন রুপ ভাই, যিনি মাত্র তিনটি লাইভ ক্লাসে খুব স্পষ্টভাবে এবং ধাপে ধাপে JavaScript এর বেসিক কনসেপ্টগুলো আমাদেরকে শিখিয়েছেন। নতুনদের জন্য এই ক্লাসগুলো বেশ উপকারী ছিল। তবে আমার মনে হয়েছে, যদি রেকর্ডেড ক্লাসের পরিবর্তে প্রতিটি ক্লাসই লাইভ হত, তাহলে ইন্টার‍অ্যাকশন আরও বাড়ত এবং শেখার অভিজ্ঞতাটিও আরও সমৃদ্ধ হতো। এছাড়া তাহসিন ভাইয়ের "বুলেট ভাইব কোডিং" এবং AI ব্যাখ্যা ছিল একেবারে ফ্রিহিটের মতো — সহজ, গতিময় ও আনন্দদায়ক। তার শেখানোর স্টাইল কোডিংকে যেন আরও জীবন্ত করে তুলেছিল। সব মিলিয়ে, এই বুটক্যাম্পটি ওয়েব ডেভেলপমেন্ট শেখার একটি দারুণ শুরু ছিল। Loop Nest এবং মেন্টরদের প্রতি কৃতজ্ঞতা জানাই এমন একটি শিক্ষামূলক অভিজ্ঞতা দেওয়ার জন্য। বিশেষভাবে প্রভাবিত হয়েছি রুপ ভাইয়ের ক্লাসগুলোতে। মিস করবো রুপ ভাই। আপনার নাম্বার সেভ করে রেখেছি যেকোন দিন যেকোন সময় প্রয়োজনে অপ্রয়োজনে আপনার কথা মনে হলেই নক দিবো ইন-শা-আল্লাহ।',
    rating: 5
  },
  {
    id: '3',
    name: 'Dip Paul  (দ্বীপ)',
    role: 'N/A',
    image: 'https://scontent.fcgp40-1.fna.fbcdn.net/v/t39.30808-1/529311459_2979063882280188_6162635582155627403_n.jpg?stp=c0.135.960.960a_dst-jpg_s160x160_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_ohc=wKxH8UJSbWoQ7kNvwFHU97Z&_nc_oc=Adl5ux299FKgK7XaJK5HLqoPFEClSRjOITc_3qq1Px-RDY5CKX27TR3bX0a0YailgsI&_nc_zt=24&_nc_ht=scontent.fcgp40-1.fna&_nc_gid=qvp4rMC_eBi-3vBLIRdUrA&oh=00_AfbUjimU2h7-jMMHoCRADz58SoSzoGuvv5EdnIuN-HvwFg&oe=68C98837',
    content: 'ওয়েব ডেভেলপমেন্টের ১৫ বেসিক কোর্স করেছিলাম। খুঁটিনাটিঅনেক কিছুই কভার করেছি এই ১৫ দিনের কোর্সে। তাহসিন ভাই, হাসান ভাই , রূপ ভাই এবং সর্বোপরি লুপনেস্টের জন্য শুভকামনা রইলো। Loop Nest এবং মেন্টরদের প্রতি কৃতজ্ঞতা জানাই',
    rating: 5
  },
  {
    id: '4',
    name: 'Sazzad Redefined ',
    role: 'N/A',
       image: 'https://scontent.fcgp36-1.fna.fbcdn.net/v/t39.30808-6/544896049_122173675652465831_9068802048151450015_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zyHi1LZgyqcQ7kNvwGc-bhi&_nc_oc=AdmqUQCxoVZ1Ovt7GxHon26l-iAEILO6Cj94SfoscaqUnNl5lRJmNyKvVjmPZXC-M3M&_nc_zt=23&_nc_ht=scontent.fcgp36-1.fna&_nc_gid=KEqFIAibUIUNYAxDMalMUg&oh=00_AfZE6TgyjTuH7m-Z2IaHcWx7GaLOZzu6bR3snwZ25PPxiw&oe=68C9B1AC',
    content: "As a non-technical background though I was very sick during the course I tried my best to do & found very easy & explaining all the things of Our course. The HTML, CSS, JS part has been very interesting to me. Rest things are yet to cope up as can't concentrate fully due to illness (dengu patient).",
    rating: 5
  },
 
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
