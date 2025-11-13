
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
    { title: 'Fundamentals of Artificial Intelligence', description: 'Taught by Prof. Shyamanta M. Hazarika.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Hardware Modelling using Verilog', description: 'Taught by Prof. Indranil Sengupta.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Computer Graphics', description: 'Taught by Prof. Samit Bhattacharya.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Google Cloud Computing Foundation Course', description: 'Taught by Prof. Soumya Kanti Ghosh.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Data Base Management System', description: 'Taught by Prof. Partha Pratim Das, Prof. Samiran Chattopadhyay.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Cloud computing', description: 'Taught by Prof. Soumya Kanti Ghosh.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Programming, Data Structures And Algorithms Using Python', description: 'Taught by Prof. Madhavan Mukund.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Software Testing', description: 'Taught by Prof. Meenakshi D\'souza.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'Python for Data Science', description: 'Taught by Prof. Rengasamy.', stream: 'Computer Science & Engineering', credits: 4 },


    // Design Engineering
    { title: 'System Design for Sustainability', description: 'Taught by Prof. Sharmistha Banerjee.', stream: 'Design Engineering', credits: 4 },
    { title: 'Functional and Conceptual Design', description: 'Taught by Prof. T. Asokan.', stream: 'Design Engineering', credits: 4 },
    { title: 'Design, Technology and Innovation', description: 'Taught by Prof. B.K. Chakrabarty.', stream: 'Design Engineering', credits: 4 },


    // Mathematics
    { title: 'Regression Analysis', description: 'Taught by Prof. Soumen Maity.', stream: 'Mathematics', credits: 4 },
    { title: 'Computational Commutative Algebra', description: 'Taught by Prof. Manoj Kummini.', stream: 'Mathematics', credits: 4 },
    { title: 'Scientific Computing using Matlab', description: 'Taught by Prof. Vivek K. Aggarwal & Prof. Arvind Kumar Lal.', stream: 'Mathematics', credits: 4 },
    { title: 'Linear Algebra', description: 'Taught by Prof. P. N. Agrawal & Prof. D. N. Pandey.', stream: 'Mathematics', credits: 4 },
    { title: 'Introduction to Fuzzy Set Theory, Arithmetic and Logic', description: 'Taught by Prof. Niladri Chatterjee.', stream: 'Mathematics', credits: 4 },
    { title: 'Numerical methods', description: 'Taught by Prof. Ameeya Kumar Nayak, Prof. Sanjeev Kumar.', stream: 'Mathematics', credits: 4 },
    { title: 'Essential Mathematics for Machine Learning', description: 'Taught by Prof. Sanjeev Kumar, Prof. S.K. Gupta.', stream: 'Mathematics', credits: 4 },
    { title: 'Introduction to R Software', description: 'Taught by Prof. Shalabh.', stream: 'Mathematics', credits: 4 },
    { title: 'Non-Parametric Statistical Inference', description: 'Taught by Prof. Niladri Chatterjee.', stream: 'Mathematics', credits: 4 },
    { title: 'Operations Research', description: 'Taught by Prof. Kusum Deep.', stream: 'Mathematics', credits: 4 },


    // Electrical & Electronics Engineering
    { title: 'Mapping Signal Processing Algorithms to DSP Architectures', description: 'Taught by Prof. Nitin Chandrachoodan.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Microelectronics: Devices to Circuits', description: 'Taught by Prof. Sudeb Dasgupta.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Op-Amp Practical Applications: Design, Simulation & Implementation', description: 'Taught by Prof. Hardik Jeetendra Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Sensors and Actuators', description: 'Taught by Prof. Hardik J Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Pattern Recognition and Application', description: 'Taught by Prof. Prabir Kumar Biswas.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Applied Optimization for Wireless, Machine Learning, Big Data', description: 'Taught by Prof. Aditya K. Jagannatham.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Design of Photovoltaic Systems', description: 'Taught by Prof. L. Umanand.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Fabrication Techniques for MEMS-Based Sensors: Clinical Perspective', description: 'Taught by Prof. Hardik Jeetendra Pandya.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Introductory Neuroscience & Neuro-Instrumentation', description: 'Taught by Prof. Mahesh Jayachandra.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Advanced Linear Continuous Control Systems: Applications with MATLAB Programming and Simulink', description: 'Taught by Prof. Yogesh Vijay Hote.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Fundamentals of Electronic Device Fabrication', description: 'Taught by Prof. Parasuraman Swaminathan.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Introduction to Smart Grid', description: 'Taught by Prof. N.P. Padhy.', stream: 'Electrical Engineering', credits: 3 },


    // Chemistry & Chemical Engineering
    { title: 'Spectroscopic Techniques for Pharmaceutical and Biopharmaceutical Industries', description: 'Taught by Prof. Shashank Deep.', stream: 'Chemistry', credits: 4 },
    { title: 'Chemical Process Safety', description: 'Taught by Prof. Shishir Sinha.', stream: 'Chemical Engineering', credits: 4 },
    { title: 'Technologies for Clean and Renewable Energy Production', description: 'Taught by Prof. P. Mondal.', stream: 'Chemical Engineering', credits: 3 },

    // Biotechnology and Bioengineering
    { title: 'Drug Delivery: Principles and Applications', description: 'Taught by Prof. Rachit Agarwal.', stream: 'Biotechnology', credits: 4 },
    { title: 'Genetic Engineering: Theory and Application', description: 'Taught by Prof. Vishal Trivedi.', stream: 'Biotechnology', credits: 4 },
    { title: 'Fundamentals of Food Process Engineering', description: 'Taught by Prof. Jayeeta Mitra.', stream: 'Biotechnology', credits: 4 },
    { title: 'Tissue Engineering', description: 'Taught by Prof. Vignesh Muthuvijayan.', stream: 'Biotechnology', credits: 4 },
    { title: 'Biomaterials for Bone Tissue Engineering Applications', description: 'Taught by Prof. Biman B. Mandal.', stream: 'Biotechnology', credits: 4 },
    { title: 'Biomedical Nanotechnology', description: 'Taught by Prof. P. Gopinath.', stream: 'Biotechnology', credits: 4 },


    // Mechanical & Civil Engineering
    { title: 'Advanced Materials and Processes', description: 'Taught by Prof. Jayanta Das.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'X-Ray Crystallography and Diffraction', description: 'Taught by Prof. Ranjit Kumar.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Finite Element Method: Variational Methods to Computer Programming', description: 'Taught by Prof. Atanu Banerjee, Prof. Arup Nandy.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Remote Sensing and GIS', description: 'Taught by Prof. Rishikesh Bharti.', stream: 'Civil Engineering', credits: 4 },
    { title: 'Product Design and Development', description: 'Taught by Prof. Inderdeep Singh.', stream: 'Mechanical Engineering', credits: 4 },


    // Humanities & Social Sciences
    { title: 'Patent Law for Engineers and Scientists', description: 'Taught by Prof. Feroz Ali.', stream: 'Humanities', credits: 4 },
    { title: 'Soft Skills', description: 'Taught by Prof. Binod Mishra.', stream: 'Humanities', credits: 4 },
    { title: 'Science, Technology and Society', description: 'Taught by Prof. Sambit Mallick.', stream: 'Humanities', credits: 4 },
    { title: 'Neuroscience of human movements', description: 'Taught by Prof. Varun.', stream: 'Humanities', credits: 4 },
    { title: 'Numerical Methods for Engineers', description: 'Taught by Prof. Niket Kaisare.', stream: 'Humanities', credits: 4 },
    { title: 'Learning Analytics Tools', description: 'Taught by Prof. Ramkumar Rajendran.', stream: 'Humanities', credits: 4 },
    { title: 'Health Research Fundamentals', description: 'Taught by Prof. P. Manickam.', stream: 'Humanities', credits: 4 },
    { title: 'Consumer Psychology', description: 'Taught by Prof. Naveen Kashyap.', stream: 'Humanities', credits: 4 },
    { title: 'Entrepreneurship and IP Strategy', description: 'Taught by Prof. Gouri Gargate.', stream: 'Humanities', credits: 4 },
    { title: 'Energy Economics and Policy', description: 'Taught by Prof. S. P. Das.', stream: 'Humanities', credits: 4 },
    { title: 'Technical English for Scientists and Engineers', description: 'Taught by Prof. Aysha Iqbal.', stream: 'Humanities', credits: 4 },
    { title: 'Great Experiments in Psychology', description: 'Taught by Prof. Rajlakshmi Guha.', stream: 'Humanities', credits: 4 },
    { title: 'Water, Society and Sustainability', description: 'Taught by Prof. Jenia Mukherjee.', stream: 'Humanities', credits: 4 },
    { title: 'Managing Intellectual Property in Universities', description: 'Taught by Prof. Feroz Ali.', stream: 'Humanities', credits: 4 },
    { title: 'Patent Drafting for Beginners', description: 'Taught by Prof. Feroz Ali.', stream: 'Humanities', credits: 4 },
    { title: 'Body language: Key to Professional Success', description: 'Taught by Prof. Rashmi Gaur.', stream: 'Humanities', credits: 4 },
    { title: 'Developing Soft Skills and Personality', description: 'Taught by Prof. T. Ravichandran.', stream: 'Humanities', credits: 3 },
    { title: 'Educational Leadership', description: 'Taught by Prof. Atasi Mohanty.', stream: 'Humanities', credits: 3 },


    // Management
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
    { title: 'Managing Service Operations', description: 'Taught by Prof. Jayanta Chatterjee.', stream: 'Management', credits: 4 },
    { title: 'Knowledge Management', description: 'Taught by Prof. K.B.L. Srivastava.', stream: 'Management', credits: 4 },
    { title: 'Ethics in Engineering Practice', description: 'Taught by Prof. Susmita Mukhopadhyay.', stream: 'Management', credits: 4 },
    { title: 'Innovation, Business Models and Entrepreneurship', description: 'Taught by Prof. Rajat Agrawal, Prof. Vinay Sharma.', stream: 'Management', credits: 4 },
    { title: 'Marketing Research and Analysis', description: 'Taught by Prof. J.K. Nayak.', stream: 'Management', credits: 4 },
    { title: 'Financial Accounting - IITB', description: 'Taught by Prof. Varadraj Bapat.', stream: 'Management', credits: 4 },
    { title: 'Organization Development and Change in 21st Century', description: 'Taught by Prof. Ashish Pandey.', stream: 'Management', credits: 4 },
    { title: 'Customer Relationship Management', description: 'Taught by Prof. Swagato Chatterjee.', stream: 'Management', credits: 4 },
    { title: 'Introduction to Marketing Essentials', description: 'Taught by Prof. Z. Rahman.', stream: 'Management', credits: 4 },
    { title: 'Business Analytics & Text Mining Modeling Using Python', description: 'Taught by Prof. Gaurav Dixit.', stream: 'Management', credits: 4 },
    { title: 'Marketing Management I', description: 'Taught by Prof. Jayanta Chatterjee, Prof. Shashi Shekhar Mishra.', stream: 'Management', credits: 4 },
    { title: 'Economics of Health and Health Care', description: 'Taught by Prof. Angan Sengupta.', stream: 'Management', credits: 4 },
    { title: 'Design Thinking - A Primer', description: 'Taught by Prof. Ashwin Mahalingam, Prof. Bala Ramadurai.', stream: 'Management', credits: 4 },
    { title: 'Leadership', description: 'Taught by Prof. Kalyan Chakravarti, Prof. Tahoora Mukerjea.', stream: 'Management', credits: 4 },
    { title: 'Business Analytics & Data Mining Modeling Using R Part II', description: 'Taught by Prof. Gaurav Dixit.', stream: 'Management', credits: 4 },
    { title: 'Cost Accounting', description: 'Taught by Prof. Varadraj Bapat.', stream: 'Management', credits: 4 },
    { title: 'Decision Making Under Uncertainty', description: 'Taught by Prof. N. Gautam.', stream: 'Management', credits: 4 },


    // Other / Multidisciplinary
    { title: 'Introduction to Research', description: 'Taught by Prof. Prathap Haridoss.', stream: 'Multidisciplinary', credits: 4 },
    { title: 'Solar Energy Engineering and Technology', description: 'Taught by Prof. Pankaj Kalita.', stream: 'Physics', credits: 4 },
    { title: 'Stress Management', description: 'Taught by Prof. Rajlakshmi Guha.', stream: 'Multidisciplinary', credits: 4 },
    { title: 'Strategies for Learner-centric e-learning in STEM disciplines', description: 'Taught by Prof. Sahana Murthy.', stream: 'Multidisciplinary', credits: 4 },
    { title: 'Teaching and Learning in General Programs: TALG', description: 'Taught by Prof. N J Rao.', stream: 'Multidisciplinary', credits: 4 },
    { title: 'Global Navigation Satellite Systems And Applications', description: 'Taught by Prof. Arun K. Saraf.', stream: 'Earth Science', credits: 4 }
];
