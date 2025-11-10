
import type { Question } from './types';

export const quizQuestions: Question[] = [
    {
        id: "q_stream",
        text: "What was your stream in 11th & 12th?",
        category: 'initial',
        options: [
            { text: "Science (PCM/PCB)", value: "science" },
            { text: "Commerce", value: "commerce" },
            { text: "Arts / Humanities", value: "arts" },
        ],
    },
    {
        id: "q_science_subject",
        text: "Which Science subjects did you take?",
        category: 'stream_select_science',
        options: [
            { text: "PCM (Physics, Chemistry, Maths)", value: "science_pcm" },
            { text: "PCB (Physics, Chemistry, Biology)", value: "science_pcb" },
        ],
    },
    // Science PCM Questions (15)
    {
        id: "q_sci_pcm_1",
        text: "How do you solve a complex problem?",
        category: 'science_pcm',
        options: [
            { text: "Break it into small, logical steps.", value: "analytical_problemsolving" },
            { text: "Experiment with different parts to see what works.", value: "technical_hands-on" },
            { text: "Use math to predict the outcome.", value: "analytical_modeling" },
            { text: "Design a blueprint for the solution.", value: "creative_design" },
        ],
    },
    {
        id: "q_sci_pcm_2",
        text: "What fascinates you most?",
        category: 'science_pcm',
        options: [
            { text: "How software works.", value: "technical_systems" },
            { text: "The laws of the universe (physics).", value: "analytical_fundamental" },
            { text: "How big things like bridges are built.", value: "technical_structures" },
            { text: "Using data to build smart AI systems.", value: "analytical_ai" },
        ],
    },
    {
        id: "q_sci_pcm_3",
        text: "Which project sounds most exciting?",
        category: 'science_pcm',
        options: [
            { text: "Building a mobile app or game.", value: "technical_building" },
            { text: "Designing a better engine for a car.", value: "technical_engineering" },
            { text: "Using algorithms to predict stock market trends.", value: "analytical_data" },
            { text: "Launching a satellite to study a planet.", value: "analytical_aerospace" },
        ],
    },
    {
        id: "q_sci_pcm_4",
        text: "I enjoy learning about:",
        category: 'science_pcm',
        options: [
            { text: "New programming languages and tools.", value: "technical_tools" },
            { text: "Advanced math concepts.", value: "analytical_abstract" },
            { text: "How electronic circuits work.", value: "technical_electronics" },
            { text: "The chemistry of new materials or fuels.", value: "analytical_chemistry" },
        ],
    },
    {
        id: "q_sci_pcm_5",
        text: "My ideal work involves:",
        category: 'science_pcm',
        options: [
            { text: "Pure logic and abstract problem-solving.", value: "analytical_logical" },
            { text: "A mix of creative design and technical work.", value: "creative_technical" },
            { text: "Building real, physical things.", value: "technical_creation" },
            { text: "Analyzing data to find hidden patterns.", value: "analytical_analysis" },
        ],
    },
    {
        id: "q_sci_pcm_6",
        text: "In a team, I'm the one who:",
        category: 'science_pcm',
        options: [
            { text: "Writes the code to make things work.", value: "technical_doer" },
            { text: "Checks the math and theory to ensure accuracy.", value: "analytical_theorist" },
            { text: "Manages the project and timeline.", value: "business_manager" },
            { text: "Designs how the final product will look.", value: "creative_designer" },
        ],
    },
    {
        id: "q_sci_pcm_7",
        text: "I'm better at:",
        category: 'science_pcm',
        options: [
            { text: "Following a detailed plan precisely.", value: "technical_precision" },
            { text: "Thinking of a completely new solution.", value: "creative_innovator" },
            { text: "Analyzing one topic in great depth.", value: "analytical_deepdive" },
            { text: "Seeing the 'big picture' and how things connect.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcm_8",
        text: "My favorite subject is:",
        category: 'science_pcm',
        options: [
            { text: "Computer Science", value: "technical_cs" },
            { text: "Physics", value: "analytical_physics" },
            { text: "Mathematics", value: "analytical_math" },
            { text: "Chemistry", value: "analytical_chemistry_subject" },
        ],
    },
    {
        id: "q_sci_pcm_9",
        text: "I prefer a job that is:",
        category: 'science_pcm',
        options: [
            { text: "Mostly at a desk, coding or analyzing data.", value: "technical_desk" },
            { text: "A mix of desk work and hands-on work.", value: "technical_field" },
            { text: "Highly collaborative with team meetings.", value: "social_collaborative" },
            { text: "Independent, with deep focus on my own.", value: "analytical_independent" },
        ],
    },
    {
        id: "q_sci_pcm_10",
        text: "What's most important in a new technology?",
        category: 'science_pcm',
        options: [
            { text: "Its speed and efficiency.", value: "technical_performance" },
            { text: "Its user-friendly design.", value: "creative_ux" },
            { text: "Its potential to solve a world problem.", value: "social_impact" },
            { text: "The scientific breakthrough behind it.", value: "analytical_theory" },
        ],
    },
    {
        id: "q_sci_pcm_11",
        text: "What motivates you most?",
        category: 'science_pcm',
        options: [
            { text: "Solving a very difficult puzzle.", value: "analytical_challenge" },
            { text: "Building something useful for many people.", value: "technical_utility" },
            { text: "Creating something beautiful and functional.", value: "creative_aesthetics" },
            { text: "The thrill of discovering something new.", value: "analytical_discovery" },
        ],
    },
    {
        id: "q_sci_pcm_12",
        text: "When something breaks, I:",
        category: 'science_pcm',
        options: [
            { text: "Take it apart to fix it myself.", value: "technical_tinker" },
            { text: "Follow the manual's instructions carefully.", value: "analytical_methodical" },
            { text: "Research different ways to fix it.", value: "analytical_research" },
            { text: "Imagine a new, better device to replace it.", value: "creative_replacement" },
        ],
    },
    {
        id: "q_sci_pcm_13",
        text: "Are you interested in the business side of tech?",
        category: 'science_pcm',
        options: [
            { text: "Yes, managing teams and projects.", value: "business_projectmanagement" },
            { text: "Yes, analyzing market data for products.", value: "analytical_product" },
            { text: "Yes, handling budgets and finances.", value: "business_finance" },
            { text: "No, I prefer focusing only on technology.", value: "technical_focus" },
        ],
    },
    {
        id: "q_sci_pcm_14",
        text: "Which future tech excites you most?",
        category: 'science_pcm',
        options: [
            { text: "True Artificial Intelligence.", value: "analytical_agi" },
            { text: "Space travel and colonization.", value: "technical_space" },
            { text: "Quantum computing.", value: "analytical_quantum" },
            { text: "Brain-computer interfaces.", value: "technical_bci" },
        ],
    },
    {
        id: "q_sci_pcm_15",
        text: "I prefer working on:",
        category: 'science_pcm',
        options: [
            { text: "Software projects (apps, websites).", value: "technical_software" },
            { text: "Hardware projects (machines, electronics).", value: "technical_hardware" },
            { text: "Large infrastructure projects (buildings, power grids).", value: "technical_infrastructure" },
            { text: "Purely theoretical or research projects.", value: "analytical_research_projects" },
        ],
    },

    // Science PCB Questions (15)
    {
        id: "q_sci_pcb_1",
        text: "I am most curious about:",
        category: 'science_pcb',
        options: [
            { text: "How the human body works.", value: "caring_humanbody" },
            { text: "The web of life in nature.", value: "analytical_biology" },
            { text: "How medicines are made and work.", value: "analytical_pharma" },
            { text: "The health and care of animals.", value: "caring_animals" },
        ],
    },
    {
        id: "q_sci_pcb_2",
        text: "Which activity sounds best?",
        category: 'science_pcb',
        options: [
            { text: "Diagnosing a patient's complex illness.", value: "caring_diagnosis" },
            { text: "Doing a delicate lab experiment on genes.", value: "analytical_experiment" },
            { text: "Helping a patient walk again after an injury.", value: "caring_rehabilitation" },
            { text: "Working with plants to improve crops.", value: "technical_agriculture" },
        ],
    },
    {
        id: "q_sci_pcb_3",
        text: "I have a natural talent for:",
        category: 'science_pcb',
        options: [
            { text: "Tasks requiring steady hands and precision.", value: "technical_dexterity" },
            { text: "Patiently listening and understanding others.", value: "caring_empathy" },
            { text: "Memorizing complex biological terms.", value: "analytical_memory" },
            { text: "Noticing tiny details others might miss.", value: "analytical_observation" },
        ],
    },
    {
        id: "q_sci_pcb_4",
        text: "I prefer a career where I can:",
        category: 'science_pcb',
        options: [
            { text: "Directly care for sick people or animals.", value: "caring_helping" },
            { text: "Work in a research lab on new discoveries.", value: "analytical_research" },
            { text: "Advise people on health and nutrition.", value: "caring_advisory" },
            { text: "Use technology with living things to make new products.", value: "technical_biotech" },
        ],
    },
    {
        id: "q_sci_pcb_5",
        text: "Which documentary would you watch?",
        category: 'science_pcb',
        options: [
            { text: "A show about surgeons in an operating room.", value: "caring_medicaldoc" },
            { text: "A film about wildlife conservation.", value: "caring_wildlife" },
            { text: "The race to cure a genetic disease.", value: "analytical_geneticsdoc" },
            { text: "An exposé on food science and the future of food.", value: "analytical_food" },
        ],
    },
    {
        id: "q_sci_pcb_6",
        text: "In a medical emergency, I would be:",
        category: 'science_pcb',
        options: [
            { text: "Calm and focused, making quick decisions.", value: "caring_pressure" },
            { text: "Curious about the biological cause.", value: "analytical_cause" },
            { text: "Good at comforting the patient and family.", value: "caring_comfort" },
            { text: "Uncomfortable with the stress, I prefer a lab role.", value: "analytical_lab" },
        ],
    },
    {
        id: "q_sci_pcb_7",
        text: "Which topic is most interesting?",
        category: 'science_pcb',
        options: [
            { text: "Human anatomy and physiology.", value: "caring_anatomy" },
            { text: "Microbiology and immunology.", value: "analytical_microbiology" },
            { text: "How drugs affect the body.", value: "analytical_pharmacology" },
            { text: "Genetics and DNA.", value: "analytical_genetics" },
        ],
    },
    {
        id: "q_sci_pcb_8",
        text: "What gives you the most fulfillment?",
        category: 'science_pcb',
        options: [
            { text: "Seeing a patient recover because of me.", value: "caring_recovery" },
            { text: "Publishing a new research discovery.", value: "analytical_publication" },
            { text: "Creating a more sustainable way to grow food.", value: "technical_sustainability" },
            { text: "Mastering a complex lab technique.", value: "technical_technique" },
        ],
    },
    {
        id: "q_sci_pcb_9",
        text: "I would enjoy studying:",
        category: 'science_pcb',
        options: [
            { text: "The details of teeth and oral health.", value: "caring_dentistry" },
            { text: "How diet affects human health.", value: "caring_nutrition" },
            { text: "The structure and function of the eye.", value: "caring_ophthalmology" },
            { text: "How to use tech to create prosthetic limbs.", value: "technical_prosthetics" },
        ],
    },
    {
        id: "q_sci_pcb_10",
        text: "I am more of a:",
        category: 'science_pcb',
        options: [
            { text: "People person; I enjoy interaction.", value: "social_people" },
            { text: "Detail-oriented person; I focus on accuracy.", value: "analytical_detail" },
            { text: "Hands-on person; I learn by doing.", value: "technical_doing" },
            { text: "Big-picture person; I think long-term.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcb_11",
        text: "When I see a problem, my first instinct is to:",
        category: 'science_pcb',
        options: [
            { text: "Offer help and support right away.", value: "caring_support" },
            { text: "Research to understand its root cause.", value: "analytical_rootcause" },
            { text: "Think of a practical, step-by-step solution.", value: "technical_practical" },
            { text: "Analyze all possible outcomes before acting.", value: "analytical_outcomes" },
        ],
    },
    {
        id: "q_sci_pcb_12",
        text: "Which work environment do you prefer?",
        category: 'science_pcb',
        options: [
            { text: "A busy hospital or clinic.", value: "caring_hospital_env" },
            { text: "A quiet, focused research lab.", value: "analytical_lab_env" },
            { text: "Outdoors, in nature.", value: "technical_outdoors" },
            { text: "A large pharmaceutical company.", value: "business_corporate" },
        ],
    },
    {
        id: "q_sci_pcb_13",
        text: "I am good at handling:",
        category: 'science_pcb',
        options: [
            { text: "Emotional situations calmly.", value: "caring_emotional" },
            { text: "Large amounts of complex scientific data.", value: "analytical_datahandling" },
            { text: "Repetitive tasks that need high precision.", value: "technical_repetitive" },
            { text: "Long-term projects requiring patience.", value: "analytical_patience" },
        ],
    },
    {
        id: "q_sci_pcb_14",
        text: "My ideal contribution would be:",
        category: 'science_pcb',
        options: [
            { text: "Improving the quality of life for many.", value: "caring_qualityoflife" },
            { text: "Discovering a new species or process.", value: "analytical_discovery" },
            { text: "Developing a profitable biotech product.", value: "business_product" },
            { text: "Pioneering a new surgical technique.", value: "technical_surgery" },
        ],
    },
    {
        id: "q_sci_pcb_15",
        text: "I'm comfortable with a career that:",
        category: 'science_pcb',
        options: [
            { text: "Requires many years of higher education.", value: "analytical_longstudy" },
            { text: "Involves working with sick people or animals.", value: "caring_sickness" },
            { text: "Is a mix of both science and business.", value: "business_science" },
            { text: "Requires strong physical stamina.", value: "technical_stamina" },
        ],
    },


    // Commerce Questions (15)
    {
        id: "q_com_1",
        text: "I am more interested in:",
        category: 'commerce',
        options: [
            { text: "How businesses make and manage money.", value: "business_finance" },
            { text: "How products are advertised and sold.", value: "creative_marketing" },
            { text: "The legal rules companies must follow.", value: "analytical_law" },
            { text: "Using data to make smart business decisions.", value: "analytical_data" },
        ],
    },
    {
        id: "q_com_2",
        text: "When making a big decision, I rely on:",
        category: 'commerce',
        options: [
            { text: "Hard data, charts, and facts.", value: "analytical_statistics" },
            { text: "My gut feeling about people.", value: "social_intuition" },
            { text: "A detailed analysis of pros and cons.", value: "business_costbenefit" },
            { text: "A creative or unconventional approach.", value: "creative_brainstorming" },
        ],
    },
    {
        id: "q_com_3",
        text: "Which task sounds most interesting?",
        category: 'commerce',
        options: [
            { text: "Checking financial records for accuracy.", value: "business_reporting" },
            { text: "Creating a viral social media campaign.", value: "creative_campaign" },
            { text: "Negotiating a big-money deal.", value: "social_negotiation" },
            { text: "Planning a company's long-term growth strategy.", value: "analytical_strategy" },
        ],
    },
     {
        id: "q_com_4",
        text: "My strongest skill is:",
        category: 'commerce',
        options: [
            { text: "Being very careful with details.", value: "analytical_detail" },
            { text: "Thinking creatively and generating new ideas.", value: "creative_thinking" },
            { text: "Leading a team to achieve a goal.", value: "business_leadership" },
            { text: "Persuading others to agree with me.", value: "social_persuasion" },
        ],
    },
    {
        id: "q_com_5",
        text: "I would enjoy a job where I can:",
        category: 'commerce',
        options: [
            { text: "Work with numbers and spreadsheets.", value: "analytical_numbers" },
            { text: "Invent new solutions to problems.", value: "creative_solutions" },
            { text: "Talk to many different clients daily.", value: "social_interaction" },
            { text: "Plan for a company's long-term future.", value: "business_strategy" },
        ],
    },
    {
        id: "q_com_6",
        text: "How do you see the stock market?",
        category: 'commerce',
        options: [
            { text: "Fascinating; I like analyzing companies to invest.", value: "analytical_investing" },
            { text: "Interesting; I want to know how companies raise money.", value: "business_ipo" },
            { text: "Risky; I prefer ensuring financial stability.", value: "business_compliance" },
            { text: "Abstract; I prefer focusing on real products.", value: "creative_products" },
        ],
    },
    {
        id: "q_com_7",
        text: "Which business headline would you click first?",
        category: 'commerce',
        options: [
            { text: "'How to Build a Billion-Dollar Startup'", value: "business_entrepreneurship" },
            { text: "'Analyzing a Top Company's Annual Report'", value: "analytical_analysis" },
            { text: "'The Psychology of a Viral Ad Campaign'", value: "creative_psychology" },
            { text: "'New Tax Law Changes Explained'", value: "business_tax" },
        ],
    },
    {
        id: "q_com_8",
        text: "I am better at:",
        category: 'commerce',
        options: [
            { text: "Working within a clear set of rules.", value: "analytical_rules" },
            { text: "Challenging old ways and trying new things.", value: "creative_disruption" },
            { text: "Managing and improving complex processes.", value: "business_operations" },
            { text: "Building good professional relationships.", value: "social_networking" },
        ],
    },
    {
        id: "q_com_9",
        text: "I would prefer to manage:",
        category: 'commerce',
        options: [
            { text: "A company's money and investments.", value: "business_treasury" },
            { text: "A company's employees (HR).", value: "social_hr" },
            { text: "The flow of products to customers.", value: "business_supplychain" },
            { text: "A company's brand image and reputation.", value: "creative_branding" },
        ],
    },
    {
        id: "q_com_10",
        text: "When looking at a company, I'm most interested in its:",
        category: 'commerce',
        options: [
            { text: "Profit and Loss reports.", value: "analytical_financials" },
            { text: "New products and future plans.", value: "business_growth" },
            { text: "Marketing strategies.", value: "creative_partnerships" },
            { text: "Work culture and leadership.", value: "social_culture" },
        ],
    },
    {
        id: "q_com_11",
        text: "What motivates you?",
        category: 'commerce',
        options: [
            { text: "Hitting clear, measurable financial goals.", value: "business_targets" },
            { text: "Launching a product that people love.", value: "creative_launch" },
            { text: "Helping clients make smart financial choices.", value: "social_advisory" },
            { text: "Making sure everything is correct and follows the rules.", value: "analytical_order" },
        ],
    },
    {
        id: "q_com_12",
        text: "What kind of risk are you okay with?",
        category: 'commerce',
        options: [
            { text: "Financial risk, for a chance at a high reward.", value: "business_financial_risk" },
            { text: "Creative risk, trying a bold new idea.", value: "creative_creative_risk" },
            { text: "Career risk, like switching jobs for a better role.", value: "business_career_risk" },
            { text: "I prefer to avoid risks and focus on stability.", value: "analytical_stability" },
        ],
    },
    {
        id: "q_com_13",
        text: "I am good at:",
        category: 'commerce',
        options: [
            { text: "Finding patterns and trends in data.", value: "analytical_patterns" },
            { text: "Explaining complex ideas simply.", value: "social_communication" },
            { text: "Staying organized and managing many tasks.", value: "business_organization" },
            { text: "Thinking about the long-term results of a decision.", value: "analytical_longterm" },
        ],
    },
    {
        id: "q_com_14",
        text: "Which work environment suits you best?",
        category: 'commerce',
        options: [
            { text: "A fast-paced, high-pressure place like a trading floor.", value: "business_fastpaced" },
            { text: "A creative and collaborative ad agency.", value: "creative_agency" },
            { text: "A structured and professional corporate office.", value: "analytical_corporate" },
            { text: "My own office, advising individual clients.", value: "social_clientfacing" },
        ],
    },
    {
        id: "q_com_15",
        text: "I'd rather be known for being:",
        category: 'commerce',
        options: [
            { text: "Financially smart and a great investor.", value: "business_savvy" },
            { text: "A brilliant and creative marketer.", value: "creative_innovator" },
            { text: "An ethical and trusted leader.", value: "social_leader" },
            { text: "An honest professional who is great with details.", value: "analytical_ethical" },
        ],
    },


    // Arts/Humanities Questions (15)
    {
        id: "q_art_1",
        text: "I am most drawn to:",
        category: 'arts',
        options: [
            { text: "Expressing ideas through powerful writing or speaking.", value: "humanities_expression" },
            { text: "Creating visual art and designs.", value: "creative_visual" },
            { text: "Understanding how past events shape the present.", value: "humanities_history" },
            { text: "Helping people with their personal problems.", value: "caring_counseling" },
        ],
    },
    {
        id: "q_art_2",
        text: "How would you rather spend your free time?",
        category: 'arts',
        options: [
            { text: "Writing a story, poem, or blog post.", value: "creative_writing" },
            { text: "Visiting an art gallery or historical museum.", value: "creative_museum" },
            { text: "Volunteering for a social cause.", value: "social_volunteering" },
            { text: "Debating social or political issues.", value: "social_debate" },
        ],
    },
    {
        id: "q_art_3",
        text: "Which skill do you value more?",
        category: 'arts',
        options: [
            { text: "The ability to make a strong, persuasive argument.", value: "humanities_argument" },
            { text: "The ability to create something beautiful.", value: "creative_aesthetics" },
            { text: "The ability to understand and empathize with others.", value: "social_cultures" },
            { text: "The ability to do deep research to find hidden truths.", value: "analytical_research" },
        ],
    },
    {
        id: "q_art_4",
        text: "In a group project, I am usually the:",
        category: 'arts',
        options: [
            { text: "Creative director, shaping the overall vision.", value: "creative_concept" },
            { text: "Researcher, finding all the needed information.", value: "analytical_researcher" },
            { text: "Writer or presenter, communicating the main ideas.", value: "humanities_communication" },
            { text: "Mediator, making sure the team works well together.", value: "social_organizing" },
        ],
    },
    {
        id: "q_art_5",
        text: "I am fascinated by:",
        category: 'arts',
        options: [
            { text: "How language and media can shape opinions.", value: "humanities_language" },
            { text: "The principles of color, shape, and visual design.", value: "creative_design" },
            { text: "How societies and governments work.", value: "humanities_politics" },
            { text: "The complexities of the human mind.", value: "social_psychology" },
        ],
    },
    {
        id: "q_art_6",
        text: "Which career sounds most appealing?",
        category: 'arts',
        options: [
            { text: "A lawyer defending a case in court.", value: "humanities_lawyer" },
            { text: "A journalist investigating an important story.", value: "creative_journalist" },
            { text: "A psychologist helping a client.", value: "caring_psychologist" },
            { text: "A museum curator creating a historical exhibit.", value: "humanities_curator" },
        ],
    },
    {
        id: "q_art_7",
        text: "I enjoy tasks that require:",
        category: 'arts',
        options: [
            { text: "My personal creativity and interpretation.", value: "creative_subjective" },
            { text: "Facts, evidence, and objective analysis.", value: "analytical_objective" },
            { text: "Empathy and emotional understanding.", value: "social_emotional" },
            { text: "Careful planning and organization.", value: "business_planning" },
        ],
    },
    {
        id: "q_art_8",
        text: "I am good at:",
        category: 'arts',
        options: [
            { text: "Spotting new trends in fashion, art, or social media.", value: "creative_trends" },
            { text: "Remembering and connecting historical facts.", value: "humanities_facts" },
            { text: "Listening to people's problems without judging.", value: "caring_listening" },
            { text: "Explaining complex rules or systems to others.", value: "humanities_explaining" },
        ],
    },
    {
        id: "q_art_9",
        text: "Which environment would you prefer?",
        category: 'arts',
        options: [
            { text: "A fast-paced newsroom or media company.", value: "creative_newsroom" },
            { text: "A quiet library or research center.", value: "analytical_library" },
            { text: "A creative design studio or workshop.", value: "creative_studio" },
            { text: "A school, university, or classroom.", value: "social_teaching" },
        ],
    },
    {
        id: "q_art_10",
        text: "What do you find most valuable?",
        category: 'arts',
        options: [
            { text: "Preserving history and cultural heritage.", value: "humanities_heritage" },
            { text: "Creating new and original forms of art.", value: "creative_expression" },
            { text: "Fighting for social justice and change.", value: "social_advocacy" },
            { text: "Educating and inspiring the next generation.", value: "social_education" },
        ],
    },
    {
        id: "q_art_11",
        text: "I would like to create:",
        category: 'arts',
        options: [
            { text: "A powerful documentary film.", value: "creative_film" },
            { text: "A well-researched historical book.", value: "humanities_novel" },
            { text: "A beautiful and easy-to-use website or app.", value: "technical_webapp" },
            { text: "An effective campaign for a social cause.", value: "social_campaign" },
        ],
    },
    {
        id: "q_art_12",
        text: "I have patience for:",
        category: 'arts',
        options: [
            { text: "Long hours of detailed research and fact-checking.", value: "analytical_patience" },
            { text: "The slow process of creating a complex piece of art.", value: "creative_patience" },
            { text: "Listening to different opinions, even if I disagree.", value: "social_patience" },
            { text: "Dealing with complex rules and official procedures.", value: "humanities_bureaucracy" },
        ],
    },
    {
        id: "q_art_13",
        text: "I am more interested in:",
        category: 'arts',
        options: [
            { text: "Today's social issues and current events.", value: "social_currentaffairs" },
            { text: "Ancient civilizations and past societies.", value: "humanities_ancient" },
            { text: "Futuristic ideas and creative possibilities.", value: "creative_future" },
            { text: "The fundamental principles of human behavior.", value: "analytical_behavior" },
        ],
    },
    {
        id: "q_art_14",
        text: "A good career for me must involve:",
        category: 'arts',
        options: [
            { text: "A lot of creativity and self-expression.", value: "creative_selfexpression" },
            { text: "Constant learning and intellectual growth.", value: "analytical_learning" },
            { text: "A direct, positive impact on people or society.", value: "social_impact" },
            { text: "Structure, stability, and clear guidelines.", value: "business_structure" },
        ],
    },
    {
        id: "q_art_15",
        text: "I would be good at:",
        category: 'arts',
        options: [
            { text: "Managing a hotel and keeping guests happy.", value: "social_hospitality" },
            { text: "Teaching a subject I love to students.", value: "social_teaching_passion" },
            { text: "Designing the layout of a room or building.", value: "creative_spacedesign" },
            { text: "Analyzing the customs of a foreign culture.", value: "humanities_culture" },
        ],
    }
];
