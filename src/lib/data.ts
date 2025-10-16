import type { Career, Question } from './types';

export const careers: Career[] = [
  {
    id: '1',
    slug: 'software-engineering',
    title: 'Software Engineering',
    stream: 'Engineering',
    description: 'Design, develop, and maintain software systems. A creative and problem-solving field.',
    longDescription: 'Software engineering is a systematic, disciplined, and quantifiable approach to the design, development, operation, and maintenance of software. It involves applying engineering principles to software development, making it a highly sought-after and rewarding career path for those who enjoy logic, problem-solving, and creating things.',
    skills: ['Programming (Python, Java, C++)', 'Data Structures & Algorithms', 'Version Control (Git)', 'Problem Solving'],
    courses: ['B.Tech in Computer Science', 'BCA', 'Online Coding Bootcamps'],
    roadmap: 'Education (B.Tech) -> Internships -> Junior Developer -> Senior Developer/Architect',
    avgSalary: '$110,000/year',
    futureScope: 'Extremely high demand with growth in AI, Machine Learning, and Cybersecurity.',
  },
  {
    id: '2',
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    stream: 'Design',
    description: 'Create user-friendly and visually appealing digital products.',
    longDescription: 'UX/UI Design focuses on creating seamless and enjoyable experiences for users of digital products. UX (User Experience) design is about the overall feel of the experience, while UI (User Interface) design is about how the product\'s interfaces look and function. It\'s a blend of creativity, empathy, and technical skill.',
    skills: ['Figma/Sketch', 'User Research', 'Wireframing & Prototyping', 'Visual Design'],
    courses: ['B.Des in Design', 'Certified Courses in UX/UI', 'Portfolio Development'],
    roadmap: 'Learn Design Tools -> Build Portfolio -> Internship -> UI/UX Designer -> Product Designer',
    avgSalary: '$95,000/year',
    futureScope: 'Growing rapidly as businesses prioritize user-centric products.',
  },
  {
    id: '3',
    slug: 'data-science',
    title: 'Data Science',
    stream: 'Engineering / Science',
    description: 'Analyze large datasets to extract meaningful insights and drive business decisions.',
    longDescription: 'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, computer science, and domain expertise to turn data into a valuable asset.',
    skills: ['Python/R', 'SQL', 'Machine Learning', 'Statistics', 'Data Visualization'],
    courses: ['B.Tech in Data Science/AI', 'M.Sc in Statistics', 'Data Science Certifications'],
    roadmap: 'Degree in relevant field -> Learn programming & stats -> Projects -> Data Analyst -> Data Scientist',
    avgSalary: '$120,000/year',
    futureScope: 'One of the fastest-growing fields, integral to AI and business intelligence.',
  },
    {
    id: '4',
    slug: 'doctor',
    title: 'Doctor (MBBS)',
    stream: 'Medicine',
    description: 'Diagnose and treat illnesses, and work to keep people healthy.',
    longDescription: 'Being a doctor is a noble profession dedicated to health and well-being. It requires extensive education and training to diagnose patient conditions, prescribe treatments, and provide primary care or specialize in areas like surgery, pediatrics, or cardiology. It is a demanding yet highly respected and fulfilling career.',
    skills: ['Medical Knowledge', 'Attention to Detail', 'Empathy', 'Communication'],
    courses: ['MBBS (Bachelor of Medicine, Bachelor of Surgery)', 'NEET exam for entry'],
    roadmap: 'Clear NEET -> 5.5 years of MBBS -> Internship -> MD/MS for specialization',
    avgSalary: '$208,000+/year',
    futureScope: 'Consistently high demand worldwide with opportunities for specialization and research.',
  },
];

export const quizQuestions: Question[] = [
  {
    id: 'q1',
    text: 'When faced with a complex problem, you prefer to...',
    options: [
      { text: 'Break it down into smaller, logical steps.', value: 'analytical' },
      { text: 'Brainstorm creative and unconventional solutions.', value: 'creative' },
      { text: 'Collaborate with others to find a solution together.', value: 'social' },
      { text: 'Build or create a tangible solution with your hands.', value: 'technical' },
    ],
  },
  {
    id: 'q2',
    text: 'You are most energized by...',
    options: [
      { text: 'Solving puzzles and finding patterns.', value: 'analytical' },
      { text: 'Expressing yourself through art, music, or writing.', value: 'creative' },
      { text: 'Helping and understanding people.', value: 'social' },
      { text: 'Figuring out how things work.', value: 'technical' },
    ],
  },
  {
    id: 'q3',
    text: 'Your ideal work environment would be...',
    options: [
      { text: 'A quiet space where you can focus and analyze data.', value: 'analytical' },
      { text: 'A dynamic and vibrant studio or workshop.', value: 'creative' },
      { text: 'A team-based setting with lots of interaction.', value: 'social' },
      { text: 'A lab or a place with tools and technology.', value: 'technical' },
    ],
  },
  {
    id: 'q4',
    text: 'Which of these activities sounds most appealing?',
    options: [
      { text: 'Developing a strategy for a game.', value: 'analytical' },
      { text: 'Designing a poster for an event.', value: 'creative' },
      { text: 'Organizing a group activity or a club.', value: 'social' },
      { text: 'Assembling a new piece of furniture or gadget.', value: 'technical' },
    ],
  },
  {
    id: 'q5',
    text: 'You feel most successful when you...',
    options: [
      { text: 'Have optimized a process for maximum efficiency.', value: 'analytical' },
      { text: 'Have created something entirely new.', value: 'creative' },
      { text: 'Have made a positive impact on someone\'s life.', value: 'social' },
      { text: 'Have successfully repaired or built something.', value: 'technical' },
    ],
  },
];
