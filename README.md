# Emoji Editor App

A React application that demonstrates the useState hook through an interactive emoji editor.

## Features

- **Emoji Selection**: Choose from 9 different emojis
- **Size Control**: Adjust emoji size with a slider (0-100px)
- **Background Colors**: Pick from 9 preset background colors
- **Rotation**: Rotate emoji in 45-degree increments

## Technologies Used

- React 18
- Vite
- CSS3

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open for netlify and navigate to ''

## Project Structure

```
src/
├── component/
│   ├── Emojibuttons/     # Emoji selection buttons
│   ├── Colorbuttons/     # Color picker buttons
│   └── Home/             # Assets (rotation.png)
└── views/
    └── Home/             # Additional home components
```

## Usage

- Click any emoji to select it
- Use the slider to resize the emoji
- Click color buttons to change background
- Click the rotation icon to rotate the emoji

## Learning Objectives

This project demonstrates:
- useState hook for state management
- Event handling in React
- Component composition
- CSS styling and positioning