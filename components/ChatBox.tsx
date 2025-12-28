"use client";
import { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import VoiceInput from "./VoiceInput";

type ChatBoxProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
  language?: string;
};

export default function ChatBox({
  onSend,
  disabled,
  language,
}: ChatBoxProps) {
  const [text, setText] = useState("");

  function submit() {
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="flex gap-2 items-end bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-3 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
      <textarea
        className="flex-1 bg-transparent text-white placeholder-zinc-400 resize-none outline-none"
        placeholder="Type in any language…"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={1}
      />

      <VoiceInput
        onSend={onSend}
        disabled={disabled}
        language={language}
      />

      <button
        onClick={submit}
        disabled={disabled}
        className="p-2 rounded-full text-zinc-300 hover:text-white transition disabled:opacity-40"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
