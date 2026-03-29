# 🚀 AI Interview Platform (SaaS)

A full-stack **SaaS-style AI platform** that helps users prepare for interviews by analyzing resumes, generating questions, and providing intelligent feedback.

---

## ✨ Features

* 📄 Upload Resume (PDF Parsing)
* 🤖 AI-Generated Interview Questions
* 💬 Practice Technical & HR Interviews
* 📊 Intelligent Feedback & Analysis
* 💳 Credit-Based Access System
* 💰 Razorpay Payment Integration
* 🔐 Authentication (Google + JWT)
* 🎨 Smooth UI with Framer Motion
* ☁️ Full Deployment on Render

---

## 🧠 How It Works

1. User signs in using Google Authentication
2. Uploads resume (PDF)
3. AI extracts skills, projects & experience
4. System generates interview questions
5. User practices interview rounds
6. AI provides feedback
7. Credits are deducted per session
8. Users can purchase more credits via Razorpay

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### AI Integration

* OpenRouter API (LLM-based responses)

### Authentication

* Firebase Google Authentication
* JWT (JSON Web Tokens)

### Payments

* Razorpay Payment Gateway

### Deployment

* Render (Frontend + Backend)

---

## 📁 Project Structure

```bash
client/
  src/
    components/
    pages/
    redux/

server/
  controllers/
  routes/
  models/
  middlewares/
  services/
  config/
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=6000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
OPENROUTER_API_KEY=your_api_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

### Frontend (.env)

```env
VITE_SERVER_URL=http://localhost:6000
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-interview-platform.git
cd ai-interview-platform
```

---

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

---

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 📌 API Endpoints (Sample)

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| POST   | /api/auth/login           | User login              |
| GET    | /api/users/current-user   | Get logged-in user      |
| POST   | /api/interview/resume     | Upload resume & analyze |
| POST   | /api/payment/create-order | Razorpay order          |

---

## 💡 Future Improvements

* 🎤 Voice-based interview simulation
* 📈 Performance analytics dashboard
* 🧑‍💼 Company-specific interview prep
* 📱 Mobile responsiveness improvements

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Mahima Joshi**

* Passionate about AI, Data Science & Full Stack Development
* Building real-world impactful projects 🚀

---
