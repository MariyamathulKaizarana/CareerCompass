import type { Question } from './types';

export const quizQuestions: Question[] = [
    {
        id: "q_stream",
        text: "Which academic stream did you choose for your 11th and 12th grade?",
        category: 'initial',
        options: [
            { text: "Science (PCM/PCB)", value: "science" },
            { text: "Commerce", value: "commerce" },
            { text: "Arts / Humanities", value: "arts" },
        ],
    },
    {
        id: "q_science_subject",
        text: "Which subject combination did you have in Science?",
        category: 'stream_select_science',
        options: [
            { text: "PCM (Physics, Chemistry, Maths)", value: "science_pcm" },
            { text: "PCB (Physics, Chemistry, Biology)", value: "science_pcb" },
        ],
    },
    // Science PCM Questions
    {
        id: "q_sci_pcm_1",
        text: "When faced with a complex problem, I prefer to:",
        category: 'science_pcm',
        options: [
            { text: "Break it down into smaller, logical steps to create an algorithm.", value: "analytical_problemsolving" },
            { text: "Experiment with different physical or digital components to see what works.", value: "technical_hands-on" },
            { text: "Use mathematical models to predict the outcome.", value: "analytical_modeling" },
            { text: "Design a visual representation or blueprint of the solution.", value: "creative_design" },
        ],
    },
    {
        id: "q_sci_pcm_2",
        text: "I am most fascinated by:",
        category: 'science_pcm',
        options: [
            { text: "How computers and software are built.", value: "technical_systems" },
            { text: "The fundamental laws of the universe, like gravity and electromagnetism.", value: "analytical_fundamental" },
            { text: "The design and construction of large structures like bridges and buildings.", value: "technical_structures" },
            { text: "Using data to build intelligent systems (AI).", value: "analytical_ai" },
        ],
    },
    {
        id: "q_sci_pcm_3",
        text: "Which of these projects sounds most exciting?",
        category: 'science_pcm',
        options: [
            { text: "Building a mobile app from scratch.", value: "technical_building" },
            { text: "Designing an efficient engine for a car.", value: "technical_engineering" },
            { text: "Analyzing stock market data to predict trends.", value: "analytical_data" },
            { text: "Developing a new algorithm for data compression.", value: "analytical_algorithm" },
        ],
    },
    {
        id: "q_sci_pcm_4",
        text: "I enjoy learning about:",
        category: 'science_pcm',
        options: [
            { text: "New programming languages and software tools.", value: "technical_tools" },
            { text: "Advanced mathematical concepts and theories.", value: "analytical_abstract" },
            { text: "How electronic circuits work.", value: "technical_electronics" },
            { text: "The principles of aerodynamics and space travel.", value: "analytical_aerospace" },
        ],
    },
    {
        id: "q_sci_pcm_5",
        text: "My ideal work involves:",
        category: 'science_pcm',
        options: [
            { text: "Logical thinking and problem-solving.", value: "analytical_logical" },
            { text: "Creativity and design.", value: "creative_design" },
            { text: "Building and creating tangible things.", value: "technical_creation" },
            { text: "Analyzing and interpreting data.", value: "analytical_analysis" },
        ],
    },
    // Science PCB Questions
    {
        id: "q_sci_pcb_1",
        text: "I am most curious about:",
        category: 'science_pcb',
        options: [
            { text: "How the human body works and fights diseases.", value: "caring_humanbody" },
            { text: "The diversity of life on Earth, from microbes to mammals.", value: "analytical_biology" },
            { text: "How medicines are created and how they affect the body.", value: "analytical_pharma" },
            { text: "Helping animals and ensuring their well-being.", value: "caring_animals" },
        ],
    },
    {
        id: "q_sci_pcb_2",
        text: "Which activity sounds most appealing?",
        category: 'science_pcb',
        options: [
            { text: "Diagnosing a patient's illness based on symptoms and tests.", value: "caring_diagnosis" },
            { text: "Conducting a lab experiment to develop a new drug.", value: "analytical_experiment" },
            { text: "Helping a patient recover from an injury through exercise.", value: "caring_rehabilitation" },
            { text: "Studying the genetic makeup of an organism.", value: "analytical_genetics" },
        ],
    },
    {
        id: "q_sci_pcb_3",
        text: "I have a natural talent for:",
        category: 'science_pcb',
        options: [
            { text: "Being precise and careful with my hands.", value: "technical_dexterity" },
            { text: "Empathizing with others and understanding their pain.", value: "caring_empathy" },
            { text: "Memorizing complex biological terms and processes.", value: "analytical_memory" },
            { text: "Observing details and noticing small changes.", value: "analytical_observation" },
        ],
    },
    {
        id: "q_sci_pcb_4",
        text: "I would prefer a career where I can:",
        category: 'science_pcb',
        options: [
            { text: "Directly help and care for people or animals.", value: "caring_helping" },
            { text: "Conduct research and contribute to scientific knowledge.", value: "analytical_research" },
            { text: "Work in a healthcare setting like a hospital or clinic.", value: "caring_hospital" },
            { text: "Use technology to solve biological problems.", value: "technical_biotech" },
        ],
    },
    {
        id: "q_sci_pcb_5",
        text: "What kind of documentary would you watch?",
        category: 'science_pcb',
        options: [
            { text: "A series on modern medical breakthroughs.", value: "caring_medicaldoc" },
            { text: "A film about wildlife conservation.", value: "caring_wildlife" },
            { text: "A documentary on the development of vaccines.", value: "analytical_vaccines" },
            { text: "An exposé on the food production industry.", value: "analytical_food" },
        ],
    },

    // Commerce Questions
    {
        id: "q_com_1",
        text: "I am more interested in:",
        category: 'commerce',
        options: [
            { text: "How businesses make money and manage finances.", value: "business_finance" },
            { text: "How products are marketed and sold to customers.", value: "creative_marketing" },
            { text: "The laws and regulations that govern companies.", value: "analytical_law" },
            { text: "Analyzing market trends and economic data.", value: "analytical_data" },
        ],
    },
    {
        id: "q_com_2",
        text: "When making a decision, I rely on:",
        category: 'commerce',
        options: [
            { text: "Data analysis and statistical evidence.", value: "analytical_statistics" },
            { text: "My intuition and understanding of people.", value: "social_intuition" },
            { text: "A structured cost-benefit analysis.", value: "business_costbenefit" },
            { text: "Creative brainstorming and new ideas.", value: "creative_brainstorming" },
        ],
    },
    {
        id: "q_com_3",
        text: "Which of these tasks sounds most interesting?",
        category: 'commerce',
        options: [
            { text: "Preparing a company's annual financial report.", value: "business_reporting" },
            { text: "Designing an advertising campaign for a new product.", value: "creative_campaign" },
            { text: "Negotiating a business deal with another company.", value: "social_negotiation" },
            { text: "Analyzing a competitor's strategy.", value: "analytical_strategy" },
        ],
    },
     {
        id: "q_com_4",
        text: "My strongest skill is:",
        category: 'commerce',
        options: [
            { text: "Logical reasoning and critical thinking.", value: "analytical_reasoning" },
            { text: "Creativity and out-of-the-box thinking.", value: "creative_thinking" },
            { text: "Leadership and team management.", value: "business_leadership" },
            { text: "Persuading and influencing people.", value: "social_persuasion" },
        ],
    },
    {
        id: "q_com_5",
        text: "I would enjoy a job where I can:",
        category: 'commerce',
        options: [
            { text: "Work with numbers and spreadsheets.", value: "analytical_numbers" },
            { text: "Come up with creative solutions to problems.", value: "creative_solutions" },
            { text: "Interact with many different people throughout the day.", value: "social_interaction" },
            { text: "Develop long-term strategies for an organization.", value: "business_strategy" },
        ],
    },

    // Arts/Humanities Questions
    {
        id: "q_art_1",
        text: "I am most drawn to:",
        category: 'arts',
        options: [
            { text: "Expressing ideas through writing or speaking.", value: "humanities_expression" },
            { text: "Creating visual art (drawing, painting, digital design).", value: "creative_visual" },
            { text: "Understanding historical events and their impact on society.", value: "humanities_history" },
            { text: "Analyzing literature, film, or music.", value: "analytical_criticism" },
        ],
    },
    {
        id: "q_art_2",
        text: "I would rather spend my free time:",
        category: 'arts',
        options: [
            { text: "Writing a story or a blog post.", value: "creative_writing" },
            { text: "Visiting an art gallery or a museum.", value: "creative_museum" },
            { text: "Watching a historical documentary.", value: "humanities_documentary" },
            { text: "Debating social or political issues with friends.", value: "social_debate" },
        ],
    },
    {
        id: "q_art_3",
        text: "Which skill do you value more?",
        category: 'arts',
        options: [
            { text: "The ability to craft a persuasive argument.", value: "humanities_argument" },
            { text: "The ability to create something beautiful.", value: "creative_aesthetics" },
            { text: "The ability to understand different cultures and perspectives.", value: "social_cultures" },
            { text: "The ability to conduct thorough research and find information.", value: "analytical_research" },
        ],
    },
    {
        id: "q_art_4",
        text: "In a project, I excel at:",
        category: 'arts',
        options: [
            { text: "The initial brainstorming and creative concept.", value: "creative_concept" },
            { text: "The research and information gathering phase.", value: "analytical_gathering" },
            { text: "Communicating our message clearly and effectively.", value: "humanities_communication" },
            { text: "Organizing the group and ensuring everyone is heard.", value: "social_organizing" },
        ],
    },
    {
        id: "q_art_5",
        text: "I am fascinated by:",
        category: 'arts',
        options: [
            { text: "The power of language and storytelling.", value: "humanities_language" },
            { text: "The principles of color, form, and composition.", value: "creative_design" },
            { text: "How past events shape the present.", value: "humanities_past" },
            { text: "The complexities of human psychology and behavior.", value: "social_psychology" },
        ],
    }
];
