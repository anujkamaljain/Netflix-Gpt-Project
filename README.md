# Netflix GPT

Netflix GPT is a modern movie streaming web application that emulates the Netflix experience while integrating AI-powered movie recommendations using Gemini AI technology. Built with React and Vite, it offers a seamless and responsive user interface.

## 🔥 Features

- **User Authentication**: Secure login and signup functionality powered by Firebase Authentication.
- **Movie Browsing**: Explore a curated list of movies fetched from The Movie Database (TMDB) API.
- **AI-Powered Recommendations**: Utilize Gemini to receive personalized movie suggestions based on user preferences.
- **Responsive Design**: Optimized for various devices to ensure a consistent user experience.

![Screenshot 2025-04-30 040956](https://github.com/user-attachments/assets/073d9c8c-002f-41d7-af46-fe82ba89e071)

![Screenshot 2025-04-30 041007](https://github.com/user-attachments/assets/534e8bc1-dcc8-428e-982d-6f35e300ebb9)

![Screenshot 2025-04-30 041022](https://github.com/user-attachments/assets/9be3640b-8e28-439b-893f-5a5cda281483)

![Screenshot 2025-04-30 041119](https://github.com/user-attachments/assets/8161955b-80ba-4300-8e78-5a4c49d15c29)

![Screenshot 2025-04-30 041148](https://github.com/user-attachments/assets/d9cd0a35-3382-48d1-9d3c-6856dbc96aba)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Firebase project set up for authentication.
- TMDB API key.
- Gemini API key.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anujkamaljain/Netflix-Gpt-Project.git
   cd Netflix-Gpt-Project
   ```


2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   npm start
   ```


   The application will be available at [http://localhost:5173](http://localhost:5173).

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast development.
- **Firebase**: Backend-as-a-Service for authentication and hosting.
- **TMDB API**: Provides movie data for browsing.
- **Gemini **: Powers the AI-based movie recommendation feature.

## 📁 Project Structure


```plaintext
Netflix-Gpt-Project/
├── .firebase/               # Firebase configuration
├── build/                   # Production build files
├── src/                     # Source code
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components
│   ├── services/            # API service modules
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── .firebaserc              # Firebase project configuration
├── .gitignore               # Git ignore rules
├── firebase.json            # Firebase hosting configuration
├── index.html               # HTML template
├── package.json             # Project metadata and dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```
