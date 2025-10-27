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
    // Science PCM Questions (15)
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
            { text: "How computers and software are built and function.", value: "technical_systems" },
            { text: "The fundamental laws of the universe, like gravity and quantum mechanics.", value: "analytical_fundamental" },
            { text: "The design and construction of large structures like skyscrapers and bridges.", value: "technical_structures" },
            { text: "Using vast amounts of data to build intelligent systems (AI).", value: "analytical_ai" },
        ],
    },
    {
        id: "q_sci_pcm_3",
        text: "Which of these projects sounds most exciting?",
        category: 'science_pcm',
        options: [
            { text: "Building a complex mobile app or a video game from scratch.", value: "technical_building" },
            { text: "Designing a more efficient and powerful engine for a car or rocket.", value: "technical_engineering" },
            { text: "Analyzing stock market data with algorithms to predict future trends.", value: "analytical_data" },
            { text: "Launching a satellite into orbit to study a distant planet.", value: "analytical_aerospace" },
        ],
    },
    {
        id: "q_sci_pcm_4",
        text: "I enjoy learning about:",
        category: 'science_pcm',
        options: [
            { text: "New programming languages and cutting-edge software tools.", value: "technical_tools" },
            { text: "Advanced mathematical concepts and abstract theories.", value: "analytical_abstract" },
            { text: "How complex electronic circuits and microchips work.", value: "technical_electronics" },
            { text: "The chemistry behind creating new materials or fuels.", value: "analytical_chemistry" },
        ],
    },
    {
        id: "q_sci_pcm_5",
        text: "My ideal work involves:",
        category: 'science_pcm',
        options: [
            { text: "Pure logical thinking and solving abstract problems.", value: "analytical_logical" },
            { text: "A mix of creative design and technical implementation.", value: "creative_technical" },
            { text: "Building and creating tangible, physical things.", value: "technical_creation" },
            { text: "Analyzing and interpreting complex datasets to find hidden patterns.", value: "analytical_analysis" },
        ],
    },
    {
        id: "q_sci_pcm_6",
        text: "In a team project, I'm the one who:",
        category: 'science_pcm',
        options: [
            { text: "Writes the code and gets the system working.", value: "technical_doer" },
            { text: "Develops the underlying theory or mathematical proof.", value: "analytical_theorist" },
            { text: "Manages the project, timeline, and resources.", value: "business_manager" },
            { text: "Designs the user interface and overall look.", value: "creative_designer" },
        ],
    },
    {
        id: "q_sci_pcm_7",
        text: "I'm better at:",
        category: 'science_pcm',
        options: [
            { text: "Following a detailed plan with precision.", value: "technical_precision" },
            { text: "Thinking outside the box to find a novel solution.", value: "creative_innovator" },
            { text: "Deeply analyzing a single, complex topic.", value: "analytical_deepdive" },
            { text: "Seeing the 'big picture' and how different systems connect.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcm_8",
        text: "Which subject do you enjoy the most?",
        category: 'science_pcm',
        options: [
            { text: "Computer Science (Programming)", value: "technical_cs" },
            { text: "Physics (Understanding how things work)", value: "analytical_physics" },
            { text: "Mathematics (Solving complex equations)", value: "analytical_math" },
            { text: "Chemistry (Understanding reactions and materials)", value: "analytical_chemistry_subject" },
        ],
    },
    {
        id: "q_sci_pcm_9",
        text: "I would prefer a job that is:",
        category: 'science_pcm',
        options: [
            { text: "Mostly at a desk, writing code or analyzing data.", value: "technical_desk" },
            { text: "A mix of desk work and hands-on lab or fieldwork.", value: "technical_field" },
            { text: "Highly collaborative, with lots of team meetings.", value: "social_collaborative" },
            { text: "Independent, allowing me to focus deeply on my own research.", value: "analytical_independent" },
        ],
    },
    {
        id: "q_sci_pcm_10",
        text: "The most important aspect of a technology is:",
        category: 'science_pcm',
        options: [
            { text: "Its efficiency and performance.", value: "technical_performance" },
            { text: "Its innovative design and user experience.", value: "creative_ux" },
            { text: "Its potential to solve a major world problem.", value: "social_impact" },
            { text: "The theoretical breakthrough that made it possible.", value: "analytical_theory" },
        ],
    },
    {
        id: "q_sci_pcm_11",
        text: "I am motivated by:",
        category: 'science_pcm',
        options: [
            { text: "Solving a puzzle that no one else can.", value: "analytical_challenge" },
            { text: "Building something that many people will use.", value: "technical_utility" },
            { text: "Creating something aesthetically beautiful and functional.", value: "creative_aesthetics" },
            { text: "The thrill of discovery and learning new things.", value: "analytical_discovery" },
        ],
    },
    {
        id: "q_sci_pcm_12",
        text: "When something breaks, I am most likely to:",
        category: 'science_pcm',
        options: [
            { text: "Take it apart to understand how it works and fix it myself.", value: "technical_tinker" },
            { text: "Read the manual and follow the troubleshooting steps exactly.", value: "analytical_methodical" },
            { text: "Research online for different ways to fix it.", value: "analytical_research" },
            { text: "Imagine a completely new and better device to replace it.", value: "creative_replacement" },
        ],
    },
    {
        id: "q_sci_pcm_13",
        text: "I'm interested in the business side of technology, such as:",
        category: 'science_pcm',
        options: [
            { text: "Managing development teams and project timelines.", value: "business_projectmanagement" },
            { text: "Analyzing market data to decide which features to build next.", value: "analytical_product" },
            { text: "Understanding the financial aspects like budgeting and ROI.", value: "business_finance" },
            { text: "I'm not interested in the business side, I prefer to focus on the technology itself.", value: "technical_focus" },
        ],
    },
    {
        id: "q_sci_pcm_14",
        text: "Which futuristic technology excites you the most?",
        category: 'science_pcm',
        options: [
            { text: "General Artificial Intelligence", value: "analytical_agi" },
            { text: "Commercial space travel and colonization.", value: "technical_space" },
            { text: "Quantum computing.", value: "analytical_quantum" },
            { text: "Brain-computer interfaces.", value: "technical_bci" },
        ],
    },
    {
        id: "q_sci_pcm_15",
        text: "I prefer working on:",
        category: 'science_pcm',
        options: [
            { text: "Software-based projects (apps, websites, AI).", value: "technical_software" },
            { text: "Hardware-based projects (machines, electronics, robotics).", value: "technical_hardware" },
            { text: "Projects involving large-scale infrastructure (buildings, energy grids).", value: "technical_infrastructure" },
            { text: "Purely theoretical or research-oriented projects.", value: "analytical_research_projects" },
        ],
    },

    // Science PCB Questions (15)
    {
        id: "q_sci_pcb_1",
        text: "I am most curious about:",
        category: 'science_pcb',
        options: [
            { text: "How the human body functions and how to treat its illnesses.", value: "caring_humanbody" },
            { text: "The intricate web of life in ecosystems, from microbes to mammals.", value: "analytical_biology" },
            { text: "How medicines are created and their precise effects on cells.", value: "analytical_pharma" },
            { text: "The well-being of animals and providing them with medical care.", value: "caring_animals" },
        ],
    },
    {
        id: "q_sci_pcb_2",
        text: "Which activity sounds most appealing?",
        category: 'science_pcb',
        options: [
            { text: "Diagnosing a patient's complex illness through careful analysis of symptoms and tests.", value: "caring_diagnosis" },
            { text: "Conducting a delicate lab experiment to modify a gene.", value: "analytical_experiment" },
            { text: "Helping a patient regain movement and function after a serious injury.", value: "caring_rehabilitation" },
            { text: "Working with plants to improve crop yields and resistance to disease.", value: "technical_agriculture" },
        ],
    },
    {
        id: "q_sci_pcb_3",
        text: "I have a natural talent for:",
        category: 'science_pcb',
        options: [
            { text: "Steady hands and precision in detailed, manual tasks.", value: "technical_dexterity" },
            { text: "Listening patiently and showing empathy for others' problems.", value: "caring_empathy" },
            { text: "Memorizing complex biological terms, pathways, and life cycles.", value: "analytical_memory" },
            { text: "Observing minute details and noticing what others might miss.", value: "analytical_observation" },
        ],
    },
    {
        id: "q_sci_pcb_4",
        text: "I would prefer a career where I can:",
        category: 'science_pcb',
        options: [
            { text: "Directly interact with and care for people or animals who are unwell.", value: "caring_helping" },
            { text: "Work in a research lab to contribute to new scientific discoveries.", value: "analytical_research" },
            { text: "Advise people on nutrition, health, and lifestyle choices.", value: "caring_advisory" },
            { text: "Use living organisms and technology to create new products (like biofuels or medicines).", value: "technical_biotech" },
        ],
    },
    {
        id: "q_sci_pcb_5",
        text: "What kind of documentary would you watch?",
        category: 'science_pcb',
        options: [
            { text: "A series following surgeons in a high-stakes operating room.", value: "caring_medicaldoc" },
            { text: "A film about wildlife conservation efforts in the Amazon.", value: "caring_wildlife" },
            { text: "A documentary on the race to develop a cure for a genetic disease.", value: "analytical_geneticsdoc" },
            { text: "An exposé on food science and the future of food.", value: "analytical_food" },
        ],
    },
    {
        id: "q_sci_pcb_6",
        text: "Dealing with a medical emergency, I would be:",
        category: 'science_pcb',
        options: [
            { text: "Calm and focused, able to make quick decisions under pressure.", value: "caring_pressure" },
            { text: "More interested in the underlying biological cause of the emergency.", value: "analytical_cause" },
            { text: "Good at comforting the patient and their family.", value: "caring_comfort" },
            { text: "Uncomfortable with the direct stress, I'd prefer a lab-based role.", value: "analytical_lab" },
        ],
    },
    {
        id: "q_sci_pcb_7",
        text: "Which of these topics is most interesting?",
        category: 'science_pcb',
        options: [
            { text: "Human anatomy and physiology.", value: "caring_anatomy" },
            { text: "Microbiology and immunology.", value: "analytical_microbiology" },
            { text: "Pharmacology and drug interactions.", value: "analytical_pharmacology" },
            { text: "Genetics and heredity.", value: "analytical_genetics" },
        ],
    },
    {
        id: "q_sci_pcb_8",
        text: "I find fulfillment in:",
        category: 'science_pcb',
        options: [
            { text: "Seeing a patient recover due to my care.", value: "caring_recovery" },
            { text: "Publishing a research paper with a new discovery.", value: "analytical_publication" },
            { text: "Developing a more sustainable agricultural practice.", value: "technical_sustainability" },
            { text: "Perfecting a complex laboratory technique.", value: "technical_technique" },
        ],
    },
    {
        id: "q_sci_pcb_9",
        text: "I would enjoy studying:",
        category: 'science_pcb',
        options: [
            { text: "The intricacies of teeth and gums.", value: "caring_dentistry" },
            { text: "The effects of diet on human health.", value: "caring_nutrition" },
            { text: "The structure and function of the eye.", value: "caring_ophthalmology" },
            { text: "How to use technology to create prosthetic limbs.", value: "technical_prosthetics" },
        ],
    },
    {
        id: "q_sci_pcb_10",
        text: "I am more of a:",
        category: 'science_pcb',
        options: [
            { text: "People person, I enjoy interaction and communication.", value: "social_people" },
            { text: "Detail-oriented person, I focus on accuracy and precision.", value: "analytical_detail" },
            { text: "Hands-on person, I learn best by doing.", value: "technical_doing" },
            { text: "Big-picture person, I think about long-term implications.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcb_11",
        text: "When I see a problem, my first instinct is to:",
        category: 'science_pcb',
        options: [
            { text: "Offer immediate help and support.", value: "caring_support" },
            { text: "Research the problem to understand its root causes.", value: "analytical_rootcause" },
            { text: "Think about a practical, step-by-step solution.", value: "technical_practical" },
            { text: "Analyze all possible outcomes before acting.", value: "analytical_outcomes" },
        ],
    },
    {
        id: "q_sci_pcb_12",
        text: "Which work environment do you prefer?",
        category: 'science_pcb',
        options: [
            { text: "A busy hospital or clinic.", value: "caring_hospital_env" },
            { text: "A quiet, focused research laboratory.", value: "analytical_lab_env" },
            { text: "Outdoors, in a natural environment.", value: "technical_outdoors" },
            { text: "A pharmaceutical or biotech company.", value: "business_corporate" },
        ],
    },
    {
        id: "q_sci_pcb_13",
        text: "I am good at handling:",
        category: 'science_pcb',
        options: [
            { text: "Emotionally charged situations with calmness.", value: "caring_emotional" },
            { text: "Large volumes of complex scientific data.", value: "analytical_datahandling" },
            { text: "Repetitive tasks that require high precision.", value: "technical_repetitive" },
            { text: "Long-term projects that require patience and persistence.", value: "analytical_patience" },
        ],
    },
    {
        id: "q_sci_pcb_14",
        text: "My ideal contribution to science would be:",
        category: 'science_pcb',
        options: [
            { text: "Improving the quality of life for many people.", value: "caring_qualityoflife" },
            { text: "Discovering a new species or biological process.", value: "analytical_discovery" },
            { text: "Developing a profitable and useful biotech product.", value: "business_product" },
            { text: "Pioneering a new surgical technique.", value: "technical_surgery" },
        ],
    },
    {
        id: "q_sci_pcb_15",
        text: "I'm comfortable with:",
        category: 'science_pcb',
        options: [
            { text: "A career that requires many years of advanced education.", value: "analytical_longstudy" },
            { text: "A career that involves working with sick or injured beings.", value: "caring_sickness" },
            { text: "A career that involves both science and business.", value: "business_science" },
            { text: "A career that requires strong physical stamina.", value: "technical_stamina" },
        ],
    },


    // Commerce Questions (15)
    {
        id: "q_com_1",
        text: "I am more interested in:",
        category: 'commerce',
        options: [
            { text: "How businesses make, manage, and multiply money.", value: "business_finance" },
            { text: "How products are advertised, branded, and sold to customers.", value: "creative_marketing" },
            { text: "The legal rules and regulations that govern how companies operate.", value: "analytical_law" },
            { text: "How to use data to understand markets and make strategic decisions.", value: "analytical_data" },
        ],
    },
    {
        id: "q_com_2",
        text: "When making a big decision, I primarily rely on:",
        category: 'commerce',
        options: [
            { text: "Hard data, charts, and statistical evidence.", value: "analytical_statistics" },
            { text: "My gut feeling and understanding of people's motivations.", value: "social_intuition" },
            { text: "A detailed, structured analysis of costs vs. benefits.", value: "business_costbenefit" },
            { text: "Thinking of a creative, unconventional approach.", value: "creative_brainstorming" },
        ],
    },
    {
        id: "q_com_3",
        text: "Which of these tasks sounds most interesting?",
        category: 'commerce',
        options: [
            { text: "Auditing a company's financial statements to ensure accuracy.", value: "business_reporting" },
            { text: "Designing a viral social media campaign for a new brand.", value: "creative_campaign" },
            { text: "Negotiating a high-stakes merger between two companies.", value: "social_negotiation" },
            { text: "Creating a long-term business strategy to enter a new market.", value: "analytical_strategy" },
        ],
    },
     {
        id: "q_com_4",
        text: "My strongest skill is:",
        category: 'commerce',
        options: [
            { text: "Meticulous attention to detail and accuracy.", value: "analytical_detail" },
            { text: "Thinking creatively and generating original ideas.", value: "creative_thinking" },
            { text: "Leading a team and motivating people to achieve a goal.", value: "business_leadership" },
            { text: "Persuading and influencing others to my point of view.", value: "social_persuasion" },
        ],
    },
    {
        id: "q_com_5",
        text: "I would enjoy a job where I can:",
        category: 'commerce',
        options: [
            { text: "Work with numbers, spreadsheets, and financial models.", value: "analytical_numbers" },
            { text: "Constantly come up with new, creative solutions to problems.", value: "creative_solutions" },
            { text: "Interact with many different clients and stakeholders daily.", value: "social_interaction" },
            { text: "Develop and execute long-term plans for an organization's growth.", value: "business_strategy" },
        ],
    },
    {
        id: "q_com_6",
        text: "I find the stock market:",
        category: 'commerce',
        options: [
            { text: "Fascinating. I enjoy analyzing company performance to find good investments.", value: "analytical_investing" },
            { text: "Interesting, but I'm more curious about how companies raise money through IPOs.", value: "business_ipo" },
            { text: "Too risky. I'm more interested in ensuring financial stability and compliance.", value: "business_compliance" },
            { text: "A bit abstract. I'd rather focus on tangible products and services.", value: "creative_products" },
        ],
    },
    {
        id: "q_com_7",
        text: "Which business headline would you click first?",
        category: 'commerce',
        options: [
            { text: "'How to Build a Billion-Dollar Startup'", value: "business_entrepreneurship" },
            { text: "'Deep Dive: Analyzing the Annual Report of a Top Company'", value: "analytical_analysis" },
            { text: "'The Psychology Behind a Viral Marketing Campaign'", value: "creative_psychology" },
            { text: "'New Tax Law Changes: What They Mean For Your Business'", value: "business_tax" },
        ],
    },
    {
        id: "q_com_8",
        text: "I am better at:",
        category: 'commerce',
        options: [
            { text: "Working within a set of rules and regulations.", value: "analytical_rules" },
            { text: "Challenging the status quo and trying new things.", value: "creative_disruption" },
            { text: "Managing and optimizing complex processes.", value: "business_operations" },
            { text: "Building and maintaining strong professional relationships.", value: "social_networking" },
        ],
    },
    {
        id: "q_com_9",
        text: "I would prefer to manage:",
        category: 'commerce',
        options: [
            { text: "A company's money and investments (Treasury/Finance).", value: "business_treasury" },
            { text: "The people in a company (Human Resources).", value: "social_hr" },
            { text: "The movement of goods from factory to customer (Supply Chain).", value: "business_supplychain" },
            { text: "A company's brand image and public perception (Marketing/PR).", value: "creative_branding" },
        ],
    },
    {
        id: "q_com_10",
        text: "When reading about a company, I'm most interested in its:",
        category: 'commerce',
        options: [
            { text: "Profit and Loss Statement and Balance Sheet.", value: "analytical_financials" },
            { text: "Innovative products and future growth plans.", value: "business_growth" },
            { text: "Marketing strategies and brand partnerships.", value: "creative_partnerships" },
            { text: "Employee culture and leadership team.", value: "social_culture" },
        ],
    },
    {
        id: "q_com_11",
        text: "I'm motivated by:",
        category: 'commerce',
        options: [
            { text: "Achieving clear, measurable financial targets.", value: "business_targets" },
            { text: "Launching a product that people love.", value: "creative_launch" },
            { text: "Helping clients achieve their financial goals.", value: "social_advisory" },
            { text: "Ensuring everything is orderly, compliant, and correct.", value: "analytical_order" },
        ],
    },
    {
        id: "q_com_12",
        text: "What kind of risk are you most comfortable taking?",
        category: 'commerce',
        options: [
            { text: "Financial risk for a potentially high return.", value: "business_financial_risk" },
            { text: "Creative risk, trying a wild idea that might fail.", value: "creative_creative_risk" },
            { text: "Career risk, switching jobs for a better opportunity.", value: "business_career_risk" },
            { text: "I prefer to avoid risk and focus on stability and compliance.", value: "analytical_stability" },
        ],
    },
    {
        id: "q_com_13",
        text: "I am good at:",
        category: 'commerce',
        options: [
            { text: "Finding patterns and trends in data.", value: "analytical_patterns" },
            { text: "Explaining complex ideas in a simple way.", value: "social_communication" },
            { text: "Staying organized and managing multiple tasks at once.", value: "business_organization" },
            { text: "Thinking about the long-term impact of decisions.", value: "analytical_longterm" },
        ],
    },
    {
        id: "q_com_14",
        text: "Which environment suits you best?",
        category: 'commerce',
        options: [
            { text: "A fast-paced, high-pressure environment like a trading floor.", value: "business_fastpaced" },
            { text: "A creative and collaborative advertising agency.", value: "creative_agency" },
            { text: "A structured and professional corporate office.", value: "analytical_corporate" },
            { text: "My own office, advising individual clients.", value: "social_clientfacing" },
        ],
    },
    {
        id: "q_com_15",
        text: "I'd rather be known for being:",
        category: 'commerce',
        options: [
            { text: "Financially savvy and a great investor.", value: "business_savvy" },
            { text: "A brilliant and innovative marketer.", value: "creative_innovator" },
            { text: "An ethical and trustworthy leader.", value: "social_leader" },
            { text: "A meticulous and incorruptible professional.", value: "analytical_ethical" },
        ],
    },


    // Arts/Humanities Questions (15)
    {
        id: "q_art_1",
        text: "I am most drawn to:",
        category: 'arts',
        options: [
            { text: "Expressing complex ideas through compelling writing or speaking.", value: "humanities_expression" },
            { text: "Creating visual art and design (drawing, painting, digital media).", value: "creative_visual" },
            { text: "Understanding historical events and their influence on the present.", value: "humanities_history" },
            { text: "Helping people navigate their personal or emotional challenges.", value: "caring_counseling" },
        ],
    },
    {
        id: "q_art_2",
        text: "I would rather spend my free time:",
        category: 'arts',
        options: [
            { text: "Writing a story, poem, or a blog post.", value: "creative_writing" },
            { text: "Visiting an art gallery, museum, or a historical site.", value: "creative_museum" },
            { text: "Volunteering for a social cause or community organization.", value: "social_volunteering" },
            { text: "Debating complex social or political issues with friends.", value: "social_debate" },
        ],
    },
    {
        id: "q_art_3",
        text: "Which skill do you value more?",
        category: 'arts',
        options: [
            { text: "The ability to craft a powerful, persuasive argument.", value: "humanities_argument" },
            { text: "The ability to create something aesthetically beautiful and moving.", value: "creative_aesthetics" },
            { text: "The ability to deeply understand and empathize with different cultures.", value: "social_cultures" },
            { text: "The ability to conduct deep, thorough research to uncover hidden truths.", value: "analytical_research" },
        ],
    },
    {
        id: "q_art_4",
        text: "In a group project, I naturally take on the role of:",
        category: 'arts',
        options: [
            { text: "The creative director, shaping the vision and aesthetics.", value: "creative_concept" },
            { text: "The researcher, digging deep to find all the necessary information.", value:_researcher" },
            { text: "The writer/presenter, communicating our ideas clearly and effectively.", value: "humanities_communication" },
            { text: "The mediator, making sure everyone is heard and working together harmoniously.", value: "social_organizing" },
        ],
    },
    {
        id: "q_art_5",
        text: "I am fascinated by:",
        category: 'arts',
        options: [
            { text: "The power of language, media, and storytelling to shape opinions.", value: "humanities_language" },
            { text: "The principles of color, form, composition, and visual balance.", value: "creative_design" },
            { text: "The structures of societies, governments, and political systems.", value: "humanities_politics" },
            { text: "The complexities of human psychology and interpersonal behavior.", value: "social_psychology" },
        ],
    },
    {
        id: "q_art_6",
        text: "Which career sounds more appealing?",
        category: 'arts',
        options: [
            { text: "A lawyer defending a client in court.", value: "humanities_lawyer" },
            { text: "A journalist uncovering an important story.", value: "creative_journalist" },
            { text: "A psychologist helping a client through a difficult time.", value: "caring_psychologist" },
            { text: "A museum curator putting together a historical exhibition.", value: "humanities_curator" },
        ],
    },
    {
        id: "q_art_7",
        text: "I enjoy tasks that require:",
        category: 'arts',
        options: [
            { text: "Subjectivity and artistic interpretation.", value: "creative_subjective" },
            { text: "Objectivity and evidence-based analysis.", value: "analytical_objective" },
            { text: "Empathy and emotional intelligence.", value: "social_emotional" },
            { text: "Meticulous planning and organization.", value: "business_planning" },
        ],
    },
    {
        id: "q_art_8",
        text: "I am good at:",
        category: 'arts',
        options: [
            { text: "Spotting trends in fashion, art, or social media.", value: "creative_trends" },
            { text: "Remembering and connecting historical facts and dates.", value: "humanities_facts" },
            { text: "Listening to people's problems without judgment.", value: "caring_listening" },
            { text: "Explaining complex rules or systems to others.", value: "humanities_explaining" },
        ],
    },
    {
        id: "q_art_9",
        text: "Which environment would you thrive in?",
        category: 'arts',
        options: [
            { text: "A bustling newsroom or media house.", value: "creative_newsroom" },
            { text: "A quiet library, archive, or research institution.", value: "analytical_library" },
            { text: "A creative design studio or art workshop.", value: "creative_studio" },
            { text: "A school, university, or training center.", value: "social_teaching" },
        ],
    },
    {
        id: "q_art_10",
        text: "I find more value in:",
        category: 'arts',
        options: [
            { text: "Preserving cultural heritage and history.", value: "humanities_heritage" },
            { text: "Creating new forms of art and expression.", value: "creative_expression" },
            { text: "Advocating for social justice and policy change.", value: "social_advocacy" },
            { text: "Educating and inspiring the next generation.", value: "social_education" },
        ],
    },
    {
        id: "q_art_11",
        text: "I would like to create:",
        category: 'arts',
        options: [
            { text: "A compelling documentary film.", value: "creative_film" },
            { text: "A well-researched historical novel.", value: "humanities_novel" },
            { text: "A user-friendly and beautiful website or app.", value: "technical_webapp" },
            { text: "An effective public service campaign.", value: "social_campaign" },
        ],
    },
    {
        id: "q_art_12",
        text: "I'm patient with:",
        category: 'arts',
        options: [
            { text: "Long hours of detailed research and fact-checking.", value: "analytical_patience" },
            { text: "The slow process of creating a complex piece of art.", value: "creative_patience" },
            { text: "Listening to different viewpoints, even those I disagree with.", value: "social_patience" },
            { text: "Navigating complex bureaucratic or legal procedures.", value: "humanities_bureaucracy" },
        ],
    },
    {
        id: "q_art_13",
        text: "I'm more interested in:",
        category: 'arts',
        options: [
            { text: "Contemporary issues and current affairs.", value: "social_currentaffairs" },
            { text: "Ancient civilizations and past societies.", value: "humanities_ancient" },
            { text: "Futuristic ideas and creative possibilities.", value: "creative_future" },
            { text: "The universal principles of human behavior.", value: "analytical_behavior" },
        ],
    },
    {
        id: "q_art_14",
        text: "A good career for me must have:",
        category: 'arts',
        options: [
            { text: "A strong element of creativity and self-expression.", value: "creative_selfexpression" },
            { text: "A clear path for intellectual growth and learning.", value: "analytical_learning" },
            { text: "A direct, positive impact on people or society.", value: "social_impact" },
            { text: "Structure, stability, and clear rules.", value: "business_structure" },
        ],
    },
    {
        id: "q_art_15",
        text: "I would be good at:",
        category: 'arts',
        options: [
            { text: "Managing a hotel and ensuring guest satisfaction.", value: "social_hospitality" },
            { text: "Teaching a subject I'm passionate about to students.", value: "social_teaching_passion" },
            { text: "Designing the layout and flow of a physical space.", value: "creative_spacedesign" },
            { text: "Analyzing a foreign culture's customs and traditions.", value: "humanities_culture" },
        ],
    }
];
