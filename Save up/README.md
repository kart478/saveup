# SaveUp - Visual Savings Goal Tracker

A beautiful React application that helps users track their savings goals with visual progress indicators and smooth animations.

## Features

- **Goal Setup**: Set your savings goal with a name and target amount
- **Image Upload**: Add an image of the item you're saving for
- **Progress Tracking**: Visual progress bar with percentage completion
- **Add Savings**: Easily add amounts to your savings
- **Animations**: Smooth Framer Motion animations for interactions
- **Data Persistence**: All data saved to localStorage
- **Responsive Design**: Mobile-friendly interface
- **Goal Management**: Edit or reset your goals at any time

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **localStorage** for data persistence

## Installation

1. Make sure you have Node.js installed (version 16 or higher)
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Set up your savings goal:
   - Enter a goal name (e.g., "New Phone")
   - Set your target amount
   - Optionally upload an image of your goal item

4. Track your progress:
   - Add savings amounts as you save money
   - Watch the progress bar animate
   - Celebrate when you reach your goal!

## Project Structure

```
src/
 ├─ components/
 │   ├─ GoalForm.jsx      # Goal setup form
 │   ├─ ImageUpload.jsx   # Image upload with preview
 │   ├─ AddSavings.jsx    # Add savings form
 │   ├─ ProgressBar.jsx   # Animated progress bar
 │   └─ GoalImage.jsx     # Goal image with animations
 ├─ App.jsx               # Main application component
 ├─ main.jsx              # Application entry point
 └─ styles.css            # Tailwind CSS styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Animation Features

- **Progress Bar**: Smooth fill animation when savings are added
- **Goal Image**: Bounce effect when adding savings, celebration animation when goal is reached
- **Success States**: Glowing effects and celebration messages
- **Micro-interactions**: Hover effects and smooth transitions throughout

## Data Persistence

All application data is automatically saved to localStorage:
- Goal name and target amount
- Current savings amount
- Goal image (as base64)
- Application state

Data is loaded automatically when you return to the application.

## Optional Features Included

- **Edit Goal**: Modify your goal name and target amount
- **Reset Goal**: Clear all data and start a new goal
- **Goal Completion**: Special celebration when you reach your target
- **Input Validation**: Prevents adding savings beyond the target amount

## Browser Support

This application supports all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- localStorage API
- File API for image uploads

Enjoy saving with SaveUp! 🎯💰
