import { Brain, FileText, Globe, GraduationCap, Hd, Paperclip, Search, Sparkles, Wand2, Zap } from "lucide-react";
import soraImage1 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage2 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import nanoImage1 from "@/assets/G1.png";
import nanoImage2 from "@/assets/G2.png";
import nanoImage3 from "@/assets/G3.png";

import GptIcon from "@/assets/Vector.svg";
import deepseek from "@/assets/deepseek.svg";
import gemini from "@/assets/gemini.svg";
import grok from "@/assets/grok.svg";

import research from "@/assets/research.svg"
import style from "@/assets/style.svg";
import ratio from "@/assets/ratio.svg";
import unikorn from "@/assets/unikorn.svg";
import seedream from "@/assets/seedream.svg";
import ideogram from "@/assets/ideogram.svg";
export interface ModelConfig {
  id: string;
  baseLabel: string;
  icon: React.ReactNode;
  versions?: string[];
}

export const AI_CHAT_MODELS: ModelConfig[] = [
  {
    id: "gpt",
    baseLabel: "GPT",
    versions: ["7.0", "4.0", "o1"],
    icon: <img src={GptIcon}  width={16} height={16} />,
  },
  {
    id: "deepseek",
    baseLabel: "Deepseek",
    versions: ["R1", "V3"],
    icon: <img src={deepseek} width={16} height={16} className="text-[#6881FD]" />,
  },
  {
    id: "gemini3",
    baseLabel: "Gemini 3 Flash",
    icon: <img src={gemini} width={16} height={16} className="text-[#448AFF]" />,
  },
  {
    id: "grok",
    baseLabel: "Grok",
    versions: ["4.1 Fast", "3.0"],
    icon: <img src={grok} height={16} width={16} className="text-primaryDark" />,
  },
  {
    id: "gemini",
    baseLabel: "Gemini",
    versions: ["Pro", "Ultra"],
    icon: <img src={gemini} width={16} height={16} className="text-[#448AFF]" />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];


export const AI_IMAGE_MODELS: ModelConfig[] = [
  {
    id: "soraimage",
    baseLabel: "Sora Image",
    icon: <Wand2 size={16} />,
  },
  {
    id: "unikorn",
    baseLabel: "UniKorn",
    icon: <img src={unikorn} width={30} height={30} />,
  },
  {
    id: "nanobanana",
    baseLabel: "Nano Banana",
    icon: <img src={gemini} width={16} height={16} className="text-[#448AFF]" />,
  },
  {
    id: "seedream",
    baseLabel: "Seedream",
    icon: <img src={seedream} width={16} height={16} />,
  },
  {
    id: "flux",
    baseLabel: "Flux.1 Kontext",
    versions: ["Pro", "Ultra"],
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "ideogram",
    baseLabel: "Ideogram",
    icon: <img src={ideogram} width={16} height={16}/>,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];




export const GENERATED_GROUPS = [
  {
    id: "today",
    label: "Today",
    total: 12,
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. natural window light, soft shadows natural window light, soft shadows natural window light, soft shadows",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage1, soraImage2, soraImage3, soraImage1]
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young womanphotorealistic portrait of a young.",
        date: "14/04/2025 20:02",
        model: "Nano Banana",
        images: [nanoImage1, nanoImage2, nanoImage3, nanoImage1]
      }
    ]
  },
  {
    id: "prev-7",
    label: "Previous 7 Days",
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows. photorealistic portrait of a young woman. photorealistic portrait of a young woman.",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage2, soraImage1, soraImage3, soraImage2]
      }
    ]
  }
];

export const Actions: ModelConfig[] = [
  {
    id: "photosandfiles",
    baseLabel: "Add Photos and files",
    icon: <Paperclip size={16} />,
  },
  {
    id: "search",
    baseLabel: "Search",
    icon: <Globe size={16} />,
  },
  {
    id: "myprompts",
    baseLabel: "My Prompts",
    icon: <FileText size={16} className="text-primaryDark" />,
  },
  {
    id: "deepresearch",
    baseLabel: "Deep Research",
    icon: <img src={research} height={16} width={16} className="text-primaryDark" />,
  },
  {
    id: "study",
    baseLabel: "Study",
    icon: <GraduationCap size={16} className="text-primaryDark" />,
  },
];
      // <ActionButton icon={<Paperclip size={18} />} label="Attach" />
      // <ActionButton icon={<img src={style}/>} label="Style" />
      // <ActionButton icon={<Hd size={18} />} label="Quality" />
      // <ActionButton icon={<img src={ratio}/>} label="Aspect Ratio" />

export const Image_Actions: ModelConfig[] = [
  {
    id: "attach",
    baseLabel: "Attach",
    icon: <Paperclip size={16} />,
  },
  {
    id: "style",
    baseLabel: "Style",
    icon: <img src={style} height={16} width={16} className="text-primaryDark" />,
  },
  {
    id: "quality",
    baseLabel: "Quality",
    icon: <Hd size={16} className="text-primaryDark" />,
  },
  {
    id: "aspectratio",
    baseLabel: "Aspect Ratio",
    icon: <img src={ratio} height={16} width={16} className="text-primaryDark" />,
  },
];
