import { NextRequest, NextResponse } from "next/server";
import { ChatRequestBody, ChatResponseBody } from "@/lib/types";
import { getSystemPrompt } from "@/lib/prompts";
import { generateAIResponse } from "@/lib/groq"; 

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestBody = await req.json();

    if (!body.message || !body.mode) {
      return NextResponse.json(
        { output: "Message and mode are required." },
        { status: 400 }
      );
    }

    const systemPrompt = getSystemPrompt(body.mode, body.targetLang);

    // Call AI client (Groq)
    const output = await generateAIResponse(systemPrompt, body.message);

    const resBody: ChatResponseBody = { output };

    return NextResponse.json(resBody);
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { output: "AI failed to generate a response. Try again." },
      { status: 500 }
    );
  }
}
