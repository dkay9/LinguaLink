export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export type Mode = "translate" | "explain" | "correct" | "lesson";

export interface ChatRequest {
  message: string;
  mode: Mode;
  targetLang: string;
}
