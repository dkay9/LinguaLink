"use client";
import { useState } from "react";

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
      className={`
        relative px-4 py-2 rounded-lg text-white transition
        ${disabled ? "opacity-40 cursor-not-allowed" : ""}
        ${listening ? "bg-red-600" : "bg-green-600"}
      `}
    >
      {listening && (
        <span className="absolute inset-0 rounded-lg animate-ping bg-white/30" />
      )}

      <span className="relative z-10">
        {listening ? "Listening…" : "🎤 Speak"}
      </span>
    </button>
  );
}

function mapLanguageToLocale(language?: string) {
  switch (language) {
    case "French":
      return "fr-FR";
    case "Spanish":
      return "es-ES";
    case "German":
      return "de-DE";
    default:
      return "en-US";
  }
}
