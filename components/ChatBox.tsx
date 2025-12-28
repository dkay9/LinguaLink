"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function submit() {
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (disabled) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  // Auto-grow logic
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px"; // max height
  }, [text]);

  return (
    <div className="flex gap-2 items-end bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl p-3 shadow-[0_0_40px_rgba(0,255,255,0.08)]">
      <textarea
        ref={textareaRef}
        className="flex-1 bg-transparent text-white placeholder-zinc-400 resize-none outline-none max-h-40 overflow-y-auto"
        placeholder={disabled ? "Thinking…" : "Type in any language…"}
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

      {/* Disabled while thinking */}
      <button
        onClick={submit}
        disabled={disabled || !text.trim()}
        className="p-2 rounded-full text-zinc-300 hover:text-white transition
                   disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
