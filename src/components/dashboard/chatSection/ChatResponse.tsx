import React from "react";
import { User, Bot, ChevronDown } from "lucide-react";

// Message types define kar rahe hain
interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  senderName?: string;
  time?: string;
  content: string | string[]; // Content string bhi ho sakta hai ya points (array) bhi
}

const ChatResponse: React.FC = () => {
  const messages: ChatMessage[] = [
    {
      id: 1,
      role: "user",
      content: "let's say it does - what happens then?",
    },
    {
      id: 2,
      role: "assistant",
      senderName: "GPT 7.0",
      time: "02:22 AM",
      content: [
        "The question of whether androids dream of electric sheep is the title and central theme of the science fiction novel Do Androids Dream of Electric Sheep? by Philip K. Dick.",
        "The book explores a world where androids are indistinguishable from humans except for a lack of empathy. The story follows Rick Deckard, a bounty hunter who tracks down rogue androids.",
        "The title refers to the empathy test used to distinguish between humans and androids. The test involves administering a fictional scenario and evaluating the subject's emotional response. Electric sheep are rare, real animals that people own as status symbols. Owning one is seen as a sign of empathy and a connection to the natural world.",
        "The book never definitively answers the question of whether androids dream or not. It explores the nature of reality, consciousness, and what it means to be human.",
        "The book inspired the movie Blade Runner, though there are some key differences in plot.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdff] p-4 md:p-10 font-sans text-slate-700">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Credits Label */}
        <div className="flex justify-end pr-2">
          <span className="text-[10px] font-semibold text-primary uppercase tracking-tighter">
            4 Credits used
          </span>
        </div>
        {messages.map((msg) => (
          <>
            <div
              key={msg.id}
              className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
            >
              {msg.role === "assistant" ? (
                <div className="flex w-full gap-3">
                  {/* AI Avatar */}
                  <div className="flex-shrink-0 w-9 h-9 bg-indigo-50 rounded-full flex items-center justify-center border border-indigo-100 shadow-sm mt-1">
                    <Bot size={18} className="text-indigo-500" />
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* AI Header */}
                    <div className="flex items-center gap-2 px-1">
                      <span className="font-bold text-slate-800 text-[13px]">
                        {msg.senderName}
                      </span>
                      <ChevronDown
                        size={14}
                        className="text-slate-400 cursor-pointer"
                      />
                      <span className="text-[11px] text-slate-400 font-medium">
                        {msg.time}
                      </span>
                    </div>

                    {/* AI Message Bubble */}
                    <div className="bg-[#F8FAFC] border border-slate-100/50 p-5 md:p-8 rounded-3xl rounded-tl-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
                      {Array.isArray(msg.content) ? (
                        <div className="space-y-4">
                          <p className="text-[14px] md:text-[15px] leading-relaxed text-slate-600">
                            {msg.content[0]}
                          </p>
                          <ul className="space-y-4">
                            {msg.content.slice(1).map((point, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-[14px] md:text-[15px] leading-relaxed text-slate-600"
                              >
                                <span className="font-bold text-slate-400 min-w-[15px]">
                                  {idx + 1}.
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="text-[14px] md:text-[15px] leading-relaxed text-slate-600">
                          {msg.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* User Message Bubble */
                <div className="bg-white border border-slate-100 px-6 py-3 rounded-full rounded-tr-none shadow-sm max-w-[90%] md:max-w-[70%] text-right">
                  <p className="text-[14px] md:text-[15px] text-slate-500">
                    {msg.content}
                  </p>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ChatResponse;
