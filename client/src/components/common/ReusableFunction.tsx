import { useEffect, useState } from "react";

export function formatTimestamp(timestamp: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(timestamp);
  const day = date.getDate();
  const month = months[date.getMonth()];

  const formattedDate = `${month} ${day}`;
  return formattedDate;
}

export function ToText(node: string) {
  const tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}

export function calculateReadingTime(paragraph: string) {
  const wordCount = paragraph.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const estimatedTime = Math.ceil(wordCount / wordsPerMinute);

  return estimatedTime;
}

export function ChatBotTimeStamp() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const amOrPm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const gptResponseTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
      setTime(gptResponseTime);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{time}</>;
}