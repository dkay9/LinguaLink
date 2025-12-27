"use client";
import { useState } from "react";
import { Mic } from "lucide-react";

type VoiceInputProps = {
  onSend: (text: string) => void;
  disabled?: boolean;
  language?: string;
};

export default function VoiceInput({
  onSend,
  disabled,
  language,
}: VoiceInputProps) {
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    if (disabled) return;

    const SpeechRecognitionConstructor =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = mapLanguageToLocale(language);
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onSend(transcript);
    };

    recognition.start();
  };

  return (
    <button
      onClick={handleVoice}
      disabled={disabled}
      className={`relative p-2 rounded-full border border-white/15
        ${listening ? "text-red-400" : "text-zinc-300"}
        hover:text-white transition disabled:opacity-40`}
    >
      {listening && (
        <span className="absolute inset-0 rounded-full animate-ping bg-red-500/30" />
      )}
      <Mic size={20} />
    </button>
  );
}

function mapLanguageToLocale(language?: string): string {
  switch (language) {
    case "French":
      return "fr-FR";
    case "Spanish":
      return "es-ES";
    case "German":
      return "de-DE";
    case "Yoruba":
      return "yo-NG";
    case "Igbo":
      return "ig-NG";
    case "Hausa":
      return "ha-NG";
    default:
      return "en-US";
  }
}

