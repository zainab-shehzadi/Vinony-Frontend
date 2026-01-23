import ChatInput from "@/components/dashboard/chatSection/ChatInput";
import ChatResponse from "@/components/dashboard/chatSection/ChatResponse";
import { Modelbar } from "@/components/shared/model-bar";
import { Sparkles, Brain, Zap, Wand2, Search } from "lucide-react";
import { useState } from "react";

export interface ModelConfig {
  id: string;
  baseLabel: string;
  icon: React.ReactNode;
  versions?: string[];
}

const AI_MODELS: ModelConfig[] = [
  {
    id: "gpt",
    baseLabel: "GPT",
    versions: ["7.0", "4.0", "o1"],
    icon: <Wand2 size={16} />,
  },
  {
    id: "deepseek",
    baseLabel: "Deepseek",
    versions: ["R1", "V3"],
    icon: <Brain size={16} className="text-[#6881FD]" />,
  },
  {
    id: "gemini3",
    baseLabel: "Gemini 3 Flash",
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "grok",
    baseLabel: "Grok",
    versions: ["4.1 Fast", "3.0"],
    icon: <Zap size={16} className="text-primaryDark" />,
  },
  {
    id: "gemini",
    baseLabel: "Gemini",
    versions: ["Pro", "Ultra"],
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];

export default function Chat() {
  const [selectedModel, setSelectedModel] = useState<ModelConfig>(AI_MODELS[0]);
  const [activeVersion, setActiveVersion] = useState<string>(
    AI_MODELS[0].versions?.[0] || "",
  );
  const [reqGenerate, setReqGenerate] = useState<Boolean>(false);

  return (
    <div className="flex flex-col h-[90vh]">
      
      <Modelbar
        models={AI_MODELS}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        activeVersion={activeVersion}
        setActiveVersion={setActiveVersion}
      />

      <div className="flex-grow overflow-y-auto flex flex-col items-center px-5 py-10 no-scrollbar">
        
        {!reqGenerate && (
          <h1 className="text-2xl md:text-4xl font-semibold text-primaryDark my-auto md:mt-5 mb-10 text-center">
            What can I help with?
          </h1>
        )}

        {reqGenerate && (
          <div className="flex-grow w-full max-w-4xl overflow-y-auto">
             <ChatResponse/>
          </div>
        )}

        <div className={`w-full max-w-4xl ${reqGenerate ? 'mt-auto -mb-7 2xl:-mb-10 ' : 'mt-auto -mb-7 md:mt-0'}`}>
          <ChatInput
            selectedModel={selectedModel}
            activeVersion={activeVersion}
            setActiveVersion={setActiveVersion}
            reqGenerate={reqGenerate}
            setReqGenerate={setReqGenerate}
          />
        </div>
        
      </div>
    </div>
  );
}
