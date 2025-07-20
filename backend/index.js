import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { sendMail } from "./nodemailer/sendMail.js";

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

// send mail api

app.post("/send-mail", async (req, res) => {
  const { email } = req.body;
  const emailResponse = await sendMail(email);
  if (emailResponse) {
    return res.status(200).json({ message: "Email Send Successfully" });
  }
  return res.status(400).json({ message: "Email Send Failed" });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
