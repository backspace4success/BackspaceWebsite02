export interface Workshop {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
  topics: string[];
  outcomes: string[];
  prerequisites: string;
  videos: {
    day: number;
    title: string;
    url: string;
  }[];
  nextDate: string;
  price: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const workshops: Workshop[] = [
  {
    id: 1,
    title: "Start Work Shop",
    description: "Introduction TO Computer Science Workshop",
    level: "Beginner",
    duration: "3 days",
    rating: 4.9,
    image: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/WorkshopCover01.png?raw=true",
    topics: [
      "Computeing Landscape",
      "Computer History",
      "Computer Hardware and Software Components",
      "Logic Gates",
      "Numbering Systems",
      "Introduction To Programming and first line of code"
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Understand core programming concepts",
      "Create interactive web applications",
      "Deploy websites to production"
    ],
    prerequisites: "No prior experience required",
    videos: [
      {
        day: 1,
        title: "Day One: Computeing Landscape, and Computer History",
        url: "https://www.youtube.com/embed/-p6KQv1qVWY"
      },
      {
        day: 2,
        title: "Day Two: Computer Hardware, and Software Components and Logic Gates",
        url: "https://youtu.be/h_B0VlhcGj8"
      },
      {
        day: 3,
        title: "Day Three: Numbering Systems, and Introduction To Programming and first line of code",
        url: "https://youtu.be/pM8yfkQ-LuM"
      }
    ],
    nextDate: "2025-01-25",
    price: 0,
    instructor: {
      name: "Hassan Anwar",
      role: "Lead Instructor",
      avatar: "https://github.com/anwar211944/BackspaceWebsite/blob/main/img/anwar.png?raw=true"
    }

  },
  // {
  //   id: 2,
  //   title: "Data Science Essentials",
  //   description: "Master the fundamentals of data science using Python. Learn data analysis, visualization, and basic machine learning concepts through practical exercises.",
  //   level: "Intermediate",
  //   duration: "4 days",
  //   rating: 4.8,
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  //   topics: [
  //     "Python for Data Science",
  //     "Data Analysis with Pandas",
  //     "Data Visualization",
  //     "Intro to Machine Learning"
  //   ],
  //   outcomes: [
  //     "Analyze complex datasets",
  //     "Create insightful visualizations",
  //     "Build predictive models",
  //     "Make data-driven decisions"
  //   ],
  //   prerequisites: "Basic Python knowledge",
  //   videos: [
  //     {
  //       day: 1,
  //       title: "Python Data Science Basics",
  //       url: "https://youtu.be/example1"
  //     },
  //     {
  //       day: 2,
  //       title: "Data Analysis Deep Dive",
  //       url: "https://youtu.be/example2"
  //     },
  //     {
  //       day: 3,
  //       title: "Visualization Techniques",
  //       url: "https://youtu.be/example3"
  //     },
  //     {
  //       day: 4,
  //       title: "Machine Learning Fundamentals",
  //       url: "https://youtu.be/example4"
  //     }
  //   ],
  //   nextDate: "2024-04-22",
  //   price: 1299,
  //   instructor: {
  //     name: "Sarah Johnson",
  //     role: "Data Scientist",
  //     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
  //   }
  // },
  // {
  //   id: 3,
  //   title: "Mobile App Development",
  //   description: "Learn to build cross-platform mobile applications using React Native. Create professional-grade apps that work on both iOS and Android.",
  //   level: "Intermediate",
  //   duration: "5 days",
  //   rating: 4.7,
  //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  //   topics: [
  //     "React Native Fundamentals",
  //     "Mobile UI/UX Design",
  //     "State Management",
  //     "Native Device Features",
  //     "App Deployment"
  //   ],
  //   outcomes: [
  //     "Build native mobile apps",
  //     "Implement responsive designs",
  //     "Handle device features",
  //     "Deploy to app stores"
  //   ],
  //   prerequisites: "JavaScript & React knowledge",
  //   videos: [
  //     {
  //       day: 1,
  //       title: "React Native Setup & Basics",
  //       url: "https://youtu.be/example5"
  //     },
  //     {
  //       day: 2,
  //       title: "UI Components & Styling",
  //       url: "https://youtu.be/example6"
  //     },
  //     {
  //       day: 3,
  //       title: "Navigation & State",
  //       url: "https://youtu.be/example7"
  //     },
  //     {
  //       day: 4,
  //       title: "Native Features Integration",
  //       url: "https://youtu.be/example8"
  //     },
  //     {
  //       day: 5,
  //       title: "Deployment & Publishing",
  //       url: "https://youtu.be/example9"
  //     }
  //   ],
  //   nextDate: "2024-05-01",
  //   price: 1499,
  //   instructor: {
  //     name: "Michael Chen",
  //     role: "Mobile Developer",
  //     avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  //   }
  // },
  // {
  //   id: 4,
  //   title: "Cloud Computing Workshop",
  //   description: "Get hands-on experience with AWS cloud services. Learn to deploy, scale, and manage applications in the cloud environment.",
  //   level: "Advanced",
  //   duration: "4 days",
  //   rating: 4.9,
  //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
  //   topics: [
  //     "AWS Core Services",
  //     "Cloud Architecture",
  //     "Serverless Computing",
  //     "DevOps Practices"
  //   ],
  //   outcomes: [
  //     "Deploy cloud applications",
  //     "Implement serverless architecture",
  //     "Manage cloud infrastructure",
  //     "Optimize cloud costs"
  //   ],
  //   prerequisites: "Basic cloud knowledge",
  //   videos: [
  //     {
  //       day: 1,
  //       title: "AWS Fundamentals",
  //       url: "https://youtu.be/example10"
  //     },
  //     {
  //       day: 2,
  //       title: "Cloud Architecture Patterns",
  //       url: "https://youtu.be/example11"
  //     },
  //     {
  //       day: 3,
  //       title: "Serverless Development",
  //       url: "https://youtu.be/example12"
  //     },
  //     {
  //       day: 4,
  //       title: "DevOps & Deployment",
  //       url: "https://youtu.be/example13"
  //     }
  //   ],
  //   nextDate: "2024-05-15",
  //   price: 1699,
  //   instructor: {
  //     name: "David Wilson",
  //     role: "Cloud Architect",
  //     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
  //   }
  // },
  // {
  //   id: 5,
  //   title: "Cybersecurity Fundamentals",
  //   description: "Learn essential cybersecurity concepts and practices. Understand common threats and how to protect against them.",
  //   level: "Beginner",
  //   duration: "3 days",
  //   rating: 4.8,
  //   image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  //   topics: [
  //     "Security Fundamentals",
  //     "Network Security",
  //     "Web Security",
  //     "Security Best Practices"
  //   ],
  //   outcomes: [
  //     "Understand security threats",
  //     "Implement security measures",
  //     "Protect web applications",
  //     "Follow security best practices"
  //   ],
  //   prerequisites: "Basic IT knowledge",
  //   videos: [
  //     {
  //       day: 1,
  //       title: "Security Basics",
  //       url: "https://youtu.be/example14"
  //     },
  //     {
  //       day: 2,
  //       title: "Network & Web Security",
  //       url: "https://youtu.be/example15"
  //     },
  //     {
  //       day: 3,
  //       title: "Security Implementation",
  //       url: "https://youtu.be/example16"
  //     }
  //   ],
  //   nextDate: "2024-05-20",
  //   price: 1199,
  //   instructor: {
  //     name: "Emily Chen",
  //     role: "Security Expert",
  //     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  //   }
  // }
];