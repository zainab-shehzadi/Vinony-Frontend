import type { ModelCardData } from "@/types/model";

export const MODELS: ModelCardData[] = [
    {
        id: "gpt-4o",
        title: "GPT-4o",
        provider: "By Open AI",
        credits: 2 ,
        creditsUnit: "credit/chat", 
        description: "A concise, original description explaining what the model is and how users typically use it.",
        tags: [
            { id: "text", label: "Text" },
            { id: "code", label: "Code" },
            { id: "msg", label: "Message" },
        ],
        ctaLabel: "Try Now",
    },
    {
        id: "claude",
        title: "Claude",
        provider: "By Anthropic",
        credits: 2,
        creditsUnit: "credit/chat",
        description: "Great for long context writing, reasoning, and structured responses with a friendly tone.",
        tags: [
            { id: "text", label: "Text" },
            { id: "research", label: "Research" },
            { id: "code", label: "Code" },
        ],
        ctaLabel: "Try Now",
    },
    {
        id: "gemini",
        title: "Gemini",
        provider: "By Google",
        credits: 2,
        creditsUnit: "credit/chat", 
        description:"Fast general-purpose assistant for everyday tasks like summaries, Q&A, and ideation.",
        tags: [
            { id: "text", label: "Text" },
            { id: "chat", label: "Chat" },
            { id: "code", label: "Code" },
        ],
        ctaLabel: "Try Now",
    },
    {
        id: "llama",
        title: "Llama",
        provider: "By Meta",
        credits: 2,
        creditsUnit: "credit/chat",
         description:"Open model option for lightweight chats, drafts, and general-purpose tasks.",
        tags: [
            { id: "text", label: "Text" },
            { id: "draft", label: "Draft" },
            { id: "code", label: "Code" },
        ],
        ctaLabel: "Try Now",
    },
];
