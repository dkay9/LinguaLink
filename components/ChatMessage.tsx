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
      className={`px-4 py-3 rounded-xl max-w-[80%] whitespace-pre-wrap text-sm
        ${
          role === "user"
            ? "ml-auto bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.35)]"
            : "mr-auto bg-white/10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
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