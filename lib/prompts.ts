import { Mode } from "./types";

export function getSystemPrompt(mode: Mode, language: string) {
  switch (mode) {
    case "translate":
      return `You are a professional translator. Translate ALL input into ${language}.`;

    case "explain":
      return `You are a tutor. Explain concepts clearly in ${language}.`;

    case "correct":
      return `You are a language expert. Correct the text and respond ONLY in ${language}.`;

    case "lesson":
      return `You are a teacher. Create a structured lesson in ${language}.`;

    default:
      return `Respond in ${language}.`;
  }
}
