
export interface HonoursCourse {
    title: string;
    description: string;
    stream: string;
    credits: number;
}

export const honoursCourses: HonoursCourse[] = [
    // Computer Science & Engineering
    { title: 'The Joy of Computing using Python', description: 'Taught by Prof. Sudarshan Iyengar & Prof. Vayati Gupta.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Applied Natural Language Processing', description: 'Taught by Prof. Ramaseshan R.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Introduction to Algorithms and Analysis', description: 'Taught by Prof. Sourav Mukhopadhyay.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Bandit Algorithm (Online Machine Learning)', description: 'Taught by Prof. Manjesh Hanawal.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Deep Learning', description: 'Taught by Prof. Prabir Kumar Biswas.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Introduction to Industrial Internet of Things', description: 'Taught by Prof. Sudip Misra.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Introduction to Machine Learning', description: 'Taught by Prof. Balaraman Ravindran.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Operating System Fundamentals', description: 'Taught by Prof. Santanu Chattopadhyay.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Machine Learning for Engineering and Science Applications', description: 'Taught by Prof. Balaji Srinivasan & Prof. Ganapathy Krishnamurthi.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Computer Architecture and Organisation', description: 'Taught by Prof. Indranil Sengupta, Prof. Kamalika Datta.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Introduction to Industry 4.0 and Industrial Internet of Things', description: 'Taught by Prof. Sudip Misra.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Social Networks', description: 'Taught by Prof. Sudarshan Iyengar.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Artificial Intelligence Search Methods For Problem Solving', description: 'Taught by Prof. Deepak Khemani.', stream: 'Computer Science & Engineering', credits: 4 },

    // Design Engineering
    { title: 'System Design for Sustainability', description: 'Taught by Prof. Sharmistha Banerjee.', stream: 'Design Engineering', credits: 4 },
    { title: 'Functional and Conceptual Design', description: 'Taught by Prof. Anban T.', stream: 'Design Engineering', credits: 4 },
    
    // Mathematics
    { title: 'Regression Analysis', description: 'Taught by Prof. Soumen Maity.', stream: 'Mathematics', credits: 4 },
    { title: 'Computational Commutative Algebra', description: 'Taught by Prof. Manoj Kummini.', stream: 'Mathematics', credits: 4 },
    { title: 'Scientific Computing using Matlab', description: 'Taught by Prof. Vivek K. Aggarwal & Prof. Arvind Kumar Lal.', stream: 'Mathematics', credits: 4 },
    { title: 'Linear Algebra', description: 'Taught by Prof. P. N. Agrawal & Prof. D. N. Pandey.', stream: 'Mathematics', credits: 4 },
    { title: 'Introduction to Fuzzy Set Theory, Arithmetic and Logic', description: 'Taught by Prof. Niladri Chatterjee.', stream: 'Mathematics', credits: 4 },

    // Electrical & Electronics Engineering
    { title: 'Mapping Signal Processing Algorithms to DSP Architectures', description: 'Taught by Prof. Nitin Chandrachoodan.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Microelectronics: Devices to Circuits', description: 'Taught by Prof. Sudeb Dasgupta.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Op-Amp Practical Applications: Design, Simulation & Implementation', description: 'Taught by Prof. Hardik Jeetendra Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Sensors and Actuators', description: 'Taught by Prof. Hardik J Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Pattern Recognition and Application', description: 'Taught by Prof. Prabir Kumar Biswas.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Applied Optimization for Wireless, Machine Learning, Big Data', description: 'Taught by Prof. Aditya K. Jagannatham.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Design of Photovoltaic Systems', description: 'Taught by Prof. UME. Anand.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Fabrication Techniques for MEMS-Based Sensors: Clinical Perspective', description: 'Taught by Prof. Hardik Jeetendra Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Introductory Neuroscience & Neuro-Instrumentation', description: 'Taught by Prof. Mahesh Jayachandra.', stream: 'Electronics & Communication Engineering', credits: 4 },

    // Chemistry
    { title: 'Spectroscopic Techniques for Pharmaceutical and Biopharmaceutical Industries', description: 'Taught by Prof. Shashank Deep.', stream: 'Chemistry', credits: 4 },
    { title: 'Chemical Process Safety', description: 'Taught by Prof. Shishir Sinha.', stream: 'Chemical Engineering', credits: 4 },

    // Biotechnology and Bioengineering
    { title: 'Drug Delivery: Principles and Applications', description: 'Taught by Prof. Rachit Agarwal.', stream: 'Biotechnology', credits: 4 },
    { title: 'Genetic Engineering: Theory and Application', description: 'Taught by Prof. Vishal Trivedi.', stream: 'Biotechnology', credits: 4 },
    { title: 'Fundamentals of Food Process Engineering', description: 'Taught by Prof. Jayeeta Mitra.', stream: 'Biotechnology', credits: 4 },

    // Other/Multidisciplinary/Management
    { title: 'Advanced Materials and Processes', description: 'Taught by Prof. Jayanta Das.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'X-Ray Crystallography and Diffraction', description: 'Taught by Prof. Ranjit Kumar.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Patent Law for Engineers and Scientists', description: 'Taught by Prof. Feroz Ali.', stream: 'Humanities', credits: 4 },
    { title: 'Soft Skills', description: 'Taught by Prof. Binod Mishra.', stream: 'Humanities', credits: 4 },
    { title: 'Science, Technology and Society', description: 'Taught by Prof. Sambit Mallick.', stream: 'Humanities', credits: 4 },
    { title: 'Human Resource Development', description: 'Taught by Prof. K.B.L. Srivastava.', stream: 'Management', credits: 4 },
    { title: 'Soft Skills for Business Negotiations and Marketing Strategies', description: 'Taught by Prof. Uttam Kumar Banerjee.', stream: 'Management', credits: 4 },
    { title: 'Industrial Safety Engineering', description: 'Taught by Prof. J. Maiti.', stream: 'Management', credits: 4 },
    { title: 'Working Capital Management', description: 'Taught by Prof. Anil K. Sharma.', stream: 'Management', credits: 4 },
    { title: 'Project Management for Managers', description: 'Taught by Prof. Mukesh Kumar Barua.', stream: 'Management', credits: 4 },
    { title: 'International Business', description: 'Taught by Prof. J. K. Nayak.', stream: 'Management', credits: 4 },
    { title: 'Principles of Management', description: 'Taught by Prof. Susmita Mukhopadhyay, Prof. S. Srinivasan.', stream: 'Management', credits: 4 },
    { title: 'Decision Support System for Managers', description: 'Taught by Prof. Kunal Kanti Ghosh, Prof. Anupam Ghosh, Prof. Sujoy Bhattacharya.', stream: 'Management', credits: 4 },
    { title: 'Management Information System', description: 'Taught by Prof. Surojit Mukherjee.', stream: 'Management', credits: 4 },
    { title: 'Management Accounting', description: 'Taught by Prof. Anil K. Sharma.', stream: 'Management', credits: 4 },
    { title: 'Financial Accounting - IIT Mandi', description: 'Taught by Prof. Puran Singh.', stream: 'Management', credits: 4 },
    { title: 'Finite Element Method: Variational Methods to Computer Programming', description: 'Taught by Prof. Atanu Banerjee, Prof. Arup Nandy.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Neuroscience of human movements', description: 'Taught by Prof. Varun.', stream: 'Humanities', credits: 4 },
    { title: 'Numerical Methods for Engineers', description: 'Taught by Prof. Niket Kaisare.', stream: 'Humanities', credits: 4 },
    { title: 'Learning Analytics Tools', description: 'Taught by Prof. Ramkumar Rajendran.', stream: 'Humanities', credits: 4 },
    { title: 'Fundamentals of Artificial Intelligence', description: 'Taught by Prof. Shyamanta M. Hazarika.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Solar Energy Engineering and Technology', description: 'Taught by Prof. Pankaj Kalita.', stream: 'Physics', credits: 4 }
];
