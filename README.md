# Expense Tracker

A full-stack expense tracking application built with Node.js, Express, MongoDB, and React.

## Features

- User registration and authentication (JWT-based)
- Add and view personal expenses
- Secure API with authentication middleware

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

### Frontend
- React
- Fetch API for HTTP requests

## Project Structure

```
expense_tracker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── expense.controller.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── expense.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── expense.routes.js
│   │   ├── utils/
│   │   │   └── generateToken.js
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/expense_tracker
   JWT_SECRET=your_secret_key
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React app:
   ```
   npm start
   ```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Expenses
- `POST /api/expenses` - Add a new expense (requires auth)
- `GET /api/expenses` - Get user's expenses (requires auth)

## Usage

1. Register or login through the frontend.
2. Add expenses via API (currently no UI for adding).
3. View expenses in the frontend after logging in.

## Author
M.Mahendra Chowdary
