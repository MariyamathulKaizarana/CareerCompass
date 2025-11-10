
import type { Question } from './types';

export const quizQuestions: Question[] = [
    {
        id: "q_stream",
        text: "Which stream did you choose in 11th and 12th grade?",
        category: 'initial',
        options: [
            { text: "Science (PCM/PCB)", value: "science" },
            { text: "Commerce", value: "commerce" },
            { text: "Arts / Humanities", value: "arts" },
        ],
    },
    {
        id: "q_science_subject",
        text: "Which subjects did you have in Science?",
        category: 'stream_select_science',
        options: [
            { text: "PCM (Physics, Chemistry, Maths)", value: "science_pcm" },
            { text: "PCB (Physics, Chemistry, Biology)", value: "science_pcb" },
        ],
    },
    // Science PCM Questions (15)
    {
        id: "q_sci_pcm_1",
        text: "When you face a complex problem, you prefer to:",
        category: 'science_pcm',
        options: [
            { text: "Break it into small, logical steps.", value: "analytical_problemsolving" },
            { text: "Experiment with different parts to see what works.", value: "technical_hands-on" },
            { text: "Use math to predict what will happen.", value: "analytical_modeling" },
            { text: "Design a plan or blueprint for the solution.", value: "creative_design" },
        ],
    },
    {
        id: "q_sci_pcm_2",
        text: "What fascinates you the most?",
        category: 'science_pcm',
        options: [
            { text: "How computers and software work.", value: "technical_systems" },
            { text: "The laws of the universe (like gravity and energy).", value: "analytical_physics" },
            { text: "How large structures like bridges are built.", value: "technical_structures" },
            { text: "How chemicals react to create new materials.", value: "analytical_chemistry" },
        ],
    },
    {
        id: "q_sci_pcm_3",
        text: "Which project sounds most exciting to you?",
        category: 'science_pcm',
        options: [
            { text: "Building a mobile app or a video game.", value: "technical_building" },
            { text: "Designing a more efficient engine for a car.", value: "technical_engineering" },
            { text: "Analyzing data with algorithms to predict trends.", value: "analytical_data" },
            { text: "Developing a new, stronger type of plastic.", value: "analytical_materials" },
        ],
    },
    {
        id: "q_sci_pcm_4",
        text: "You enjoy learning about:",
        category: 'science_pcm',
        options: [
            { text: "New programming languages and software tools.", value: "technical_tools" },
            { text: "Advanced math concepts and theories.", value: "analytical_abstract" },
            { text: "How electronic circuits and power grids work.", value: "technical_electronics" },
            { text: "How to design and run large-scale chemical manufacturing processes.", value: "analytical_process" },
        ],
    },
    {
        id: "q_sci_pcm_5",
        text: "Your ideal work involves:",
        category: 'science_pcm',
        options: [
            { text: "Solving abstract problems with pure logic.", value: "analytical_logical" },
            { text: "A mix of creative design and technical work.", value: "creative_technical" },
            { text: "Building real, physical things you can touch.", value: "technical_creation" },
            { text: "Working with the fundamental particles and forces of nature.", value: "analytical_fundamental" },
        ],
    },
    {
        id: "q_sci_pcm_6",
        text: "In a team project, you are the one who:",
        category: 'science_pcm',
        options: [
            { text: "Writes the code to make the system work.", value: "technical_doer" },
            { text: "Checks the math and physics to make sure the plan is sound.", value: "analytical_theorist" },
            { text: "Manages the project, timeline, and people.", value: "business_manager" },
            { text: "Designs how the final product will look and feel.", value: "creative_designer" },
        ],
    },
    {
        id: "q_sci_pcm_7",
        text: "You are better at:",
        category: 'science_pcm',
        options: [
            { text: "Following a detailed plan very carefully.", value: "technical_precision" },
            { text: "Thinking of a completely new way to solve a problem.", value: "creative_innovator" },
            { text: "Analyzing one complex topic in great depth.", value: "analytical_deepdive" },
            { text: "Seeing the 'big picture' and how everything connects.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcm_8",
        text: "Which subject do you enjoy most?",
        category: 'science_pcm',
        options: [
            { text: "Computer Science (Programming)", value: "technical_cs" },
            { text: "Physics (How things work)", value: "analytical_physics" },
            { text: "Mathematics (Solving complex equations)", value: "analytical_math" },
            { text: "Chemistry (Reactions and materials)", value: "analytical_chemistry_subject" },
        ],
    },
    {
        id: "q_sci_pcm_9",
        text: "You would prefer a job that is:",
        category: 'science_pcm',
        options: [
            { text: "Mostly at a desk, coding or analyzing data.", value: "technical_desk" },
            { text: "A mix of desk work and hands-on work in a lab or factory.", value: "technical_field" },
            { text: "Highly collaborative with lots of team meetings.", value: "social_collaborative" },
            { text: "Independent, letting you focus deeply on your own.", value: "analytical_independent" },
        ],
    },
    {
        id: "q_sci_pcm_10",
        text: "What's the most important aspect of a new technology?",
        category: 'science_pcm',
        options: [
            { text: "How fast and efficient it is.", value: "technical_performance" },
            { text: "How easy it is for people to use.", value: "creative_ux" },
            { text: "Its potential to solve a major world problem.", value: "social_impact" },
            { text: "The scientific breakthrough that made it possible.", value: "analytical_theory" },
        ],
    },
    {
        id: "q_sci_pcm_11",
        text: "What motivates you the most?",
        category: 'science_pcm',
        options: [
            { text: "Solving a puzzle that no one else could.", value: "analytical_challenge" },
            { text: "Building something that many people will find useful.", value: "technical_utility" },
            { text: "Discovering something new about the universe.", value: "analytical_discovery" },
            { text: "Optimizing a process to make it safer and cheaper.", value: "analytical_optimization" },
        ],
    },
    {
        id: "q_sci_pcm_12",
        text: "When something breaks, you are most likely to:",
        category: 'science_pcm',
        options: [
            { text: "Take it apart to see how it works and try to fix it.", value: "technical_tinker" },
            { text: "Read the manual and follow the instructions carefully.", value: "analytical_methodical" },
            { text: "Search online for different ways to fix it.", value: "analytical_research" },
            { text: "Analyze why it broke based on its design.", value: "analytical_failure_analysis" },
        ],
    },
    {
        id: "q_sci_pcm_13",
        text: "Are you interested in the business side of technology?",
        category: 'science_pcm',
        options: [
            { text: "Yes, I'd like to manage development teams and timelines.", value: "business_projectmanagement" },
            { text: "Yes, I'd like to analyze market data to decide what to build.", value: "analytical_product" },
            { text: "Yes, I'm interested in the financial side, like budgeting.", value: "business_finance" },
            { text: "No, I prefer to focus only on the technology itself.", value: "technical_focus" },
        ],
    },
    {
        id: "q_sci_pcm_14",
        text: "Which future technology excites you most?",
        category: 'science_pcm',
        options: [
            { text: "True Artificial Intelligence (like in movies).", value: "analytical_ai" },
            { text: "Space travel and living on other planets.", value: "technical_space" },
            { text: "Limitless clean energy from nuclear fusion.", value: "analytical_energy" },
            { text: "Connecting brains directly to computers.", value: "technical_bci" },
        ],
    },
    {
        id: "q_sci_pcm_15",
        text: "You prefer working on:",
        category: 'science_pcm',
        options: [
            { text: "Software projects (apps, websites, AI).", value: "technical_software" },
            { text: "Hardware projects (machines, electronics, robots).", value: "technical_hardware" },
            { text: "Large industrial processes (refineries, power plants).", value: "technical_infrastructure" },
            { text: "Purely theoretical or research projects.", value: "analytical_research_projects" },
        ],
    },

    // Science PCB Questions (15)
    {
        id: "q_sci_pcb_1",
        text: "You are most curious about:",
        category: 'science_pcb',
        options: [
            { text: "How the human body works and how to treat diseases.", value: "caring_humanbody" },
            { text: "How all living things in an ecosystem are connected.", value: "analytical_biology" },
            { text: "How medicines are made and how they affect our cells.", value: "analytical_pharma" },
            { text: "The health of animals and how to care for them.", value: "caring_animals" },
        ],
    },
    {
        id: "q_sci_pcb_2",
        text: "Which activity sounds most appealing?",
        category: 'science_pcb',
        options: [
            { text: "Diagnosing a patient's complex illness.", value: "caring_diagnosis" },
            { text: "Doing a delicate lab experiment to change a gene.", value: "analytical_experiment" },
            { text: "Helping a patient walk again after a serious injury.", value: "caring_rehabilitation" },
            { text: "Working with plants to grow better crops.", value: "technical_agriculture" },
        ],
    },
    {
        id: "q_sci_pcb_3",
        text: "You have a natural talent for:",
        category: 'science_pcb',
        options: [
            { text: "Tasks that require steady hands and precision.", value: "technical_dexterity" },
            { text: "Listening patiently and understanding others' problems.", value: "caring_empathy" },
            { text: "Memorizing complex biological terms and processes.", value: "analytical_memory" },
            { text: "Noticing small details that others often miss.", value: "analytical_observation" },
        ],
    },
    {
        id: "q_sci_pcb_4",
        text: "You would prefer a career where you can:",
        category: 'science_pcb',
        options: [
            { text: "Directly care for sick people or animals.", value: "caring_helping" },
            { text: "Work in a research lab on new scientific discoveries.", value: "analytical_research" },
            { text: "Advise people on health, diet, and lifestyle.", value: "caring_advisory" },
            { text: "Use technology with living things to create new products.", value: "technical_biotech" },
        ],
    },
    {
        id: "q_sci_pcb_5",
        text: "What kind of documentary would you watch?",
        category: 'science_pcb',
        options: [
            { text: "A show about surgeons in a busy operating room.", value: "caring_medicaldoc" },
            { text: "A film about protecting endangered wildlife.", value: "caring_wildlife" },
            { text: "A story about the race to cure a genetic disease.", value: "analytical_geneticsdoc" },
            { text: "An investigation into food science and the future of food.", value: "analytical_food" },
        ],
    },
    {
        id: "q_sci_pcb_6",
        text: "In a medical emergency, you would be:",
        category: 'science_pcb',
        options: [
            { text: "Calm and focused, making quick decisions under pressure.", value: "caring_pressure" },
            { text: "Curious about the biological cause of the emergency.", value: "analytical_cause" },
            { text: "Good at comforting the patient and their family.", value: "caring_comfort" },
            { text: "Preferring to be in a lab, away from the stress.", value: "analytical_lab" },
        ],
    },
    {
        id: "q_sci_pcb_7",
        text: "Which of these topics is most interesting to you?",
        category: 'science_pcb',
        options: [
            { text: "Human anatomy (the structure of the body).", value: "caring_anatomy" },
            { text: "Microbiology (germs, viruses, and immunity).", value: "analytical_microbiology" },
            { text: "Pharmacology (how drugs work).", value: "analytical_pharmacology" },
            { text: "Genetics (DNA and heredity).", value: "analytical_genetics" },
        ],
    },
    {
        id: "q_sci_pcb_8",
        text: "What gives you the most fulfillment?",
        category: 'science_pcb',
        options: [
            { text: "Seeing a patient get better because of your care.", value: "caring_recovery" },
            { text: "Publishing a research paper with a new discovery.", value: "analytical_publication" },
            { text: "Creating a more sustainable way to grow food.", value: "technical_sustainability" },
            { text: "Mastering a difficult technique in the laboratory.", value: "technical_technique" },
        ],
    },
    {
        id: "q_sci_pcb_9",
        text: "You would enjoy studying:",
        category: 'science_pcb',
        options: [
            { text: "The details of teeth and oral health.", value: "caring_dentistry" },
            { text: "How diet affects human health.", value: "caring_nutrition" },
            { text: "The structure and function of the eye.", value: "caring_ophthalmology" },
            { text: "How to use technology to create artificial limbs.", value: "technical_prosthetics" },
        ],
    },
    {
        id: "q_sci_pcb_10",
        text: "Are you more of a:",
        category: 'science_pcb',
        options: [
            { text: "People person; you enjoy interaction.", value: "social_people" },
            { text: "Detail-oriented person; you focus on accuracy.", value: "analytical_detail" },
            { text: "Hands-on person; you learn by doing.", value: "technical_doing" },
            { text: "Big-picture person; you think about the long run.", value: "analytical_bigpicture" },
        ],
    },
    {
        id: "q_sci_pcb_11",
        text: "When you see a problem, your first instinct is to:",
        category: 'science_pcb',
        options: [
            { text: "Offer help and support immediately.", value: "caring_support" },
            { text: "Research the problem to understand its root cause.", value: "analytical_rootcause" },
            { text: "Think of a practical, step-by-step solution.", value: "technical_practical" },
            { text: "Analyze all possible results before you act.", value: "analytical_outcomes" },
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
            { text: "A large pharmaceutical or biotech company.", value: "business_corporate" },
        ],
    },
    {
        id: "q_sci_pcb_13",
        text: "You are good at handling:",
        category: 'science_pcb',
        options: [
            { text: "Emotional situations with a calm attitude.", value: "caring_emotional" },
            { text: "Large amounts of complex scientific data.", value: "analytical_datahandling" },
            { text: "Repetitive tasks that need high precision.", value: "technical_repetitive" },
            { text: "Long-term projects that need a lot of patience.", value: "analytical_patience" },
        ],
    },
    {
        id: "q_sci_pcb_14",
        text: "Your ideal contribution to science would be:",
        category: 'science_pcb',
        options: [
            { text: "Improving the quality of life for many people.", value: "caring_qualityoflife" },
            { text: "Discovering a new species or biological process.", value: "analytical_discovery" },
            { text: "Developing a profitable and useful biotech product.", value: "business_product" },
            { text: "Creating a new and better surgical technique.", value: "technical_surgery" },
        ],
    },
    {
        id: "q_sci_pcb_15",
        text: "You are comfortable with:",
        category: 'science_pcb',
        options: [
            { text: "A career that requires many years of higher education.", value: "analytical_longstudy" },
            { text: "A career that involves working with sick or injured people/animals.", value: "caring_sickness" },
            { text: "A career that is a mix of science and business.", value: "business_science" },
            { text: "A career that needs you to be physically strong.", value: "technical_stamina" },
        ],
    },


    // Commerce Questions (15)
    {
        id: "q_com_1",
        text: "You are more interested in:",
        category: 'commerce',
        options: [
            { text: "How businesses make and manage money.", value: "business_finance" },
            { text: "How products are advertised and sold.", value: "creative_marketing" },
            { text: "The legal rules that companies must follow.", value: "analytical_law" },
            { text: "Using data to make smart business decisions.", value: "analytical_data" },
        ],
    },
    {
        id: "q_com_2",
        text: "When making a big decision, you rely on:",
        category: 'commerce',
        options: [
            { text: "Hard data, charts, and facts.", value: "analytical_statistics" },
            { text: "Your intuition and understanding of people.", value: "social_intuition" },
            { text: "A detailed analysis of pros and cons.", value: "business_costbenefit" },
            { text: "A creative or unconventional approach.", value: "creative_brainstorming" },
        ],
    },
    {
        id: "q_com_3",
        text: "Which of these tasks sounds most interesting?",
        category: 'commerce',
        options: [
            { text: "Checking a company's financial records for accuracy.", value: "business_reporting" },
            { text: "Creating a viral social media marketing campaign.", value: "creative_campaign" },
            { text: "Negotiating a big-money deal between two companies.", value: "social_negotiation" },
            { text: "Planning a long-term strategy for a company to grow.", value: "analytical_strategy" },
        ],
    },
     {
        id: "q_com_4",
        text: "Your strongest skill is:",
        category: 'commerce',
        options: [
            { text: "Being very careful with details and accuracy.", value: "analytical_detail" },
            { text: "Thinking creatively and coming up with new ideas.", value: "creative_thinking" },
            { text: "Leading a team and motivating people.", value: "business_leadership" },
            { text: "Persuading others to agree with you.", value: "social_persuasion" },
        ],
    },
    {
        id: "q_com_5",
        text: "You would enjoy a job where you can:",
        category: 'commerce',
        options: [
            { text: "Work with numbers, spreadsheets, and financial reports.", value: "analytical_numbers" },
            { text: "Constantly invent new solutions to problems.", value: "creative_solutions" },
            { text: "Talk to many different clients and partners every day.", value: "social_interaction" },
            { text: "Plan for the long-term growth of a company.", value: "business_strategy" },
        ],
    },
    {
        id: "q_com_6",
        text: "You find the stock market:",
        category: 'commerce',
        options: [
            { text: "Fascinating; I enjoy analyzing companies to invest in.", value: "analytical_investing" },
            { text: "Interesting, but I'm more curious about how companies raise money.", value: "business_ipo" },
            { text: "Too risky; I prefer ensuring financial stability.", value: "business_compliance" },
            { text: "A bit abstract; I'd rather focus on real products.", value: "creative_products" },
        ],
    },
    {
        id: "q_com_7",
        text: "Which business news headline would you click first?",
        category: 'commerce',
        options: [
            { text: "'How to Build a Billion-Dollar Company'", value: "business_entrepreneurship" },
            { text: "'A Deep Look into a Top Company's Annual Report'", value: "analytical_analysis" },
            { text: "'The Secret Psychology of a Viral Ad Campaign'", value: "creative_psychology" },
            { text: "'New Tax Law Changes: What They Mean For You'", value: "business_tax" },
        ],
    },
    {
        id: "q_com_8",
        text: "You are better at:",
        category: 'commerce',
        options: [
            { text: "Working within a clear set of rules.", value: "analytical_rules" },
            { text: "Challenging old ways and trying new things.", value: "creative_disruption" },
            { text: "Managing and improving complex processes.", value: "business_operations" },
            { text: "Building and maintaining good professional relationships.", value: "social_networking" },
        ],
    },
    {
        id: "q_com_9",
        text: "You would prefer to manage:",
        category: 'commerce',
        options: [
            { text: "A company's money and investments.", value: "business_treasury" },
            { text: "The employees in a company (HR).", value: "social_hr" },
            { text: "The flow of products from factory to customer.", value: "business_supplychain" },
            { text: "A company's brand image and reputation.", value: "creative_branding" },
        ],
    },
    {
        id: "q_com_10",
        text: "When reading about a company, you're most interested in its:",
        category: 'commerce',
        options: [
            { text: "Profit and Loss reports.", value: "analytical_financials" },
            { text: "New products and plans for the future.", value: "business_growth" },
            { text: "Marketing strategies and brand image.", value: "creative_partnerships" },
            { text: "Work culture and leadership.", value: "social_culture" },
        ],
    },
    {
        id: "q_com_11",
        text: "What motivates you?",
        category: 'commerce',
        options: [
            { text: "Hitting clear, measurable financial goals.", value: "business_targets" },
            { text: "Launching a product that people absolutely love.", value: "creative_launch" },
            { text: "Helping clients make smart financial decisions.", value: "social_advisory" },
            { text: "Making sure everything is organized, correct, and follows the rules.", value: "analytical_order" },
        ],
    },
    {
        id: "q_com_12",
        text: "What kind of risk are you most comfortable with?",
        category: 'commerce',
        options: [
            { text: "Financial risk, for a chance at a high reward.", value: "business_financial_risk" },
            { text: "Creative risk, trying a bold new idea that might fail.", value: "creative_creative_risk" },
            { text: "Career risk, like switching jobs for a better role.", value: "business_career_risk" },
            { text: "I prefer to avoid risks and focus on stability.", value: "analytical_stability" },
        ],
    },
    {
        id: "q_com_13",
        text: "You are good at:",
        category: 'commerce',
        options: [
            { text: "Finding patterns and trends in data.", value: "analytical_patterns" },
            { text: "Explaining complex ideas in a simple, clear way.", value: "social_communication" },
            { text: "Staying organized and juggling multiple tasks.", value: "business_organization" },
            { text: "Thinking about the long-term results of a decision.", value: "analytical_longterm" },
        ],
    },
    {
        id: "q_com_14",
        text: "Which work environment suits you best?",
        category: 'commerce',
        options: [
            { text: "A fast-paced, high-pressure place like a trading floor.", value: "business_fastpaced" },
            { text: "A creative and collaborative team in an ad agency.", value: "creative_agency" },
            { text: "A structured and professional corporate office.", value: "analytical_corporate" },
            { text: "My own office, advising individual clients one-on-one.", value: "social_clientfacing" },
        ],
    },
    {
        id: "q_com_15",
        text: "You'd rather be known for being:",
        category: 'commerce',
        options: [
            { text: "Financially smart and a great investor.", value: "business_savvy" },
            { text: "A brilliant and creative marketer.", value: "creative_innovator" },
            { text: "An ethical and trusted leader.", value: "social_leader" },
            { text: "A professional who is detail-oriented and honest.", value: "analytical_ethical" },
        ],
    },


    // Arts/Humanities Questions (15)
    {
        id: "q_art_1",
        text: "You are most drawn to:",
        category: 'arts',
        options: [
            { text: "Expressing ideas through powerful writing or speaking.", value: "humanities_expression" },
            { text: "Creating visual art and designs.", value: "creative_visual" },
            { text: "Understanding how past events influence the present.", value: "humanities_history" },
            { text: "Helping people with their personal or emotional problems.", value: "caring_counseling" },
        ],
    },
    {
        id: "q_art_2",
        text: "How would you rather spend your free time?",
        category: 'arts',
        options: [
            { text: "Writing a story, poem, or blog post.", value: "creative_writing" },
            { text: "Visiting an art gallery, museum, or historical place.", value: "creative_museum" },
            { text: "Volunteering for a social cause you care about.", value: "social_volunteering" },
            { text: "Debating social or political issues with friends.", value: "social_debate" },
        ],
    },
    {
        id: "q_art_3",
        text: "Which skill do you value more?",
        category: 'arts',
        options: [
            { text: "The ability to make a strong, persuasive argument.", value: "humanities_argument" },
            { text: "The ability to create something beautiful and moving.", value: "creative_aesthetics" },
            { text: "The ability to understand and empathize with other cultures.", value: "social_cultures" },
            { text: "The ability to do deep research to find hidden truths.", value: "analytical_research" },
        ],
    },
    {
        id: "q_art_4",
        text: "In a group project, you are usually the:",
        category: 'arts',
        options: [
            { text: "Creative director, who shapes the overall vision.", value: "creative_concept" },
            { text: "Researcher, who finds all the needed information.", value: "analytical_researcher" },
            { text: "Writer/presenter, who communicates the main ideas.", value: "humanities_communication" },
            { text: "Mediator, who makes sure the team works well together.", value: "social_organizing" },
        ],
    },
    {
        id: "q_art_5",
        text: "You are fascinated by:",
        category: 'arts',
        options: [
            { text: "How language, media, and stories can shape opinions.", value: "humanities_language" },
            { text: "The principles of color, shape, and visual design.", value: "creative_design" },
            { text: "How societies, governments, and political systems work.", value: "humanities_politics" },
            { text: "The complexities of the human mind and behavior.", value: "social_psychology" },
        ],
    },
    {
        id: "q_art_6",
        text: "Which career sounds most appealing?",
        category: 'arts',
        options: [
            { text: "A lawyer defending a case in court.", value: "humanities_lawyer" },
            { text: "A journalist investigating an important story.", value: "creative_journalist" },
            { text: "A psychologist helping a client through a tough time.", value: "caring_psychologist" },
            { text: "A museum curator creating a historical exhibition.", value: "humanities_curator" },
        ],
    },
    {
        id: "q_art_7",
        text: "You enjoy tasks that require:",
        category: 'arts',
        options: [
            { text: "Your personal creativity and interpretation.", value: "creative_subjective" },
            { text: "Facts, evidence, and objective analysis.", value: "analytical_objective" },
            { text: "Empathy and emotional understanding.", value: "social_emotional" },
            { text: "Careful planning and organization.", value: "business_planning" },
        ],
    },
    {
        id: "q_art_8",
        text: "You are good at:",
        category: 'arts',
        options: [
            { text: "Spotting new trends in fashion, art, or social media.", value: "creative_trends" },
            { text: "Remembering and connecting historical facts.", value: "humanities_facts" },
            { text: "Listening to people's problems without judging.", value: "caring_listening" },
            { text: "Explaining complex rules or systems to other people.", value: "humanities_explaining" },
        ],
    },
    {
        id: "q_art_9",
        text: "Which environment would you prefer?",
        category: 'arts',
        options: [
            { text: "A fast-paced newsroom or media company.", value: "creative_newsroom" },
            { text: "A quiet library, archive, or research center.", value: "analytical_library" },
            { text: "A creative design studio or art workshop.", value: "creative_studio" },
            { text: "A school, university, or classroom setting.", value: "social_teaching" },
        ],
    },
    {
        id: "q_art_10",
        text: "What do you find most valuable?",
        category: 'arts',
        options: [
            { text: "Preserving history and cultural heritage.", value: "humanities_heritage" },
            { text: "Creating new and original forms of art.", value: "creative_expression" },
            { text: "Fighting for social justice and positive change.", value: "social_advocacy" },
            { text: "Educating and inspiring the next generation.", value: "social_education" },
        ],
    },
    {
        id: "q_art_11",
        text: "You would like to create:",
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
        text: "You have patience for:",
        category: 'arts',
        options: [
            { text: "Long hours of detailed research and fact-checking.", value: "analytical_patience" },
            { text: "The slow and careful process of creating art.", value: "creative_patience" },
            { text: "Listening to different opinions, even if you disagree.", value: "social_patience" },
            { text: "Dealing with complex rules and official procedures.", value: "humanities_bureaucracy" },
        ],
    },
    {
        id: "q_art_13",
        text: "You are more interested in:",
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
        text: "A good career for you must involve:",
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
        text: "You would be good at:",
        category: 'arts',
        options: [
            { text: "Managing a hotel and keeping guests happy.", value: "social_hospitality" },
            { text: "Teaching a subject you love to students.", value: "social_teaching_passion" },
            { text: "Designing the layout of a room or building.", value: "creative_spacedesign" },
            { text: "Analyzing the customs of a foreign culture.", value: "humanities_culture" },
        ],
    }
];
