import { Mode } from "./types";

export function buildPrompt(mode: Mode, message: string, targetLang?: string) {
  switch (mode) {
    case "translate":
      return `Translate the following text into ${targetLang || "English"}:\n\n${message}`;
    case "explain":
      return `Explain the following text in simple terms:\n\n${message}`;
    case "correct":
      return `Correct any grammatical mistakes in the following text:\n\n${message}`;
    case "lesson":
      return `Create a short language lesson based on this text:\n\n${message}`;
    default:
      return message;
  }
}
