
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
    // Science Questions
    {
        id: "q_sci_1",
        text: "When faced with a complex problem, I prefer to:",
        category: 'science',
        options: [
            { text: "Break it down into smaller, logical steps.", value: "analytical_problemsolving" },
            { text: "Experiment with different components to see what works.", value: "technical_hands-on" },
            { text: "Research existing theories and principles.", value: "analytical_research" },
            { text: "Collaborate with others to brainstorm solutions.", value: "social_collaboration" },
        ],
    },
    {
        id: "q_sci_2",
        text: "I am most fascinated by:",
        category: 'science',
        options: [
            { text: "How machines and computers work.", value: "technical_systems" },
            { text: "The fundamental laws of the universe (Physics, Chemistry).", value: "analytical_fundamental" },
            { text: "The intricacies of living organisms.", value: "caring_biology" },
            { text: "Using mathematical models to predict outcomes.", value: "analytical_modeling" },
        ],
    },
    {
        id: "q_sci_3",
        text: "In a group project, I am the one who:",
        category: 'science',
        options: [
            { text: "Writes the code or builds the prototype.", value: "technical_building" },
            { text: "Analyzes the data and draws conclusions.", value: "analytical_analysis" },
            { text: "Ensures the project meets the required specifications and is well-documented.", value: "technical_process" },
            { text: "Explains our findings to a non-technical audience.", value: "social_communication" },
        ],
    },
    {
        id: "q_sci_4",
        text: "I enjoy learning about:",
        category: 'science',
        options: [
            { text: "New programming languages and software tools.", value: "technical_tools" },
            { text: "Abstract mathematical concepts.", value: "analytical_abstract" },
            { text: "Human anatomy and how the body fights disease.", value: "caring_medicine" },
            { text: "Environmental issues and sustainable solutions.", value: "caring_environment" },
        ],
    },
    {
        id: "q_sci_5",
        text: "Which activity sounds most appealing?",
        category: 'science',
        options: [
            { text: "Designing and building a robot.", value: "technical_robotics" },
            { text: "Solving a complex set of differential equations.", value: "analytical_math" },
            { text: "Conducting a lab experiment to test a hypothesis.", value: "analytical_experiment" },
            { text: "Diagnosing a patient's illness based on symptoms.", value: "caring_diagnosis" },
        ],
    },
    {
        id: "q_sci_6",
        text: "I prefer a career that involves:",
        category: 'science',
        options: [
            { text: "Creating tangible products or systems.", value: "technical_creation" },
            { text: "Deep thinking and theoretical exploration.", value: "analytical_theory" },
            { text: "Directly helping people with their health and well-being.", value: "caring_helping" },
            { text: "Working with large datasets to find patterns.", value: "analytical_data" },
        ],
    },
     {
        id: "q_sci_7",
        text: "What kind of documentary would you watch?",
        category: 'science',
        options: [
            { text: "One about the rise of Artificial Intelligence.", value: "technical_ai" },
            { text: "A biography of a famous scientist like Einstein or Marie Curie.", value: "analytical_biography" },
            { text: "A series on modern medical breakthroughs.", value: "caring_medicaldoc" },
            { text: "A film about space exploration and cosmology.", value: "analytical_space" },
        ],
    },
    {
        id: "q_sci_8",
        text: "I'm good at:",
        category: 'science',
        options: [
            { text: "Fixing things and understanding how they are put together.", value: "technical_fixing" },
            { text: "Spotting patterns and inconsistencies in data.", value: "analytical_patterns" },
            { text: "Remembering and recalling detailed information.", value: "caring_memory" },
            { text: "Thinking step-by-step and logically.", value: "analytical_logical" },
        ],
    },
     {
        id: "q_sci_9",
        text: "I would rather spend an afternoon:",
        category: 'science',
        options: [
            { text: "Learning a new software or coding skill online.", value: "technical_learning" },
            { text: "Reading a book on a complex scientific topic.", value: "analytical_reading" },
            { text: "Volunteering at a health clinic or hospital.", value: "caring_volunteering" },
            { text: "Solving puzzles like Sudoku or chess.", value: "analytical_puzzles" },
        ],
    },
    {
        id: "q_sci_10",
        text: "My ideal work environment is:",
        category: 'science',
        options: [
            { text: "A collaborative lab or tech office.", value: "technical_collaborative" },
            { text: "A quiet library or research institution.", value: "analytical_quiet" },
            { text: "A busy hospital or clinic.", value: "caring_hospital" },
            { text: "A mix of independent work and team meetings.", value: "analytical_mix" },
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
     {
        id: "q_com_6",
        text: "I'm naturally good at:",
        category: 'commerce',
        options: [
            { text: "Being organized and paying attention to detail.", value: "analytical_detail" },
            { text: "Coming up with catchy slogans or ideas.", value: "creative_ideas" },
            { text: "Understanding what motivates people.", value: "social_motivation" },
            { text: "Seeing the big picture and planning ahead.", value: "business_planning" },
        ],
    },
    {
        id: "q_com_7",
        text: "Which TV show would you prefer to watch?",
        category: 'commerce',
        options: [
            { text: "Shark Tank (business pitches and investment).", value: "business_investment" },
            { text: "A documentary about a famous advertising agency.", value: "creative_advertising" },
            { text: "A series about stock market analysis.", value: "analytical_stocks" },
            { text: "A show about managing a large team or company.", value: "social_management" },
        ],
    },
    {
        id: "q_com_8",
        text: "I like to stay updated on:",
        category: 'commerce',
        options: [
            { text: "The latest business and stock market news.", value: "business_news" },
            { text: "The newest social media trends and ad campaigns.", value: "creative_trends" },
            { text: "Changes in tax laws and financial regulations.", value: "analytical_laws" },
            { text: "Global economic policies and their impact.", value: "analytical_economics" },
        ],
    },
    {
        id: "q_com_9",
        text: "My communication style is more:",
        category: 'commerce',
        options: [
            { text: "Data-driven and precise.", value: "analytical_communication" },
            { text: "Persuasive and engaging.", value: "creative_communication" },
            { text: "Empathetic and understanding.", value: "social_communication" },
            { text: "Direct and strategic.", value: "business_communication" },
        ],
    },
    {
        id: "q_com_10",
        text: "The most important factor in a business's success is:",
        category: 'commerce',
        options: [
            { text: "Solid financial management.", value: "business_finance" },
            { text: "A strong brand and marketing strategy.", value: "creative_branding" },
            { text: "Efficient operations and supply chain.", value: "analytical_operations" },
            { text: "A positive work culture and motivated employees.", value: "social_culture" },
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
    },
    {
        id: "q_art_6",
        text: "A fulfilling career for me would involve:",
        category: 'arts',
        options: [
            { text: "A lot of creative freedom and self-expression.", value: "creative_freedom" },
            { text: "Helping to solve social problems.", value: "social_helping" },
            { text: "Deep investigation and discovery of facts.", value: "analytical_investigation" },
            { text: "Educating or informing the public.", value: "humanities_educating" },
        ],
    },
    {
        id: "q_art_7",
        text: "I prefer tasks that are:",
        category: 'arts',
        options: [
            { text: "Open-ended and allow for interpretation.", value: "creative_openended" },
            { text: "Structured and require methodical work.", value: "analytical_structured" },
            { text: "Collaborative and involve teamwork.", value: "social_teamwork" },
            { text: "Focused on advocacy and making a case.", value: "humanities_advocacy" },
        ],
    },
    {
        id: "q_art_8",
        text: "Which profession sounds most appealing?",
        category: 'arts',
        options: [
            { text: "Graphic Designer or Animator.", value: "creative_designer" },
            { text: "Journalist or Content Writer.", value: "humanities_journalist" },
            { text: "Lawyer or Policy Advisor.", value: "humanities_lawyer" },
            { text: "Social Worker or Psychologist.", value: "social_worker" },
        ],
    },
    {
        id: "q_art_9",
        text: "I am good at:",
        category: 'arts',
        options: [
            { text: "Empathizing with others' situations.", value: "social_empathy" },
            { text: "Thinking outside the box.", value: "creative_thinking" },
            { text: "Constructing logical arguments.", value: "analytical_arguments" },
            { text: "Telling a compelling story.", value: "humanities_storytelling" },
        ],
    },
    {
        id: "q_art_10",
        text: "I feel most energized when I am:",
        category: 'arts',
        options: [
            { text: "Creating something new from scratch.", value: "creative_creating" },
            { text: "Learning about a different culture or time period.", value: "humanities_learning" },
            { text: "Helping someone navigate a difficult situation.", value: "social_helping" },
            { text: "Winning a debate or argument.", value: "analytical_debating" },
        ],
    }
];

    
