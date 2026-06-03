# Birthday / Date Invitation Card

An interactive invitation card built with React and Vite. The experience is a playful, pink-themed flow that lets someone:

- accept the invitation
- choose a cuisine
- pick a restaurant
- select a time slot
- copy the final plan to the clipboard

The UI content is currently written in Vietnamese and is tuned for a date-night invitation flow.

## Features

- Step-by-step invitation experience
- Animated transitions with `motion`
- Cuisine and restaurant selection
- Time-slot selection
- Clipboard copy for the final summary
- Responsive layout for desktop and mobile

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- `motion`
- `lucide-react`

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  app/                App shell
  assets/             Cuisine icons and images
  components/ui/      Reusable UI primitives
  data/               Cuisines, restaurants, and time slots
  features/date-card/ Invitation flow and step components
  lib/                Small utility helpers
  styles.css          Global styles and Tailwind entry
```

## Customization

Most of the invitation content lives in:

- `src/data/dateCardData.js` for cuisines, restaurants, and time options
- `src/features/date-card/DateCardFlow.jsx` for the step flow and copy text
- `index.html` for the page title and meta description

If you want to change the invite into a different theme, those are the first files to edit.

## Notes

- The app is client-side only; there is no backend.
- `dist/` is the generated production output from Vite.

