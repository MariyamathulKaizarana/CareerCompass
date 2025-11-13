
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

    // Chemistry
    { title: 'Spectroscopic Techniques for Pharmaceutical and Biopharmaceutical Industries', description: 'Taught by Prof. Shashank Deep.', stream: 'Chemistry', credits: 4 },

    // Biotechnology and Bioengineering
    { title: 'Drug Delivery: Principles and Applications', description: 'Taught by Prof. Rachit Agarwal.', stream: 'Biotechnology', credits: 4 },
    { title: 'Genetic Engineering: Theory and Application', description: 'Taught by Prof. Vishal Trivedi.', stream: 'Biotechnology', credits: 4 },
    { title: 'Fundamentals of Food Process Engineering', description: 'Taught by Prof. Jayeeta Mitra.', stream: 'Biotechnology', credits: 4 }
];
