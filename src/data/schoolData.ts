// ============================================================
// EXCELSIOR APEX ACADEMY — Premium Flagship Dataset (Design 3 - NPR 35K Tier)
// Integrated with centralized multi-school administration hooks
// ============================================================

export interface SchoolProfile {
  name: string;
  shortName: string;
  tagline: string;
  established: string;
  address: string;
  phone: string;
  altPhone: string;
  email: string;
  admissionsEmail: string;
  hours: string;
  affiliation: string;
  accreditation: string;
  stats: {
    yearsExcellence: number;
    studentsEnrolled: number;
    facultyMembers: number;
    seePassRate: string;
    gpa4Rate: string;
    scholarshipsDisbursed: string;
  };
}

export const schoolProfile: SchoolProfile = {
  name: "Excelsior Apex Academy",
  shortName: "Excelsior Apex",
  tagline: "Inspiring Intellectual Brilliance, Character & Global Leadership",
  established: "1994",
  address: "Jawalakhel, Lalitpur (Opposite Central Zoo Road), Nepal",
  phone: "01-5541234",
  altPhone: "9801234567",
  email: "info@excelsiorapex.edu.np",
  admissionsEmail: "admissions@excelsiorapex.edu.np",
  hours: "Sunday – Friday: 8:30 AM – 4:30 PM",
  affiliation: "National Examinations Board (NEB) & Cambridge International",
  accreditation: "Ranked #1 Premier Academy in Kathmandu Valley",
  stats: {
    yearsExcellence: 32,
    studentsEnrolled: 3200,
    facultyMembers: 110,
    seePassRate: "99.8%",
    gpa4Rate: "52 Toppers",
    scholarshipsDisbursed: "NPR 12M+"
  }
};

export const heroSlides = [
  {
    image: "/images/herosection image.jpg",
    badge: "Rated #1 Model School in Kathmandu Valley · Est. 1994",
    title: "Cultivating Minds of Distinction & Character",
    subtitle: "Where traditional Nepali values meet 21st-century global academic excellence. Preparing scholars for top global universities and lifelong leadership.",
    ctaPrimary: "Explore Admissions 2025–26",
    ctaSecondary: "Experience 360° Virtual Tour"
  },
  {
    image: "/images/campus-aerial.jpg",
    badge: "15+ Ropani Ultra-Modern Green Campus · Jawalakhel",
    title: "World-Class Infrastructure Built for Innovation",
    subtitle: "Robotics studios, digital amphitheaters, Olympic standard sports courts, and AI-enabled smart classrooms designed for visionary thinkers.",
    ctaPrimary: "View Campus Facilities",
    ctaSecondary: "Download Prospectus"
  },
  {
    image: "/images/classroom.jpg",
    badge: "99.8% Board Exam Distinction Rate · National SEE Record",
    title: "Empowering Students to Achieve Perfect 4.0 GPAs",
    subtitle: "Personalized faculty mentorship, Cambridge-integrated pedagogy, and intensive career guidance for medical, engineering, and business aspirants.",
    ctaPrimary: "View Board Results",
    ctaSecondary: "Apply for Scholarships"
  }
];

export const academicPrograms = [
  {
    id: "foundation",
    level: "Early Childhood & Kindergarten",
    grades: "Pre-Primary, Nursery, LKG, UKG",
    index: "01",
    color: "#d4af37",
    tag: "Montessori & Play-Way",
    desc: "A warm, joyful environment blending Montessori techniques and sensory exploration to spark boundless curiosity, early language acquisition, and social warmth.",
    features: ["Child-centered sensory rooms", "Early phonics & bilingual literacy", "Fine motor skills & creative arts", "Nutritious dining & nap suites"],
    subjects: ["English Literacy", "Nepali Phonics", "Numeracy Exploration", "Sensory Science", "Art & Movement", "Music & Storytelling"]
  },
  {
    id: "primary",
    level: "Primary School",
    grades: "Grade 1 – Grade 5",
    index: "02",
    color: "#1e3a8a",
    tag: "Inquiry & Discovery",
    desc: "Nurturing solid foundations in literacy, logic, digital skills, and moral citizenship through experiential laboratory learning and collaborative projects.",
    features: ["Junior STEM & Coding Labs", "Reading Marathon program", "Language immersion labs", "Physical education & martial arts"],
    subjects: ["English Language & Literature", "Nepali", "Mathematics", "Integrated Science", "Social Studies & Civics", "Computer Science", "Visual Arts"]
  },
  {
    id: "middle",
    level: "Lower Secondary",
    grades: "Grade 6 – Grade 8",
    index: "03",
    color: "#059669",
    tag: "Analytical Rigor",
    desc: "Fostering analytical depth, scientific inquiry, debate fluency, and leadership. Students begin project-based research and inter-school academic competitions.",
    features: ["Dedicated Physics, Chem & Bio Labs", "Model United Nations (MUN) Club", "Advanced Robotics & AI basics", "Youth Leadership Council"],
    subjects: ["English", "Nepali", "Compulsory & Optional Math", "General Science", "Social Studies", "Information Technology", "Health & PE"]
  },
  {
    id: "secondary",
    level: "Secondary School (SEE)",
    grades: "Grade 9 – Grade 10",
    index: "04",
    color: "#c2410c",
    tag: "Board Mastery",
    desc: "Intensive preparation for the Secondary Education Examination (SEE) combined with career aptitude assessment, Olympiad training, and leadership portfolios.",
    features: ["SEE Topper Mentorship cell", "Daily diagnostic mock exams", "Comprehensive lab practicals", "Career guidance counseling"],
    subjects: ["English", "Nepali", "Compulsory Math", "Optional Math", "Science & Technology", "Social Studies & Civics", "Accountancy / Computer"]
  },
  {
    id: "science",
    level: "Higher Secondary — Science (+2)",
    grades: "Grade 11 & Grade 12 (NEB)",
    index: "05",
    color: "#7c3aed",
    tag: "Pre-Med & Pre-Eng",
    desc: "A rigorous STEM curriculum designed for high-achieving aspirants targeting IOM/MOE Medical Entrance, IOE Engineering, and Ivy League/Global scholarships.",
    features: ["Specialized entrance prep classes", "University-standard research labs", "Guest lectures by top professors", "Physics/Chem Olympiad coaching"],
    subjects: ["Physics", "Chemistry", "Biology / Mathematics", "English", "Nepali", "Computer Science"]
  },
  {
    id: "management",
    level: "Higher Secondary — Management (+2)",
    grades: "Grade 11 & Grade 12 (NEB)",
    index: "06",
    color: "#b45309",
    tag: "Business & FinTech",
    desc: "Developing tomorrow's entrepreneurs, economists, CA professionals, and corporate leaders through case study methodologies, business simulations, and stock-trading workshops.",
    features: ["Stock market trading simulations", "Startup incubation hub", "CA Foundation preparatory classes", "Corporate mentorship visits"],
    subjects: ["Principles of Accounting", "Economics", "Business Studies", "Business Math / Computer", "English", "Nepali"]
  }
];

export const facultyMembers = [
  {
    id: 1,
    name: "Prof. Dr. Rajan Kumar Sharma",
    role: "Executive Principal & Director",
    department: "Executive Leadership",
    qualification: "Ph.D. in Educational Administration (TU), M.Ed. (UK)",
    experience: "28+ Years",
    image: "/images/principal.jpg",
    bio: "Visionary educational leader dedicated to benchmarking Nepali schooling against top global standards with integrity and compassionate rigor.",
    subjects: ["Educational Philosophy", "Leadership Studies"]
  },
  {
    id: 2,
    name: "Mrs. Sunita Adhikari",
    role: "Vice Principal (Academic Affairs)",
    department: "Executive Leadership",
    qualification: "M.Sc. Physics (TU), M.Ed. in Curriculum Design",
    experience: "22 Years",
    image: null,
    initial: "SA",
    bio: "Pioneered STEM-integrated learning frameworks and institutional quality assurance systems across all grade divisions.",
    subjects: ["Advanced Physics", "Curriculum Strategy"]
  },
  {
    id: 3,
    name: "Er. Bikash Pradhan",
    role: "Head of STEM & Innovation",
    department: "Science & Technology",
    qualification: "M.E. in Robotics & AI (Pulchowk Campus)",
    experience: "15 Years",
    image: null,
    initial: "BP",
    bio: "Chief mentor for Nepal's International Robotics Olympiad delegation. Passionate about empowering young coders and hardware inventors.",
    subjects: ["Robotics", "Computer Science", "Artificial Intelligence"]
  },
  {
    id: 4,
    name: "Dr. Anita Tamang",
    role: "Head of Life Sciences",
    department: "Science & Technology",
    qualification: "Ph.D. in Biochemistry",
    experience: "18 Years",
    image: null,
    initial: "AT",
    bio: "Published researcher in medical biochemistry and chief counselor for students aspiring for MBBS & Biotechnology degrees.",
    subjects: ["Chemistry", "Biochemistry", "Medical Entrance Prep"]
  },
  {
    id: 5,
    name: "Mr. Dipendra Shrestha",
    role: "Head of Humanities & Literature",
    department: "Humanities & Languages",
    qualification: "M.A. English Literature (Gold Medalist), B.Ed.",
    experience: "16 Years",
    image: null,
    initial: "DS",
    bio: "Renowned orator, theater director, and patron of the Excelsior Parliamentary Debating Society and Annual Literary Fest.",
    subjects: ["English Literature", "Rhetoric & Debate", "Creative Writing"]
  },
  {
    id: 6,
    name: "Mr. Sajan Gurung",
    role: "Director of Athletics & Sports",
    department: "Sports & Physical Education",
    qualification: "M.P.Ed., AFC Certified Football Coach",
    experience: "14 Years",
    image: null,
    initial: "SG",
    bio: "Former national athletics medalist who has steered Excelsior teams to multiple inter-school football, basketball, and table tennis championships.",
    subjects: ["Athletics", "Football Conditioning", "Sports Physiology"]
  },
  {
    id: 7,
    name: "Mrs. Kamala Poudel",
    role: "Head of Primary School",
    department: "Primary Division",
    qualification: "M.Ed. in Child Psychology & Primary Education",
    experience: "17 Years",
    image: null,
    initial: "KP",
    bio: "Specialist in early literacy phonetics, differentiated instruction, and positive behavioral reinforcement.",
    subjects: ["Primary Pedagogy", "Integrated Social Sciences"]
  },
  {
    id: 8,
    name: "Mr. Rajesh Karki",
    role: "Senior Faculty — Mathematics",
    department: "Mathematics",
    qualification: "M.Sc. Pure Mathematics",
    experience: "14 Years",
    image: null,
    initial: "RK",
    bio: "Master educator renowned for making complex calculus and trigonometry effortlessly intuitive for board exam toppers.",
    subjects: ["Optional Mathematics", "Calculus", "Mathematical Olympiad"]
  }
];

export const resultsData = {
  summary: {
    passRate: "99.8%",
    gpa4Count: 52,
    gpa36Count: 148,
    averageGpa: "3.84",
    totalAppeared: 220
  },
  yearWise: [
    { year: "2024", passRate: "99.8%", gpa4: 52, gpa36: 148, topGpa: "4.00", seeAverage: "3.84" },
    { year: "2023", passRate: "99.4%", gpa4: 46, gpa36: 135, topGpa: "4.00", seeAverage: "3.79" },
    { year: "2022", passRate: "98.9%", gpa4: 38, gpa36: 124, topGpa: "4.00", seeAverage: "3.74" },
    { year: "2021", passRate: "98.5%", gpa4: 34, gpa36: 115, topGpa: "4.00", seeAverage: "3.70" }
  ],
  toppers: [
    {
      id: 1,
      name: "Aayush Shrestha",
      gpa: "4.00",
      stream: "SEE Board 2024",
      rank: "Kathmandu Valley District Topper (#1)",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
      ambition: "Robotics & Artificial Intelligence at MIT",
      quote: "The personalized mentorship, late-night doubt sessions, and research labs at Excelsior made this possible."
    },
    {
      id: 2,
      name: "Pranisha Maharjan",
      gpa: "4.00",
      stream: "SEE Board 2024",
      rank: "District Rank #2 & National Science Gold",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
      ambition: "Cardiovascular Surgery & Medical Research",
      quote: "The continuous diagnostic testing and science exhibitions pushed me to aim for pure perfection."
    },
    {
      id: 3,
      name: "Samir Adhikari",
      gpa: "3.96",
      stream: "+2 Science (NEB 2024)",
      rank: "National Board Distinction Rank",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
      ambition: "Full Scholarship at Pulchowk Campus IOE",
      quote: "The pre-engineering entrance preparation cell gave me a decisive competitive edge."
    },
    {
      id: 4,
      name: "Kritika Sharma",
      gpa: "3.95",
      stream: "+2 Management (NEB 2024)",
      rank: "Kathmandu Valley Management Rank #1",
      image: "https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
      ambition: "Chartered Accountancy (ICAI) & FinTech",
      quote: "Stock market case studies and financial modeling workshops made business concepts crystal clear."
    }
  ]
};

export const scholarshipsData = [
  {
    id: 1,
    tier: "01",
    title: "Chairman's Presidential Merit Award",
    coverage: "100% Full Tuition + Book Grant",
    eligibility: "GPA 3.90+ in SEE / Previous Terminal Examinations + Top 5 rank in Scholarship Assessment Test",
    quota: "20 Scholars per Academic Year",
    description: "Our highest honor bestowed upon exceptionally gifted scholars displaying unmatched academic rigor, intellectual curiosity, and moral character."
  },
  {
    id: 2,
    tier: "02",
    title: "Need-Based Community Scholarship",
    coverage: "50% – 100% Tuition Assistance",
    eligibility: "Verified family financial need + Minimum GPA 3.40 with consistent disciplinary conduct",
    quota: "35 Scholars per Academic Year",
    description: "Ensuring that economic hardship never prevents a brilliant, passionate child from experiencing world-class education."
  },
  {
    id: 3,
    tier: "03",
    title: "National Athlete & Sports Fellowship",
    coverage: "30% – 75% Tuition Concession",
    eligibility: "National, regional, or inter-school gold/silver medalists in recognized sports federations",
    quota: "15 Athletes per Academic Year",
    description: "Supporting promising sportsmen and women with flexible training schedules, nutrition allowances, and tournament sponsorship."
  },
  {
    id: 4,
    tier: "04",
    title: "STEM & Young Innovator Fellowship",
    coverage: "50% Tuition Waiver + Innovation Grant",
    eligibility: "Winners or finalists of National Science Olympiad, Robotics Challenge, or Hackathons",
    quota: "12 Innovators per Academic Year",
    description: "Direct research project funding, laboratory access, and mentorship for young scientific inventors and programmers."
  }
];

export const alumniStories = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    batch: "Class of 2014",
    role: "Pediatric Cardiothoracic Surgeon",
    org: "Tribhuvan University Teaching Hospital (TUTH)",
    image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    quote: "The discipline, scientific rigor, and empathy I learned in Excelsior's classrooms became the bedrock of my surgical career in Nepal."
  },
  {
    id: 2,
    name: "Rohit Majhi",
    batch: "Class of 2017",
    role: "Staff Software Engineer (AI & Cloud)",
    org: "Google (Singapore HQ)",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    quote: "Building my first robotics prototype in Excelsior's STEM lab gave me the confidence to compete and build scalable systems at Google."
  },
  {
    id: 3,
    name: "Sneha KC",
    batch: "Class of 2018",
    role: "Climate Policy Fellow & Rhodes Scholar",
    org: "University of Oxford",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=400",
    quote: "Excelsior's MUN club and literature debates taught me how to articulate policy solutions that can change environmental realities."
  }
];

export const blogArticles = [
  {
    id: 1,
    title: "How Inquiry-Led Pedagogy Transforms Rote Learning into Creative Innovation",
    category: "Modern Pedagogy",
    author: "Dr. Rajan Sharma",
    authorRole: "Executive Principal",
    date: "August 20, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8423119/pexels-photo-8423119.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    excerpt: "Why the modern global economy demands students who formulate compelling questions rather than simply memorizing standardized answers.",
    content: `Education in South Asia has historically relied on rote memorization. While foundational retention has its place, the exponential rise of generative AI and automation renders repetitive knowledge retrieval obsolete.\n\nAt Excelsior Apex, our classrooms operate on the 'Question First' methodology. Before teaching Newton's laws, students construct catapults and measure trajectories. When theory answers questions that curiosity already asked, learning becomes permanent and deeply exhilarating.`
  },
  {
    id: 2,
    title: "Cultivating Emotional Resilience: The Science Behind Student Mental Wellbeing",
    category: "Student Wellness",
    author: "Sunita Adhikari",
    authorRole: "Counseling & Wellbeing Head",
    date: "July 28, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/9489917/pexels-photo-9489917.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    excerpt: "Strategies for families and educators to navigate board exam anxiety and build unshakeable self-esteem in young adolescents.",
    content: `High expectations must always be matched with unconditional psychological safety. When students fear failure, their prefrontal cortex downregulates analytical processing.\n\nThrough mindfulness breaks, peer counseling, and dedicated mentorship circles, we teach students that setbacks are merely diagnostic data points on the road to mastery.`
  },
  {
    id: 3,
    title: "Why Arts, Music & Debate Are Essential for Medical and Engineering Aspirants",
    category: "Holistic Growth",
    author: "Dipendra Shrestha",
    authorRole: "Head of Humanities",
    date: "June 15, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8199168/pexels-photo-8199168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=800",
    excerpt: "Technical brilliance without communication, empathy, and aesthetic appreciation limits long-term leadership potential.",
    content: `The most celebrated surgeons are those who communicate with compassionate bedside manner; the most impactful engineers are those who understand human aesthetics and user empathy.\n\nOur STEM scholars participate actively in theater, inter-school debates, and classical music to build well-rounded cognitive breadth.`
  }
];

export const publicationsData = [
  {
    id: 1,
    title: "The Excelsior Apex Imperial Chronicle (2024–2025 Annual Issue)",
    volume: "Volume XXXI",
    date: "May 2025",
    pages: "148 Pages",
    cover: "/images/brochure.jpg",
    description: "The flagship annual publication featuring student research treatises, bilingual poetry, national sports chronicles, visual art galleries, and graduation reflections."
  },
  {
    id: 2,
    title: "Apex Horizon — High School STEM & AI Research Journal",
    volume: "Issue 8",
    date: "January 2025",
    pages: "56 Pages",
    cover: "/images/science-lab.jpg",
    description: "Student-authored technical papers exploring solar desalinization, computer vision algorithms, organic agriculture chemistry, and mathematics theorem proofs."
  },
  {
    id: 3,
    title: "Quarterly Academic Dispatch & Parent Review",
    volume: "Autumn Q3",
    date: "October 2024",
    pages: "24 Pages",
    cover: "/images/classroom.jpg",
    description: "Institutional updates, term exam statistical reviews, upcoming parent-teacher conference agendas, and campus sustainability progress."
  }
];

export const notices = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2025–26 (Pre-Primary to Grade 11/12)",
    category: "Admissions",
    date: "2025-08-25",
    pinned: true,
    content: "Applications are officially open for early enrollment. Prospective families can submit applications online or collect prospectus packages from the admissions reception."
  },
  {
    id: 2,
    title: "Term II Terminal Examination & Assessment Schedule Published",
    category: "Academic",
    date: "2025-08-20",
    pinned: true,
    content: "Terminal examinations for Grades 1 through 10 will commence from Ashoj 12. Detailed subject-wise date sheets and syllabus guides are accessible via the Student Portal."
  },
  {
    id: 3,
    title: "Inter-School Science Fair & Innovation Expo 2025",
    category: "Events",
    date: "2025-08-15",
    pinned: false,
    content: "Excelsior Apex is hosting over 35 schools for the Annual Valley STEM Fair on Bhadra 28. Student project submissions must be registered by Bhadra 15."
  },
  {
    id: 4,
    title: "Dashain & Tihar Festive Vacation Schedule",
    category: "Holiday",
    date: "2025-08-10",
    pinned: false,
    content: "The academy will remain closed for Dashain and Tihar festivities from Ashoj 22 through Kartik 14. Residential dormitories will maintain dedicated holiday staff."
  }
];

export const calendarEvents = [
  { date: "2025-09-05", title: "Teachers' Day & Student Tribute Assembly", type: "event", time: "9:00 AM – 1:00 PM", location: "Grand Auditorium" },
  { date: "2025-09-12", title: "Parent-Teacher Conference (Term I Review)", type: "academic", time: "10:00 AM – 3:30 PM", location: "Academic Blocks" },
  { date: "2025-09-20", title: "Annual Valley STEM & Robotics Expo", type: "event", time: "8:30 AM – 4:00 PM", location: "Innovation Hub" },
  { date: "2025-09-28", title: "Term II Terminal Examinations Commence", type: "academic", time: "8:00 AM – 11:30 AM", location: "Examination Halls" },
  { date: "2025-10-06", title: "Inter-House Football & Athletics Final", type: "sports", time: "1:00 PM – 5:00 PM", location: "Sports Complex" },
  { date: "2025-10-14", title: "Dashain Festive Recess Begins", type: "holiday", time: "All Day", location: "Campus-Wide" }
];

export const campusFacilities = [
  {
    id: 1,
    title: "Smart Multimedia Amphitheaters",
    desc: "Interactive multi-touch boards, acoustic design, high-speed fiber internet, and ergonomic modular seating for immersive learning.",
    image: "/images/classroom.jpg"
  },
  {
    id: 2,
    title: "Advanced STEM, Physics & Chemistry Labs",
    desc: "State-of-the-art laboratory apparatus, digital spectrophotometers, fume hoods, and safety gear conforming to international ISO guidelines.",
    image: "/images/science-lab.jpg"
  },
  {
    id: 3,
    title: "AI, Robotics & Supercomputing Center",
    desc: "Equipped with 80+ high-performance workstations, 3D printers, micro-controller development kits, and gigabit fiber network infrastructure.",
    image: "/images/computer-lab.jpg"
  },
  {
    id: 4,
    title: "Central Imperial Research Library",
    desc: "Over 35,000 physical volumes, JSTOR and EBSCO digital journal access, private reading carrels, and multimedia discussion pods.",
    image: "/images/library.jpg"
  },
  {
    id: 5,
    title: "Multi-Sport Olympic Athletic Complex",
    desc: "Full-sized artificial turf football ground, regulation basketball and tennis courts, indoor badminton halls, and athletic running tracks.",
    image: "/images/sports.jpg"
  },
  {
    id: 6,
    title: "Serene 15-Ropani Eco-Green Campus",
    desc: "Lush botanical gardens, outdoor amphitheaters, solar-powered clean energy systems, and 24/7 CCTV gated security surveillance.",
    image: "/images/campus-aerial.jpg"
  }
];

export const portalFeatures = [
  { step: "01", title: "Live RFID Attendance & SMS Notification", desc: "Automated real-time notifications to parents when students board buses and enter campus gates." },
  { step: "02", title: "Real-Time Terminal Report Cards & Analytics", desc: "Historical GPA tracking, subject-level percentile analytics, and personalized teacher remarks." },
  { step: "03", title: "Instant Fee Billing & Digital Payments", desc: "Seamless instant fee settlement via eSewa, Khalti, ConnectIPS, and mobile banking." },
  { step: "04", title: "Digital Homework, Quizzes & LMS Library", desc: "Access daily homework assignments, lecture slide archives, PDF revision sheets, and video tutorials." },
  { step: "05", title: "Live GPS Bus Tracking & Route Alerts", desc: "Monitor the real-time geographic location of student transit buses on an interactive mobile map." },
  { step: "06", title: "Direct Encrypted Teacher-Parent Chat", desc: "Instant confidential messaging with homeroom teachers, subject instructors, and counseling specialists." }
];

export const careers = [
  {
    id: 1,
    title: "Senior Secondary Physics Educator (+2 Level)",
    department: "Science & Technology",
    type: "Full-Time",
    location: "On-Campus (Jawalakhel)",
    deadline: "September 30, 2025",
    description: "Deliver rigorous physics lectures to Grade 11 & 12 NEB students and mentor medical/engineering entrance aspirants."
  },
  {
    id: 2,
    title: "Adolescent Student Counselor & Psychologist",
    department: "Student Welfare",
    type: "Full-Time",
    location: "On-Campus",
    deadline: "October 10, 2025",
    description: "Provide one-on-one psychological counseling, academic stress management workshops, and career trajectory guidance."
  },
  {
    id: 3,
    title: "Robotics & STEM Lab Facilitator",
    department: "Information Technology",
    type: "Full-Time",
    location: "Innovation Center",
    deadline: "October 15, 2025",
    description: "Instruct middle and high school students in Arduino/Raspberry Pi programming, Python, 3D modeling, and robotics challenges."
  },
  {
    id: 4,
    title: "Head of Primary English & Performing Arts",
    department: "Primary School",
    type: "Full-Time",
    location: "Primary Block",
    deadline: "October 05, 2025",
    description: "Lead early childhood and primary phonics, creative writing curriculum, and direct children's theater productions."
  }
];

export const parentResources = [
  {
    id: 1,
    title: "Official Parent & Student Handbook 2025–26",
    description: "Comprehensive institutional rules, grading criteria, code of conduct, and communication protocols.",
    type: "PDF (3.4 MB)"
  },
  {
    id: 2,
    title: "Annual Academic Master Calendar",
    description: "Complete list of holidays, examinations, sports competitions, parent-teacher reviews, and celebrations.",
    type: "PDF (1.8 MB)"
  },
  {
    id: 3,
    title: "School Bus Transport Route & Safety Protocol",
    description: "Detailed GPS bus stop timings across Lalitpur and Kathmandu with transport supervisor direct lines.",
    type: "PDF (2.1 MB)"
  },
  {
    id: 4,
    title: "Hygienic Dining & Nutrition Meal Plan",
    description: "Weekly menu schedule prepared by child nutritionists, allergen details, and dining fee policies.",
    type: "PDF (880 KB)"
  }
];

export const virtualTourStops = [
  {
    id: 1,
    title: "Grand Entrance & Reception Pavilion",
    image: "/images/campus-aerial.jpg",
    description: "Welcoming visitors and parents into our serene, beautifully landscaped 15-ropani academic sanctuary."
  },
  {
    id: 2,
    title: "AI-Powered Interactive Smart Classrooms",
    image: "/images/classroom.jpg",
    description: "Spacious, climate-controlled classrooms equipped with smart interactive touch displays and ergonomic furniture."
  },
  {
    id: 3,
    title: "Advanced Physics & Chemistry Research Labs",
    image: "/images/science-lab.jpg",
    description: "University-grade laboratories where students translate textbook theory into real-world experimentation."
  },
  {
    id: 4,
    title: "High-Tech Computer & Robotics Pavilion",
    image: "/images/computer-lab.jpg",
    description: "Featuring 80+ modern workstations, 3D printing equipment, and specialized programming development platforms."
  },
  {
    id: 5,
    title: "Central Research Library & Digital Archive",
    image: "/images/library.jpg",
    description: "A tranquil haven housing 35,000+ volumes, digital databases, quiet study carrels, and literature discussion suites."
  },
  {
    id: 6,
    title: "Olympic Standard Sports & Athletic Arena",
    image: "/images/sports.jpg",
    description: "Full-sized artificial turf football ground, basketball and tennis courts, and martial arts dojo."
  }
];

export const faqCategories = [
  {
    category: "Admissions & Entry",
    questions: [
      { q: "What grades and streams are offered at Excelsior Apex?", a: "We provide comprehensive schooling from Early Childhood (Pre-Primary, LKG, UKG) through Grade 10 (SEE), as well as Higher Secondary (+2) in Science and Management streams affiliated with NEB." },
      { q: "What does the admission evaluation process entail?", a: "Admissions include an online/in-person inquiry, submission of prior 2-year transcripts, an age-appropriate aptitude evaluation in English, Mathematics and Science, followed by a personal interaction session with the child and parents." },
      { q: "What are the required documents for admission enrollment?", a: "Applicants must provide: Birth Certificate copy, previous school Character and Transfer Certificates, last 2 years progress marksheets, 4 passport-size photographs, and parent citizenship copies." }
    ]
  },
  {
    category: "Academics & Board Excellence",
    questions: [
      { q: "How does the school support students aiming for SEE and +2 Board Topper ranks?", a: "We provide intensive diagnostic assessments, doubt-clearing tutoring clinics, model board examinations, specialized Olympiad/entrance coaching, and 1-on-1 mentorship by senior master educators." },
      { q: "What is the average class size at Excelsior Apex?", a: "We maintain a strict maximum limit of 24–28 students per section to guarantee individual attention, personalized feedback, and strong teacher-student rapport." },
      { q: "Does the school provide medical and engineering entrance coaching?", a: "Yes. Our +2 Science stream integrates specialized medical (IOM/CEE) and engineering (IOE Pulchowk) preparatory modules taught by experienced faculty." }
    ]
  },
  {
    category: "Scholarships, Fees & Transport",
    questions: [
      { q: "What scholarship opportunities are available?", a: "We disburse over NPR 12 Million annually across Chairman's Merit Scholarships (up to 100% tuition waiver), Need-Based Financial Aid, National Sports Fellowships, and STEM Innovation Awards." },
      { q: "Does the school provide transportation with GPS tracking?", a: "Yes, our fleet of air-conditioned, safety-equipped buses covers all major residential routes across Lalitpur, Kathmandu, and Bhaktapur, complete with live mobile GPS tracking for parents." },
      { q: "Can school fees be paid online in installments?", a: "Yes. Parents can settle fees quarterly or monthly using our digital portal with instant integration via eSewa, Khalti, ConnectIPS, and credit cards." }
    ]
  }
];
