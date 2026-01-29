interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  senderName?: string;
  time?: string;
  content: string | string[];
  credit?: string;
  versions?: string[];
}

export const messages: ChatMessage[] = [
    {
      id: 1,
      role: "user",
      content: "let's say it does - what happens then?",
      credit: "4",
    },
    {
      id: 2,
      role: "assistant",
      senderName: "GPT",
      versions: ["7.0", "4.0", "o1"],
      time: "02:22 AM",
      content: [
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
      ],
    },
    {
      id: 3,
      role: "user",
      content: "let's say it does - what happens then?",
      credit: "4",
    },
    {
      id: 4,
      role: "assistant",
      senderName: "GPT",
      versions: ["7.0", "4.0", "o1"],
      time: "02:22 AM",
      content: [
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
        "The title refers to the empathy test used to distinguish between humans and androids.",
      ],
    },
  ];