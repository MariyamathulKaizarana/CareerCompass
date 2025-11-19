# CareerCompass: Your AI-Powered Career Guide

CareerCompass is a comprehensive web application designed to help students and young professionals navigate the complex landscape of career choices. It leverages AI to provide personalized guidance, moving beyond simple career listings to offer a truly interactive and insightful experience.

The user journey begins with a dynamic, multi-step quiz that adapts based on the user's academic stream (Science, Commerce, or Arts). Upon completion, a Genkit-powered AI flow analyzes the responses to identify the user's core interests and strengths, generating a set of tailored career suggestions. Users can then explore these suggestions, view detailed career reports, browse a comprehensive list of career paths and related courses, and save their favorite options to a personalized dashboard. The platform also includes an AI-powered search and an "Honours Advisor" to help engineering students select specialized courses.

## Technical Implementation Details

The application is built on a modern, robust, and scalable stack, chosen to optimize for development velocity, performance, and security.

### Frontend: Next.js & React

- **Framework**: **Next.js 14** with the **App Router** is used for the frontend. This enables a hybrid approach where some pages are server-rendered for fast initial load times and SEO (e.g., career details), while others are highly interactive client-side applications (e.g., the quiz).
- **Language & UI**: The code is written in **TypeScript** for type safety. The user interface is built with **React**, using **ShadCN UI** components and styled with **Tailwind CSS**. This combination allows for rapid development of a polished and responsive design.
- **Components**: The app makes a clear distinction between **Server Components** (for fetching data and rendering static content) and **Client Components** (for handling user interactions like form submissions and state management).

### Backend & Database: Firebase

- **Authentication**: User identity is managed by **Firebase Authentication**, supporting both traditional Email/Password and social providers like Google Sign-In. This provides a secure and easy-to-use login system out of the box.
- **Database**: **Firestore** is the primary NoSQL database. It's used to store user-specific data, such as:
  - User profiles.
  - Saved career preferences (`/users/{userId}/career_preferences/{careerId}`).
- **Security**: Data is secured using **Firestore Security Rules**. The database is structured so that a user's private data is nested under their unique `userId`. The rules enforce that a user can only read or write to their own data path, preventing unauthorized access. For example, `allow write: if request.auth.uid == userId;`.

### AI Integration: Genkit & Gemini

- **AI Framework**: The core intelligence is powered by **Genkit**, Google's open-source framework for building production-ready AI applications. All interactions with the AI model are handled through server-side Genkit "flows".
- **AI Model**: **Google's Gemini model** is used for all generative tasks due to its strong instruction-following capabilities.
- **Structured IO**: Genkit flows use **Zod schemas** to define the expected input and output formats. This is critical for reliability. For example, the `analyzeQuizResponses` flow is strongly typed to always return a JSON array of career suggestions, preventing errors if the AI's response format varies slightly.
- **Key AI Flows**:
  1.  `analyzeQuizResponsesAndSuggestCareers`: Analyzes quiz answers to generate personalized career paths.
  2.  `generateCareerReport`: Creates a detailed, on-the-fly report for any given career.
  3.  `searchCareers`: Powers the semantic search bar, allowing natural language queries.
  4.  `suggestHonoursCourses`: The engine behind the Honours Advisor feature.

### Data Flow Example: The Career Quiz

1.  **Client-Side**: The user answers questions in the `QuizClient` component, and the responses are stored in the component's state.
2.  **API Call**: Upon completion, the answers are sent to the `analyzeQuizResponsesAndSuggestCareers` Genkit flow via a server-side API call.
3.  **Server-Side AI Processing**: The Genkit flow formats the user's answers and a detailed prompt, then calls the Gemini model. The prompt instructs the model to act as a career counselor and return 2-3 suggestions in a strict JSON format.
4.  **Response & Storage**: The structured JSON response from the flow is sent back to the client. The client saves the results to the browser's `localStorage` for persistence and redirects the user to the results page.
