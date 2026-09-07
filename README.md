# Fintech Dashboard

A financial dashboard application that displays market information through an interactive web interface. This project began as a vanilla JavaScript application and is currently being rebuilt in React as my frontend development skills progress.

## Live Demo

[View Live Demo](https://tourmaline-puppy-6162fc.netlify.app)

> The live demo currently represents the original vanilla JavaScript version. The React version is currently under development.

## Project Status

**In Progress**

The original dashboard was built with HTML, CSS, and vanilla JavaScript. The project is now being rebuilt in React to apply component-based development and modern frontend practices.

An earlier stage of the project also introduced a serverless backend component using Netlify Functions to securely communicate with the Finnhub API.

## Features

### Current / Original Version

- Financial dashboard interface
- Market data display
- Interactive dashboard components
- Responsive frontend layout
- Stock data retrieved through an API
- Serverless API function using Netlify Functions

### React Version

The React version is currently under development and is being rebuilt incrementally as new React concepts are learned.

Current React structure includes:

- Reusable React components
- Sidebar navigation
- Market snapshot section
- Reusable market cards
- Component-based rendering of market data

## Technologies

- HTML
- CSS
- JavaScript
- React
- REST APIs
- Fetch API
- Netlify Functions
- Finnhub API
- Git
- GitHub

## API Architecture

The original project experimented with moving API-related logic away from the frontend using a Netlify serverless function.

The serverless function retrieves the Finnhub API key from an environment variable rather than exposing the key directly in frontend code.

The basic request flow is:

Frontend → Netlify Function → Finnhub API → Netlify Function → Frontend

The function receives a stock symbol, requests the corresponding quote from Finnhub, and returns the response data to the application.

## Development Progression

This project has evolved alongside my software engineering studies.

### Stage 1 — Vanilla JavaScript

The initial version was built with HTML, CSS, and vanilla JavaScript to practice:

- DOM manipulation
- Fetch API
- API requests
- Dynamic UI updates
- Frontend application structure

### Stage 2 — Serverless Backend

A Netlify Function was introduced to act as an intermediary between the frontend and Finnhub.

This stage provided experience with:

- Serverless functions
- Environment variables
- API key protection
- Backend-to-API communication
- Returning JSON responses to a frontend

### Stage 3 — React

The project is currently being rebuilt in React.

The goal is to apply:

- Component-based architecture
- Props
- State management
- Conditional rendering
- List rendering
- Reusable components
- Modern frontend development practices

The original vanilla JavaScript version is being preserved as an earlier stage of the project rather than replaced.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/heintzmason2-sys/fintech-dashboard.git
