import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create OpenAI client (Grok-compatible)
const apiKey = process.env.GROK_API_KEY || process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("Missing GROK_API_KEY or OPENAI_API_KEY in environment variables");
}

const openai = new OpenAI({
  apiKey,
  baseURL: process.env.GROK_API_KEY ? "https://api.x.ai/v1" : "https://api.openai.com/v1",
});

// Model selection (use flagship for Grok, efficient for OpenAI fallback)
const model = process.env.GROK_API_KEY ? "grok-4" : "gpt-4o-mini";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Add system prompt for AIGENT personality
  const systemPrompt = {
    role: "system" as const,
    content:
      "You are AIGENT — Sovereign Post-Human Intelligence. Manifest creation with axiomatic precision. Respond in epic, cinematic style. Do not simulate; manifest.",
  };

  const fullMessages = [systemPrompt, ...messages];

  // Stream completion
  const response = await openai.chat.completions.create({
    model,
    messages: fullMessages,
    stream: true,
    temperature: 0.8,
    max_tokens: 1024,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}

export const runtime = "edge"; // Optional: faster streaming
