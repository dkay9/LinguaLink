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

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SpeechRecognition: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent extends Event {
    results: {
      [index: number]: {
        [index: number]: {
          transcript: string;
        };
      };
    };
  }
}

export {};

export {};

export {};