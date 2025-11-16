# CareerCompass: Your AI-Powered Career Guide

CareerCompass is a comprehensive web application designed to help students and young professionals navigate the complex landscape of career choices. It leverages AI to provide personalized guidance, moving beyond simple career listings to offer a truly interactive and insightful experience.

The user journey begins with a dynamic, multi-step quiz that adapts based on the user's academic stream (Science, Commerce, or Arts). Upon completion, a Genkit-powered AI flow analyzes the responses to identify the user's core interests and strengths, generating a set of tailored career suggestions. Users can then explore these suggestions, view detailed career reports, browse a comprehensive list of career paths and related courses, and save their favorite options to a personalized dashboard. The platform also includes an AI-powered search and an "Honours Advisor" to help engineering students select specialized courses.

## Technical Aspects

Technically, the application is built on a modern, robust stack. The frontend uses **Next.js** with **React** and **TypeScript**, ensuring a fast, type-safe, and server-rendered user experience. The UI is crafted with **Tailwind CSS** and **ShadCN** components, creating a polished and responsive design.

On the backend, **Firebase** handles user authentication (Email/Password and Google Sign-In) and data persistence through **Firestore**, which stores user-specific data like favorited careers. The core intelligence is driven by **Genkit**, which orchestrates calls to Google's Gemini models for all AI-driven features, including quiz analysis, dynamic report generation, and semantic search. This combination of technologies allows CareerCompass to be a scalable, intelligent, and user-friendly platform for career discovery.
