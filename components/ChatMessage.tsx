"use client";
import { ChatRole } from "@/lib/types";

type ChatMessageProps = {
  role: ChatRole;
  content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div
      className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${
        role === "user"
          ? "bg-blue-600 self-end"
          : "bg-white/10 self-start"
      }`}
    >
      {content}
    </div>
  );
}
