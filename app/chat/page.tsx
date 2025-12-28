"use client";
import { useState, useRef, useEffect } from "react";
import ChatBox from "@/components/ChatBox";
import ChatMessage from "@/components/ChatMessage";
import ModeSelect from "@/components/ModeSelect";
import LanguageSelect from "@/components/LanguageSelect";
import { ChatMessage as Message, Mode } from "@/lib/types";

export default function AppPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [mode, setMode] = useState<Mode>("translate");
  const [language, setLanguage] = useState("French");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    setMessages((m) => [
      ...m,
      { role: "user", content: text },
      { role: "assistant", content: "Thinking..." },
    ]);

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          mode,
          targetLang: language,
        }),
      });

      const data: { output: string } = await res.json();

      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: data.output,
        };
        return copy;
      });
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: "Something went wrong. Try again.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
  <div className="min-h-screen neon-bg text-white flex flex-col">
    <div className="max-w-3xl mx-auto w-full flex flex-col flex-1 px-6 pt-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">LinguaLink</h1>

      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <LanguageSelect value={language} onChange={setLanguage} />
        <ModeSelect value={mode} onChange={setMode} />
      </div>

      {/* Messages (THIS must grow) */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 pb-32">
        {messages.map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>

    {/* ChatBox pinned */}
    <div className="sticky bottom-0 w-full px-4 pb-4">
      <div className="max-w-3xl mx-auto">
        <ChatBox onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  </div>
);
}
