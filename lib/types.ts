export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export type Mode = "translate" | "explain" | "correct" | "lesson";

export interface ChatRequestBody {
  message: string;
  mode: Mode;
  targetLang: string;
}

export interface ChatResponseBody {
  output: string;
}