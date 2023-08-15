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
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = String(minutes).padStart(2, "0");

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
