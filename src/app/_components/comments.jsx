// app/_components/comments.js
"use client";

import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setComments([...comments, input]);
    setInput("");
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((c, i) => (
        <p key={i}>{c}</p>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
}
