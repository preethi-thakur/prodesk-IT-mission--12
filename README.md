# prodesk-IT-mission--12
Developed a Component-Driven Design System by integrating Storybook into a Next.js application. Built reusable UI components with isolated stories, interactive Args/Controls, Light/Dark theme support, and comprehensive documentation, improving reusability, consistency, testing, and maintainability across the project.
# Movie Explorer

A modern Movie Explorer application built with Next.js that allows users to search movies using the OMDb API, view detailed information, manage favorites, and explore a reusable component library developed with Storybook.

## Features

- Search movies using the OMDb API
- View detailed movie information
- Add and remove favorite movies
- Responsive user interface
- Infinite scrolling for movie listings
- Redux Toolkit state management
- Storybook component library
- Light and Dark theme support
- Interactive Storybook Controls (Args)

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS

### State Management
- Redux Toolkit
- React Redux

### Component Development
- Storybook

### API
- OMDb API

## Project Structure

```text
app/
components/
lib/
store/
public/
.storybook/
```

## Storybook Components

The project follows a Component-Driven Development approach. Components are developed and tested independently using Storybook.

Implemented components include:

- MovieCard
- MovieModal
- MovieGallery
- FilteredMovieGrid
- SidebarFilters
- ActiveFilters

Each component includes:

- Interactive Controls (Args)
- Multiple UI variants
- Component documentation
- Light and Dark theme preview

## Installation

Clone the repository

```bash
git clone <https://github.com/preethi-thakur/prodesk-IT-mission--12>
```


Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
NEXT_PUBLIC_OMDB_API_KEY=YOUR_API_KEY
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

## Running Storybook

Start Storybook

```bash
npm run storybook
```

Open

```
http://localhost:6006
```

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Builds the production application.

```bash
npm run start
```

Starts the production server.

```bash
npm run storybook
```

Launches Storybook.

```bash
npm run build-storybook
```

Builds the Storybook static site.

## Component Variants

Storybook includes multiple component states such as:

- Default
- Favorite
- No Poster
- Empty State
- Search Filter
- Genre Filter
- Multiple Filters
- Long Description

## Learning Outcomes

- Component-Driven Development
- Storybook integration
- Design System fundamentals
- Reusable UI components
- Interactive component documentation
- Redux state management
- Responsive UI development
- Theme-based component rendering

## Future Improvements

- User authentication
- Movie recommendations
- Watchlist management
- Advanced search filters
- Pagination
- Unit and integration testing
- Accessibility improvements

