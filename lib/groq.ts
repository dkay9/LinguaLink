import Groq from "groq-sdk";

if (!process.env.GROQ_API_KEY) {
  throw new Error("GROQ_API_KEY missing. Add it to .env.local");
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", 
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
    });

    return completion.choices[0]?.message?.content ?? "No response.";
  } catch (err) {
    console.error("Groq API error:", err);
    throw err; // rethrow so API route catches it
  }
}
