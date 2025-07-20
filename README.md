# 📬 Nodemailer Email Sender App

A full-stack application for sending emails using **Nodemailer**, built with:

- **Frontend:** React + Tailwind CSS + Material UI
- **Backend:** Node.js + Express + Nodemailer
- **Styling:** Tailwind CSS + MUI Components

---

## 🚀 Features

- Send email using Gmail SMTP
- Frontend form with loading button and email validation
- Nodemailer integration on the backend
- Uses environment variables to hide credentials
- Built with modern React hooks (useState)

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite, Material UI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Email:** Nodemailer (SMTP via Gmail)
- **HTTP:** Axios

---

## 📁 Project Structure

│
├── backend/
│ ├── index.js
│ ├── sendMail.js
│ └── .env
│
├── frontend/
│ ├── App.jsx
│ ├── assets/
│ └── main.jsx
│
├── README.md
└── .gitignore

## ⚙️ Environment Variables

Create a `.env` file in your `/backend` folder:

```env
GMAIL_EMAIL_ADDRESS=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

🔧 Backend Setup:
cd backend
npm install
npm run dev
# OR
node index.js
Backend runs at: http://localhost:3000

🎨 Frontend Setup:

cd frontend
npm install
npm run dev
---------------
🔄 API Endpoint
POST /send-mail
Send an email by posting JSON like this:
{
  "email": "recipient@example.com"
}
🙋‍♂️ Author
Jillur Rahman

🌐 Portfolio

💼 LinkedIn

🐦 Twitter

📧 Email: jillur.cse.bd@gmail.com
```
