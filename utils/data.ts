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
    image: 'https://i.ibb.co.com/fdP705B6/459861866-828083206150976-3652064759255190968-n.jpg',
    content: '১৪ দিনের ওয়েব ডিজাইন বুটক্যাম্পে জয়েন করাই হয়েছিল আগের ফ্রী পাইথন ক্লাসগুলো থেকে। পাইথনের মতোই ওয়েব ডিজাইনের ক্লাস গুলোও খুবই স্মুথ ছিল। Md Ha San ভাই HTML, CSS  এবং Ettisaf Rup ভাই JS ও গিটের ক্লাসগুলো খুব সহজভাবে আমাদের বুঝিয়ে দিয়েছেন। Tahsin Ahmad ভাইয়ের ভাইব কোডিং ক্লাস সহ সকল মেন্টরদের সার্বক্ষণিক মেন্টরশিপ অনেক হেল্পফুল ছিল ।ভবিষ্যতে এই সেক্টরে থাকলে এইগুলো নিঃসন্দেহে অনেক সাহায্য করবে। ধন্যবাদ।',
    rating: 5
  },
  {
    id: '2',
    name: 'Saker Ahmed Hridoy',
    role: 'Founder at NST BIKER',
    image: 'https://i.ibb.co.com/M5541Rz1/546472717-3208857839317581-3952137094712850883-n.jpg',
    content: 'আমি Saker Ahmed Hridoy সম্প্রতি Loop Nest-এর ১৫ দিনের HTML5, CSS3 এবং JavaScript বুটক্যাম্পে অংশগ্রহণ করেছি, এবং অভিজ্ঞতাটি ছিল সত্যিই চমৎকার। HTML ও CSS এর ক্লাস নিয়েছেন হাসান ভাই, যিনি খুব সহজ ও বাস্তব উদাহরণ দিয়ে প্রতিটি টপিক সুন্দরভাবে বুঝিয়েছেন। তার শেখানোর স্টাইল ছিল গঠনমূলক এবং শিক্ষার্থীবান্ধব। JavaScript এর ক্লাস নিয়েছেন রুপ ভাই, যিনি মাত্র তিনটি লাইভ ক্লাসে খুব স্পষ্টভাবে এবং ধাপে ধাপে JavaScript এর বেসিক কনসেপ্টগুলো আমাদেরকে শিখিয়েছেন। নতুনদের জন্য এই ক্লাসগুলো বেশ উপকারী ছিল। তবে আমার মনে হয়েছে, যদি রেকর্ডেড ক্লাসের পরিবর্তে প্রতিটি ক্লাসই লাইভ হত, তাহলে ইন্টার‍অ্যাকশন আরও বাড়ত এবং শেখার অভিজ্ঞতাটিও আরও সমৃদ্ধ হতো। এছাড়া তাহসিন ভাইয়ের "বুলেট ভাইব কোডিং" এবং AI ব্যাখ্যা ছিল একেবারে ফ্রিহিটের মতো — সহজ, গতিময় ও আনন্দদায়ক। তার শেখানোর স্টাইল কোডিংকে যেন আরও জীবন্ত করে তুলেছিল। সব মিলিয়ে, এই বুটক্যাম্পটি ওয়েব ডেভেলপমেন্ট শেখার একটি দারুণ শুরু ছিল। Loop Nest এবং মেন্টরদের প্রতি কৃতজ্ঞতা জানাই এমন একটি শিক্ষামূলক অভিজ্ঞতা দেওয়ার জন্য। বিশেষভাবে প্রভাবিত হয়েছি রুপ ভাইয়ের ক্লাসগুলোতে। মিস করবো রুপ ভাই। আপনার নাম্বার সেভ করে রেখেছি যেকোন দিন যেকোন সময় প্রয়োজনে অপ্রয়োজনে আপনার কথা মনে হলেই নক দিবো ইন-শা-আল্লাহ।',
    rating: 5
  },
  {
    id: '3',
    name: 'Dip Paul  (দ্বীপ)',
    role: 'N/A',
    image: 'https://i.ibb.co.com/P3JqGnG/Whats-App-Image-2025-09-13-at-12-11-28-PM.jpg',
    content: 'ওয়েব ডেভেলপমেন্টের ১৫ বেসিক কোর্স করেছিলাম। খুঁটিনাটিঅনেক কিছুই কভার করেছি এই ১৫ দিনের কোর্সে। তাহসিন ভাই, হাসান ভাই , রূপ ভাই এবং সর্বোপরি লুপনেস্টের জন্য শুভকামনা রইলো। Loop Nest এবং মেন্টরদের প্রতি কৃতজ্ঞতা জানাই',
    rating: 5
  },
  {
    id: '4',
    name: 'Sazzad Redefined ',
    role: 'N/A',
       image: 'https://i.ibb.co.com/prj1zrBf/544896049-122173675652465831-9068802048151450015-n.jpg',
    content: "As a non-technical background though I was very sick during the course I tried my best to do & found very easy & explaining all the things of Our course. The HTML, CSS, JS part has been very interesting to me. Rest things are yet to cope up as can't concentrate fully due to illness (dengu patient).",
    rating: 5
  },
 
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'এ.আই এর গল্প',
    excerpt: 'একসময় যা ছিল কল্পবিজ্ঞানের গহীনে লুকানো এক স্বপ্ন, আজ তা আমাদের দৈনন্দিন জীবনের অবিচ্ছেদ্য অংশ হয়ে উঠেছে। আর সেটা হলো কৃত্রিম বুদ্ধিমত্তা (Artificial Intelligence), সংক্ষেপে এআই (AI)। রাতের আকাশে তারার মেলার মতো অসংখ্য সম্ভাবনা নিয়ে এআই আজ আমাদের সামনে। কিন্তু কী এই এআই? কীভাবে তা কাজ করে? আর কীভাবে আপনি হয়ে উঠবেন একজন এআই ইঞ্জিনিয়ার? চলুন, গল্পের মাধ্যমে জেনে নিই এআই এর এই চমকপ্রদ দুনিয়া সম্পর্কে',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '5 min read',
    publishDate: '2024-01-15',
    slug: 'https://www.linkedin.com/pulse/%E0%A6%8F%E0%A6%86%E0%A6%87-%E0%A6%8F%E0%A6%B0-%E0%A6%97%E0%A6%B2%E0%A6%AA-tahsin-ahmad-oyaqc?utm_source=share&utm_medium=member_android&utm_campaign=share_via'
  },
  {
    id: '2',
    title: 'মেশিন লার্নিং (ML): কৃত্রিম বুদ্ধিমত্তার প্রথম পাঠ',
    excerpt: 'কল্পনা করুন আপনি একজন প্রোগ্রামার।আপনি প্রতিদিন প্রবলেম দেখেন, সলিউশন দেখেন, সমাধান করেন, ভুল করেন, আবার ঠিক করেন। একসময় আপনি এতটাই ভালো প্রোগ্রামার হয়ে উঠলেন যে নতুন প্রশ্ন দেখলেই আপনি উত্তরটা অনুমান করতে পারেন। আর এটাই মেশিন লার্নিং।Machine Learning হলো এমন একটি পদ্ধতি, যেখানে একটি মেশিন (কম্পিউটার) নিজেই অভিজ্ঞতা (data) থেকে শেখে, এবং ভবিষ্যতে নতুন পরিস্থিতিতে সিদ্ধান্ত নিতে পারে। ধরা যাক, আপনি একটি মেশিনকে হাজার হাজার ফলের ছবি দেখালেন। যেমনঃ আপেল, কলা, আম, কমলা। প্রথমে সে কিছুই বোঝে না। কিন্তু সময়ের সাথে সাথে, আপনি তাকে শেখান কোনটা আপেল, কোনটা কলা। ধীরে ধীরে সে শিখে ফেলে। এরপর আপনি যখন নতুন একটি ফলের ছবি দেন, তখন সে বলে দেয়: "এটা একটা আপেল/আম“ আর এই ভবিষ্যদ্বাণী করার ক্ষমতাটাই হলো Machine Learning।',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min read',
    publishDate: '2024-01-10',
    slug: 'https://www.linkedin.com/pulse/%E0%A6%AE%E0%A6%B6%E0%A6%A8-%E0%A6%B2%E0%A6%B0%E0%A6%A8-ml-%E0%A6%95%E0%A6%A4%E0%A6%B0%E0%A6%AE-%E0%A6%AC%E0%A6%A6%E0%A6%A7%E0%A6%AE%E0%A6%A4%E0%A6%A4%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%AA%E0%A6%A0-tahsin-ahmad-ecx5c?utm_source=share&utm_medium=member_android&utm_campaign=share_via'
  },
  {
    id: '3',
    title: 'জেনারেটিভ এআই (Generative AI)',
    excerpt: "কল্পনা করুন, একটি মেশিন নিজে থেকেই কবিতা লিখছে, ছবি আঁকছে, গান তৈরি করছে, এমনকি নতুন গল্পও শোনাচ্ছে! এটি কেবল আদেশ পালন করছে না, বরং আপনার কল্পনাকেও ছাড়িয়ে যাচ্ছে। আর এই জাদুকরি প্রযুক্তিটির নামই হলো জেনারেটিভ এআই (Generative AI) বা ছোট করে GenAI ; সহজ কথায়, জেনারেটিভ এআই হলো কৃত্রিম বুদ্ধিমত্তার এমন একটি শাখা যা নতুন, মৌলিক ডেটা তৈরি করতে পারে, যা আগে থেকে বিদ্যমান ডেটার সাথে সাদৃশ্যপূর্ণ কিন্তু হুবহু একই নয়। এটি কেবল শেখা বা ভবিষ্যদ্বাণী করাই নয়, বরং 'সৃষ্টি' করাই এর মূল লক্ষ্য। যদি মেশিন লার্নিং কোনো ডেটা বিশ্লেষণ করে প্যাটার্ন খুঁজে বের করে, তবে জেনারেটিভ এআই সেই প্যাটার্নগুলো ব্যবহার করে সম্পূর্ণ নতুন ডেটা তৈরি করে, যা মানুষের তৈরি করা কিছুর মতোই প্রাকৃতিক ও বিশ্বাসযোগ্য মনে হয়।",
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read',
    publishDate: '2024-01-05',
    slug: 'https://www.linkedin.com/pulse/%E0%A6%9C%E0%A6%A8%E0%A6%B0%E0%A6%9F%E0%A6%AD-%E0%A6%8F%E0%A6%86%E0%A6%87-generative-ai-tahsin-ahmad-dgbdc?utm_source=share&utm_medium=member_android&utm_campaign=share_via'
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
