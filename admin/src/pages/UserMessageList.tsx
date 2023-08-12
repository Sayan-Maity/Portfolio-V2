import axios from "axios";
import React, { useEffect } from "react";
import { MessageItem } from "../types/FileTypes";
import { formatTimestamp } from "../components/common/ReusableFunction";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [messages, setMessages] = React.useState<MessageItem[]>([]);
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/getContactForm`)
      .then((res) => {
        // console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Navbar />

      <h2 style={{ color: "red" }}> All Messages ({messages.length}) :</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "30rem",
          overflowY: "scroll",
          border: "1px solid var(--font-color-dark)",
          width: "fit-content",
          padding: "2rem",
          borderRadius: "5px"
        }}
      >
        {messages.slice().reverse().map((item, index: number) => (
          <div
            key={index}
            style={{
              width: "30rem",
              padding: "2rem",
              borderRadius: "5px",
              backgroundColor: "var(--color-light)",
            }}
          >
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Subject: {item.subject}</p>
            <p>Email: {item.email}</p>
            <p>Message: {item.message}</p>
            <p>Sent on : {formatTimestamp(item.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
