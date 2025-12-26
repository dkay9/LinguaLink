"use client";
import { ChatRole } from "@/lib/types";

type ChatMessageProps = {
  role: ChatRole;
  content: string;
  status?: "thinking" | "done";
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isThinking = role === "assistant" && content === "Thinking...";

  return (
    <div
      className={`p-3 rounded-lg max-w-[80%] whitespace-pre-wrap ${
        role === "user"
          ? "bg-blue-600 self-end"
          : "bg-white/10 self-start"
      }`}
    >
      {isThinking ? (
        <span className="animate-pulse text-zinc-400">Thinking…</span>
      ) : (
        content
      )}
    </div>
  );
}