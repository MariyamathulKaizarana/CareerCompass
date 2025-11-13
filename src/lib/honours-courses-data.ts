
export interface HonoursCourse {
    title: string;
    description: string;
    stream: string;
    credits: number;
}

export const honoursCourses: HonoursCourse[] = [
    // Computer Science
    { title: 'Advanced Algorithms', description: 'Deep dive into algorithm design, analysis, and complexity theory.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Machine Learning', description: 'Fundamentals of machine learning, including supervised and unsupervised models.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Deep Learning', description: 'Study of neural networks, CNNs, RNNs, and their applications.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Cybersecurity Principles', description: 'Covers network security, cryptography, and ethical hacking.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'Cloud Computing', description: 'Learn about cloud infrastructure, virtualization, and services like AWS/Azure.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'Natural Language Processing', description: 'Techniques for teaching computers to understand human language.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'Computer Vision', description: 'Methods for acquiring, processing, and analyzing digital images.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'Blockchain Technology', description: 'Fundamentals of distributed ledgers, smart contracts, and dApps.', stream: 'Computer Science & Engineering', credits: 3 },
    { title: 'High-Performance Computing', description: 'Parallel programming, GPU computing, and performance optimization.', stream: 'Computer Science & Engineering', credits: 4 },
    { title: 'Bioinformatics', description: 'Applying computational techniques to analyze biological data.', stream: 'Computer Science & Engineering', credits: 3 },

    // ECE
    { title: 'VLSI Design', description: 'Very-Large-Scale Integration circuit design and fabrication.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Embedded Systems', description: 'Designing and programming microcontroller-based systems.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Wireless Communication', description: 'Covers cellular networks, Wi-Fi, 5G, and beyond.', stream: 'Electronics & Communication Engineering', credits: 3 },
    { title: 'Digital Signal Processing', description: 'Advanced techniques for analyzing and manipulating signals.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'IoT and Sensor Networks', description: 'Designing and managing networks of connected devices.', stream: 'Electronics & Communication Engineering', credits: 3 },
    { title: 'Robotics and Automation', description: 'Principles of robot kinematics, dynamics, and control.', stream: 'Electronics & Communication Engineering', credits: 4 },
    { title: 'Photonics and Optical Communication', description: 'Study of light generation, detection, and manipulation for communication.', stream: 'Electronics & Communication Engineering', credits: 3 },
    { title: 'RF and Microwave Engineering', description: 'Design of high-frequency circuits and systems for radio communication.', stream: 'Electronics & Communication Engineering', credits: 3 },

    // Mechanical
    { title: 'Advanced Fluid Mechanics', description: 'Turbulence, compressible flow, and computational fluid dynamics (CFD).', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Robotics and Automation', description: 'Principles of robot kinematics, dynamics, and control.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Automobile Engineering', description: 'Design and working of modern automotive systems, including electric vehicles.', stream: 'Mechanical Engineering', credits: 3 },
    { title: 'Finite Element Analysis (FEA)', description: 'Numerical method for solving complex engineering and mathematical physics problems.', stream: 'Mechanical Engineering', credits: 4 },
    { title: 'Renewable Energy Systems', description: 'Study of solar, wind, and other renewable energy technologies.', stream: 'Mechanical Engineering', credits: 3 },
    { title: 'Advanced Manufacturing Processes', description: 'Covers topics like 3D printing, CNC machining, and modern welding techniques.', stream: 'Mechanical Engineering', credits: 3 },
    { title: 'Mechatronics', description: 'Integration of mechanical engineering with electronics and computer control.', stream: 'Mechanical Engineering', credits: 4 },

    // Civil
    { title: 'Advanced Structural Analysis', description: 'In-depth analysis of complex structures using matrix methods and FEA.', stream: 'Civil Engineering', credits: 4 },
    { title: 'Transportation Engineering', description: 'Planning, design, and operation of transportation systems.', stream: 'Civil Engineering', credits: 3 },
    { title: 'Environmental Engineering', description: 'Water and wastewater treatment, solid waste management, and pollution control.', stream: 'Civil Engineering', credits: 3 },
    { title: 'Geotechnical Engineering', description: 'Study of soil mechanics, foundation engineering, and earth retaining structures.', stream: 'Civil Engineering', credits: 4 },
    { title: 'Construction Project Management', description: 'Techniques for planning, scheduling, and controlling construction projects.', stream: 'Civil Engineering', credits: 3 },
    { title: 'Smart Cities', description: 'Integration of technology and data to create sustainable urban environments.', stream: 'Civil Engineering', credits: 3 },

    // Electrical
    { title: 'Power System Protection', description: 'Principles of protecting electrical power systems from faults.', stream: 'Electrical Engineering', credits: 4 },
    { title: 'Electric Vehicle Technology', description: 'Design of EV powertrains, battery management systems, and charging infrastructure.', stream: 'Electrical Engineering', credits: 3 },
    { title: 'Smart Grids', description: 'Modernizing the electrical grid using information and communication technology.', stream: 'Electrical Engineering', credits: 3 },
    { title: 'Renewable Energy Systems', description: 'Study of solar, wind, and other renewable energy technologies and their grid integration.', stream: 'Electrical Engineering', credits: 3 },
    { title: 'Control Systems Design', description: 'Advanced control theory and its application in industrial automation.', stream: 'Electrical Engineering', credits: 4 },

    // Chemical
    { title: 'Advanced Process Control', description: 'Advanced strategies for controlling complex chemical processes.', stream: 'Chemical Engineering', credits: 4 },
    { title: 'Petroleum Refining and Petrochemicals', description: 'Processes involved in refining crude oil and producing petrochemicals.', stream: 'Chemical Engineering', credits: 3 },
    { title: 'Biochemical Engineering', description: 'Application of engineering principles to biological systems, e.g., fermentation.', stream: 'Chemical Engineering', credits: 3 },
    { title: 'Computational Fluid Dynamics (CFD)', description: 'Using numerical methods to analyze fluid flow.', stream: 'Chemical Engineering', credits: 4 },
    
    // Aerospace
    { title: 'Aerodynamics', description: 'The study of the motion of air, particularly its interaction with a solid object.', stream: 'Aerospace Engineering', credits: 4 },
    { title: 'Flight Mechanics', description: 'Performance, stability, and control of aircraft.', stream: 'Aerospace Engineering', credits: 4 },
    { title: 'Spacecraft Design', description: 'Principles of designing satellites and launch vehicles.', stream: 'Aerospace Engineering', credits: 3 },
    { title: 'Rocket Propulsion', description: 'Fundamentals of chemical and electric propulsion systems for spacecraft.', stream: 'Aerospace Engineering', credits: 3 },

    // Biotechnology
    { title: 'Genetic Engineering', description: 'Techniques for manipulating an organism\'s genes.', stream: 'Biotechnology', credits: 4 },
    { title: 'Bioprocess Engineering', description: 'Design and operation of systems that use biological agents to produce products.', stream: 'Biotechnology', credits: 4 },
    { title: 'Immunology', description: 'Study of the immune system.', stream: 'Biotechnology', credits: 3 },
    { title: 'Bioinformatics', description: 'Applying computational techniques to analyze biological data.', stream: 'Biotechnology', credits: 3 },
];
