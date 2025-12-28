"use client";
import { useState } from "react";
import { Mic } from "lucide-react";
import VoiceWaveform from "./VoiceWaveform";

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
    if (disabled || listening) return;

    const SpeechRecognitionConstructor =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      alert("Voice recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = mapLanguageToLocale(language);
    recognition.interimResults = false;

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
      className="relative flex items-center gap-2 p-2 rounded-full
                 border border-white/15
                 text-zinc-300 hover:text-white
                 transition disabled:opacity-40"
    >
      {listening ? <VoiceWaveform /> : <Mic size={20} />}
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

