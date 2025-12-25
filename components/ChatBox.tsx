"use client";
import { useState } from "react";

type ChatBoxProps = {
  onSend: (text: string) => void;
};

export default function ChatBox({ onSend }: ChatBoxProps) {
  const [text, setText] = useState("");

  function submit() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="flex gap-2">
      <textarea
        className="flex-1 p-3 rounded-lg text-black"
        placeholder="Type in any language..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={submit}
        className="px-4 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
