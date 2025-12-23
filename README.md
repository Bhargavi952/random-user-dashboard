# random-user-viewer

This is a React + TypeScript application that fetches and displays a random user's full name and email address using the Random User API.

The application demonstrates clean React practices using functional components, hooks, async/await, Axios for API calls, and localStorage for persistence.

## ✨ Features

- Fetches random user data from an external API
- Displays full name and email address
- Refreshes user data without page reload
- Uses async/await with Axios for API calls
- Persists last fetched user using localStorage
- Handles slow network image loading with a graceful fallback
- Built using functional components and React hooks
- Fully typed with TypeScript

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Axios
- Tailwind CSS

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run the development server

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

### 3️⃣ Build for production

```bash
npm run build
```

This will create a `dist` folder with the production build.

### 4️⃣ Preview the production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Entry point
├── index.css        # Global styles
├── App.css          # App-specific styles
├── assets/          # Static assets
├── components/      # Reusable UI components
│   ├── Avatar.tsx
│   ├── ErrorCard.tsx
│   └── UserCard.tsx
├── constants/       # Application constants
│   ├── color.ts
│   └── message.ts
├── services/        # API services
│   └── userService.ts
└── types/           # TypeScript type definitions
    └── user.ts
```

---

## 📝 Usage

The application fetches a random user from the Random User API and displays their information in a card format. Click the refresh button to load a new random user. The last fetched user is saved in localStorage for persistence across sessions.

---
