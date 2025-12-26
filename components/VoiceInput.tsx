"use client";
import { useState } from "react";

type VoiceInputProps = {
  onSend: (text: string) => void;
};

export default function VoiceInput({ onSend }: VoiceInputProps) {
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    const SpeechRecognitionConstructor =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionConstructor) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognitionConstructor();
    recognition.lang = "en-US";
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
      className={`px-4 py-2 rounded-lg ${
        listening ? "bg-red-600" : "bg-green-600"
      } text-white`}
    >
      {listening ? "Listening..." : "🎤 Speak"}
    </button>
  );
}