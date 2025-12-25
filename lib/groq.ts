import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function generateResponse(prompt: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });

  return completion.choices?.[0]?.message?.content ?? "No response from AI.";
}
