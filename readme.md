# SkySense Project

SkySense is a web application that provides weather data and city information. This README provides information on the tech stack used in both the frontend and backend, instructions on deploying the application locally, and the URL for the deployed site.

## Frontend

### Tech Stack

- **Vite**: A fast build tool that provides a highly optimized development experience for React applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Axios**: A promise-based HTTP client for making requests to the backend API.

### How to Deploy Frontend Locally

1. Clone the repository:

```bash
git clone https://github.com/jsndz/skysense.git
```

2.Navigate to the frontend directory:

```bash
cd skysense/frontend

```

3.install dependencies:

```bash
npm install


```

4.Run the development server:

```bash
npm run dev


```

5.Open your browser and go to http://localhost:3000 to view the application.

## Backend

### Tech Stack

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: A relational database management system used for storing city data.
- **Sequelize**: A promise-based Node.js ORM for MySQL, providing easy database management.

### How to Deploy Backend Locally

1.Navigate to the backend directory:

```bash
cd skysense/backend


```

2.Install dependencies:

```bash
npm install


```

3.Set up your MySQL database and update the .env file with your database configuration.

Run the backend server:

```bash
npm start


```

4.The server will be running on http://localhost:3001.

### Deployed Site

The SkySense application is deployed and can be accessed at https://jsndz.github.io/skysenseDeploy/.

**Note**:
While deploying the site i did not deploy backend as a server so the frontend is independently hosted without backend. The API logic is written in the file backend.jsx.

**Experience**:
The project was very fun to do. This is my first "frontend project" with react. I wrote the backend for this long back ago. The deployment was very hard. I learn api documentation with swagger, tailwind components, github actions in this project. And the main thing I learned is to think before you force push which deleted my commit logs entirely. Well, It was fun (X_X).
Thank you
