import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY missing. Add it to .env.local");
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateAIResponse(
  systemPrompt: string,
  userMessage: string
) {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
  });

  return completion.choices[0]?.message?.content ?? "No response.";
}

