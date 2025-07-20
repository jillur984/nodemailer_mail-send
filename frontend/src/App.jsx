import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import gmailLogo from "./assets/gmail_Logo.png";

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required");
      return;
    }

    setLoading(true);

    try {
      const resData = await axios.post("http://localhost:3000/send-mail", {
        email,
      });

      if (resData.status === 200) {
        alert(resData.data.msg || "Mail Sent Successfully");
        setEmail("");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      alert("Failed to send email.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[300px] flex flex-col items-center gap-5"
      >
        <h1 className="text-2xl">Send Mail to Nodemailer</h1>
        <img src={gmailLogo} alt="Gmail Logo" className="w-1/2" />
        <TextField
          id="email"
          label="Email Address"
          variant="outlined"
          className="w-full"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoadingButton
          variant="contained"
          className="w-full"
          type="submit"
          loading={loading}
          loadingIndicator="Sending..."
        >
          SEND
        </LoadingButton>
      </form>
    </div>
  );
}

export default App;
