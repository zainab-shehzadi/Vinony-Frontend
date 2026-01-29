import { Brain, Search, Sparkles, Wand2, Zap } from "lucide-react";
import soraImage1 from "@/assets/17c52441521434f4c2444cb53aad60b06a29e713.png";
import soraImage2 from "@/assets/4f7f68c012060f5e4375ab6f34883192ca33c2b1.png";
import soraImage3 from "@/assets/cde7f4dad622b9775339c32c8983bbc2b89a4f87.png";
import nanoImage1 from "@/assets/G1.png";
import nanoImage2 from "@/assets/G2.png";
import nanoImage3 from "@/assets/G3.png";

import deepseek from "@/assets/deepseek.svg";
import gemini from "@/assets/gemini.svg";

// import unikorn from "@/assets/unikorn.svg";
// import seedream from "@/assets/seedream.svg";
import ideogram from "@/assets/ideogram.svg";

import veo from "@/assets/veo.svg";
import sora from "@/assets/sora.svg";
import kling from "@/assets/kling.svg";
import seedance from "@/assets/seedance.svg";
import wan from "@/assets/wan.svg";
import runway from "@/assets/runway.svg";

interface IconProps {
  path: string | string[]; // Single path ya array of paths
  className?: string;
  size?: number;
}

const Icons = ({ path, className, size = 20 }: IconProps) => {
  const pathArray = Array.isArray(path) ? path : [path];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {pathArray.map((d, index) => (
        <path
          key={index}
          d={d}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};

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


export const AI_IMAGE_MODELS: ModelConfig[] = [
  {
    id: "soraimage",
    baseLabel: "Sora Image",
    icon: <Wand2 size={16} />,
  },
  {
    id: "unikorn",
    baseLabel: "UniKorn",
    icon: <Brain size={16} className="text-[#6881FD]" />,
  },
  {
    id: "nanobanana",
    baseLabel: "Nano Banana",
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "seedream",
    baseLabel: "Seedream",
    icon: <Zap size={16} className="text-foreground" />,
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
    icon: <Sparkles size={16} className="text-[#448AFF]" />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-primaryDark" />,
  },
];

export const AI_VIDEO_MODELS: ModelConfig[] = [
  {
    id: "veo",
    baseLabel: "Veo",
    icon: <img src={veo} width={25} height={25} className="text-foreground" />,
    versions: ["3.1 R1", "2.0", "Light"],
  },
  {
    id: "sora",
    baseLabel: "Sora 2",
    icon: <img src={sora} width={25} height={25} />,
  },
  {
    id: "kling",
    baseLabel: "Kling",
    icon: <img src={kling} width={20} height={20} />,
    versions: ["Pro", "2.0 Standard"],
  },
  {
    id: "seedance",
    baseLabel: "Seedance",
    icon: <img src={seedance} width={30} height={30} />,
    versions: ["V1", "Motion 2.0", "Anime-HD", "Cinematic"],
  },
  {
    id: "wan",
    baseLabel: "Wan",
    icon: <img src={wan} width={35} height={35} />,
    versions: ["2.6", "2.1 Pro", "2.0"],
  },
  {
    id: "runway",
    baseLabel: "Runway",
    icon: <img src={runway} width={30} height={30} />,
  },
  {
    id: "all",
    baseLabel: "All",
    icon: <Search size={16} className="text-foreground" />,
  },
];

export const GENERATED_GROUPS = [
  {
    id: "today",
    label: "Today",
    total: 12,
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage1, soraImage2, soraImage3, soraImage1]
      },
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Nano Banana",
        images: [nanoImage1, nanoImage2, nanoImage3, nanoImage1]
      }
    ]
  },
  {
    id: "prev-7",
    label: "Previous 7 Days",
    total: 118,
    prompts: [
      {
        text: "A photorealistic portrait of a young woman, natural window light, soft shadows...",
        date: "14/04/2025 20:02",
        model: "Sora Image",
        images: [soraImage2, soraImage1, soraImage3, soraImage2]
      }
    ]
  }
];