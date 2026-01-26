
---

# 🩸 Blood Donor Finder App

A web-based application that helps people quickly find nearby blood donors and hospitals based on blood group and location. The system aims to reduce delays in emergency situations by connecting donors, recipients, and hospitals on a single platform.

---

## 🚀 Features

* 🔍 Search blood donors by **blood group** and **location**
* 🧑‍🤝‍🧑 Donor registration & profile management
* 🏥 Hospital listing with location details
* 📢 Blood request posting & tracking
* 🔐 User authentication (Donor / Recipient / Admin)
* ✅ Donor verification & availability status
* 📍 Location-based matching (latitude & longitude)
* 📊 Admin dashboard for managing donors & requests

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Tools & Others

* Git & GitHub
* Postman (API testing)
* JWT Authentication

---

## 📂 Project Structure (MERN)

```
bloodgroupfinder/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/    # Navbar, Cards, Forms
│   │   ├── pages/         # Home, Login, Register, Requests
│   │   ├── services/      # API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/                # Express backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth & validation
│   └── server.js
│
├── README.md
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AnupCh37/bloodgroupfinder.git
cd bloodgroupfinder
```

### 2️⃣ Frontend setup

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Backend setup

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📌 Use Cases

* Emergency blood requirement
* Hospital blood coordination
* Voluntary blood donation campaigns
* Academic & social impact projects

---

## 🎯 Future Enhancements

* 📱 Mobile app version
* 🔔 SMS / Email notifications
* 🗺️ Google Maps integration
* 🧠 Smart donor recommendation system
* 🩸 Blood bank stock tracking

---

## 👨‍🎓 Developed By

**Anup Chaulagain**
Computer Engineering Student
Pulchowk Campus, IOE

---

## ❤️ Contribution

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a pull request.

---

If you want, I can also:

* tailor this for **final-year project submission**
* simplify it for **college assignment**
* or add **screenshots & API docs**

Just say the word 😄
