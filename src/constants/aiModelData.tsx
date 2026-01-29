import {
  Brain,
  Clock4,
  FileText,
  Globe,
  GraduationCap,
  Hd,
  MessageSquare,
  Paperclip,
  Search,
  // Sparkles,
  // Wand2,
  Zap,
} from "lucide-react";
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

import deepResearch from "@/assets/Deepresearch.svg";
import openManus from "@/assets/Openmanus.svg";
import proofReading from "@/assets/Proofreading.svg";

export interface IconProps {
  path: string | string[]; // Single path ya array of paths
  className?: string;
  size?: number;
}

export const Icons = ({ path, className, size = 20 }: IconProps) => {
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

export const AI_AGENT_MODELS: ModelConfig[] = [
  {
    id: "perplexity",
    baseLabel: "Perplexity",
    icon: (
      <Icons
        className="text-foreground"
        path={[
          "M21.4338 0V7.878H24.375V19.0883H21.1954V26L13.572 19.2898V25.9469H12.3901V19.2823L4.758 26V18.9963H1.625V7.787H4.74933V0L12.3901 7.03517V0.205833H13.5709V7.23667L21.4338 0ZM13.572 9.79767V17.7266L20.0135 23.3968V15.6433L13.572 9.79767ZM12.3814 9.711L5.93992 15.5588V23.3968L12.3814 17.7266V9.71208V9.711ZM21.1954 17.9227H23.1931V9.04475H14.5817L21.1954 15.0464V17.9227ZM11.4649 8.95267H2.80583V17.8306H4.75583V15.0399L11.4638 8.95158L11.4649 8.95267ZM5.93125 2.68233V7.78483H11.4725L5.93125 2.68233ZM20.2518 2.68233L14.7106 7.78483H20.2518V2.68233Z"
        ]}
      />
    ),
  },
  {
    id: "deepresearch",
    baseLabel: "Deep Research",
    icon: (
      // <Icons
      //   className="text-foreground"
      //   path={[
      //     "M9.49478 12.6L4.65479 9.75V4.75C4.65479 2.54 6.47878 0.75 8.73078 0.75C10.1278 0.75 11.3608 1.44 12.0958 2.491",
      //     "M7.3501 16.9302C7.72597 17.4919 8.23489 17.9521 8.83157 18.2696C9.42826 18.5871 10.0942 18.7522 10.7701 18.7502C13.0201 18.7502 14.8461 16.9602 14.8461 14.7502V9.75017L9.9101 6.84717",
      //     "M7.20166 11.2498V5.41981L11.6137 2.91981C13.5637 1.81481 16.0567 2.46981 17.1827 4.38281C17.5275 4.966 17.7157 5.62844 17.729 6.30582C17.7423 6.9832 17.5803 7.65252 17.2587 8.24881",
      //     "M2.23966 11.2499C1.91786 11.8461 1.75566 12.5154 1.76881 13.1927C1.78195 13.8701 1.96998 14.5326 2.31466 15.1159C3.44066 17.0289 5.93466 17.6839 7.88466 16.5799L12.2967 14.0799L12.3927 8.48389",
      //     "M14.8458 15.3799C15.5274 15.3535 16.1916 15.1571 16.7779 14.8085C17.3642 14.4599 17.854 13.9702 18.2028 13.3839C19.3288 11.4709 18.6608 9.02392 16.7108 7.91992L12.2978 5.41992L7.23877 8.17492",
      //     "M4.65553 4.12012C3.97374 4.14632 3.30934 4.34268 2.72283 4.6913C2.13632 5.03992 1.64635 5.52973 1.29753 6.11612C0.171531 8.03012 0.839531 10.4761 2.78953 11.5801L7.20253 14.0801L12.2505 11.3301",
      //   ]}
      // />
      <img src={deepResearch} width={16} height={16} />
    ),
  },
  {
    id: "openmanus",
    baseLabel: "OpenManus",
    icon: (
      <img src={openManus} width={25} height={25} />
    ),
  },
  {
    id: "aidetector",
    baseLabel: "AI Detector",
    icon: (
      <Icons
        className="text-foreground"
        path={[
          "M2.0137 4.5097C2.93342 3.05229 4.29918 1.93084 5.90769 1.31226C7.51619 0.693691 9.28145 0.611071 10.9407 1.0767C11.0695 1.11006 11.1904 1.16878 11.2962 1.24943C11.402 1.33009 11.4907 1.43105 11.557 1.5464C11.6233 1.66175 11.6659 1.78918 11.6824 1.92121C11.6988 2.05325 11.6887 2.18724 11.6527 2.31533C11.6167 2.44342 11.5555 2.56304 11.4727 2.66718C11.3899 2.77132 11.2871 2.85789 11.1704 2.92181C11.0537 2.98573 10.9255 3.02572 10.7931 3.03944C10.6608 3.05316 10.527 3.04033 10.3997 3.0017C9.33323 2.70326 8.20499 2.70565 7.13979 3.00861C6.07459 3.31156 5.11396 3.90327 4.36416 4.71827C3.61437 5.53328 3.10464 6.53981 2.89136 7.62652C2.67808 8.71323 2.76957 9.83776 3.1557 10.8757C3.7777 12.5497 4.0077 14.9657 2.4127 16.5607L1.7077 17.2657C1.52019 17.4533 1.26583 17.5588 1.00056 17.5589C0.735286 17.559 0.480843 17.4537 0.293203 17.2662C0.105562 17.0787 9.38336e-05 16.8243 6.25814e-08 16.5591C-9.37084e-05 16.2938 0.105195 16.0393 0.292703 15.8517L0.998703 15.1467C1.7467 14.3967 1.8137 13.0037 1.2817 11.5717C0.851018 10.4177 0.692993 9.17965 0.819975 7.95442C0.946956 6.72918 1.3555 5.5509 2.0137 4.5097ZM15.8477 0.292702C16.0353 0.105194 16.2898 -9.37076e-05 16.5551 6.25804e-08C16.8203 9.38327e-05 17.0747 0.105562 17.2622 0.293202C17.4497 0.480843 17.555 0.735286 17.5549 1.00056C17.5548 1.26583 17.4493 1.52019 17.2617 1.7077L16.5587 2.4107C15.8097 3.1597 15.7427 4.5537 16.2757 5.9867C16.7903 7.37067 16.912 8.87 16.6274 10.3188C16.3428 11.7677 15.6629 13.1096 14.6631 14.196C13.6632 15.2825 12.3823 16.0713 10.9621 16.475C9.54182 16.8787 8.03757 16.8818 6.6157 16.4837C6.3603 16.4118 6.14391 16.2414 6.01413 16.01C5.88436 15.7786 5.85183 15.5051 5.9237 15.2497C5.99558 14.9943 6.16597 14.7779 6.39739 14.6481C6.62881 14.5184 6.9023 14.4858 7.1577 14.5577C8.22417 14.8561 9.35242 14.8538 10.4176 14.5508C11.4828 14.2478 12.4434 13.6561 13.1932 12.8411C13.943 12.0261 14.4528 11.0196 14.666 9.93289C14.8793 8.84617 14.7878 7.72165 14.4017 6.6837C14.1977 6.13581 14.0568 5.56648 13.9817 4.9867L10.1917 8.7797C10.0995 8.87521 9.98911 8.95139 9.86711 9.0038C9.7451 9.05621 9.61388 9.0838 9.4811 9.08495C9.34832 9.08611 9.21664 9.0608 9.09375 9.01052C8.97085 8.96024 8.8592 8.88599 8.76531 8.7921C8.67141 8.6982 8.59716 8.58655 8.54688 8.46366C8.4966 8.34076 8.4713 8.20908 8.47245 8.0763C8.47361 7.94352 8.50119 7.8123 8.5536 7.6903C8.60601 7.56829 8.68219 7.45795 8.7777 7.3657L15.8477 0.292702Z",
        ]}
      />
    ),
  },
  {
    id: "proofreading",
    baseLabel: "Proofreading",
    icon: (
      <img src={proofReading} width={25} height={25} />
    ),
  },
  {
    id: "chatpdf",
    baseLabel: "ChatPDF",
    icon: <MessageSquare size={16} className="text-foreground" />,
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