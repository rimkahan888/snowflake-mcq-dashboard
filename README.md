# Snowflake MCQ Dashboard

## Overview

The Snowflake MCQ Dashboard is an interactive web application designed to help users study and practice Snowflake certification questions through a flashcard-based learning system. The application provides a modern, responsive interface for reviewing multiple-choice questions related to Snowflake technologies, making it an ideal tool for exam preparation.

## Features

### Flashcard System

- **Interactive MCQ Cards**: Browse through a comprehensive collection of Snowflake multiple-choice questions
- **Answer Reveal**: Toggle visibility of correct answers with a simple switch
- **Sticky Answer Toggle**: Convenient answer toggle that stays visible as you scroll through questions

### Search and Filtering

- **Full-text Search**: Quickly find specific questions or topics using the search functionality
- **Tab-based Filtering**: Switch between viewing all questions or just your favorites

### Personalization

- **Favorites System**: Mark important questions as favorites for focused study sessions
- **Persistent Preferences**: Your favorites are saved in local storage and persist between sessions

### UI/UX

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Mode**: Support for system theme preferences with a toggle to switch between modes
- **Modern Interface**: Clean, intuitive design with accessibility in mind

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd snowflake-mcq-dashboard
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Technical Stack

### Core Technologies

- **Next.js 15**: React framework for server-rendered applications
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript for better developer experience

### Styling and UI

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable component system built on Radix UI
- **Lucide Icons**: Beautiful, consistent icon set

### State Management

- **React Hooks**: useState and useEffect for local state management
- **localStorage**: Browser storage for persisting user preferences

## Project Structure

- `/app`: Next.js app directory containing page components and layouts
- `/components`: Reusable React components
  - `/ui`: UI components from shadcn/ui library
- `/data`: Data files containing the flashcard questions and answers
- `/lib`: Utility functions and shared code
- `/public`: Static assets
- `/styles`: Global CSS and Tailwind configuration

## Customization

### Adding New Questions

To add new flashcards, edit the `/data/flashcards-data.ts` file and add new entries following the existing format:

```typescript
{
  id: [unique_number],
  question: "Your question text here",
  options: [
    { label: "A", text: "Option text", correct: false },
    { label: "B", text: "Correct option text", correct: true },
    // Add more options as needed
  ],
}
```

### Theming

The application uses CSS variables for theming. You can customize the colors and other design elements by modifying the variables in `/styles/globals.css` or `/app/globals.css`.

## License

[Specify your license here]

## Acknowledgements

- This project uses the shadcn/ui component library
- Built with Next.js and Tailwind CSS
