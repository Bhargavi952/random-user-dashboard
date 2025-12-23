# random-user-viewer

This is a React + TypeScript application that fetches and displays a random user's full name and email address using the Random User API.

The application demonstrates clean React practices using functional components, hooks, async/await, Axios for API calls, and localStorage for persistence.




## 🌐 Live Demo

Check out the live version of the application: [https://random-user-dashboard.netlify.app/](https://random-user-dashboard.netlify.app/)

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


## � Deployment

This application is deployed on Netlify. To deploy your own version:

1. Build the project for production:

   ```bash
   npm run build
   ```

2. Upload the `dist` folder to Netlify:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder into the deployment area
   - Or connect your GitHub repository for automatic deployments

The live demo is available at: [https://random-user-dashboard.netlify.app/](https://random-user-dashboard.netlify.app/)

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
## 📸 Screenshots
### Desktop View
<img width="1889" height="956" alt="image" src="https://github.com/user-attachments/assets/ace8bfff-6cf4-4341-8af8-cfccaee5565e" />

### Mobile View
<img width="878" height="923" alt="image" src="https://github.com/user-attachments/assets/3712964a-23bb-45a0-837c-f8c1eb0bb4bb" />

### Error State (Error Card)
<img width="1552" height="895" alt="image" src="https://github.com/user-attachments/assets/72ef31f0-99f6-4278-bad1-90fadf9c9cff" />

---

## 📝 Usage

The application fetches a random user from the Random User API and displays their information in a card format. Click the refresh button to load a new random user. The last fetched user is saved in localStorage for persistence across sessions.

---
