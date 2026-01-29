import { CtaBannerContent, ModelsShowcaseContent, TestimonialItem } from "@/types/landingPage";

export const HOW_IT_WORKS = [
  {
    title: "Advanced conversational AI",
    description:
      "GPT-4.0 is ideal for building chat assistants that must handle complex user intent, follow detailed policies, and maintain conversational context over long sessions.",
    iconSrc: "/Vector.svg",
  },
  {
    title: "Professional content creation",
    description:
      "The model performs exceptionally well at producing long, coherent, and well-structured content.",
    iconSrc: "/Group.svg",
  },
  {
    title: "Reasoning & problem-solving",
    description:
      "GPT-4.0 can analyze scenarios, weigh trade-offs, and provide step-by-step reasoning, making it suitable for strategic and analytical workflows.",
    iconSrc: "/bar.svg",
  },
];



export const MODELS_SHOWCASE_CONTENT: ModelsShowcaseContent = {
  heading: "100+ models, one\nworkspace.",
  subheading: "Switch models instantly. Keep your history. Track credits\nclearly.",
  ctaLabel: "Explore All Models",
  cardTitle: "Available Models",
  

};
export const CTA_BANNER_CONTENT: CtaBannerContent = {
  title: "Stop juggling AI tools.",
  subtitle: "Use one platform for everything.",
  buttonLabel: "Explore All Models",
  backgroundImageSrc: "/Background.png",
  darkBackgroundImageSrc: "/cta-dark.png", 
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Finally, I don't need five different tabs open. Vinony handles everything from quick copy tweaks to full image generation.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
  {
    id: "t2",
    quote:
      "The model switching is seamless. I can test my prompts across GPT-4, Claude, and Gemini without leaving the workspace.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
  {
    id: "t3",
    quote:
      "The credit system actually makes sense. I know exactly what I'm spending and never worry about hidden costs.",
    name: "Guy Hawkins",
    role: "Nursing Assistant",
    avatarSrc: "/profile.svg",
  },
];