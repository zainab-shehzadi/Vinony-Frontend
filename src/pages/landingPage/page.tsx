
import SectionHero from "@/components/common/section-hero/SectionHero";
import VinonyFaq from "@/components/contactUs/VinonyFaq";
import CtaBanner from "@/components/landingPage/CtaBanner";
import GetStartedSection from "@/components/landingPage/GetStarted/GetStartedShowcase";
import GuaranteeStrip from "@/components/landingPage/guarantee-strip/GuaranteeStrip";
import HowItWorksCard from "@/components/landingPage/HowItWork/HowItWorksCard";
import ModelShowcaseList from "@/components/landingPage/ModelShowcase/ModelShowcaseList";
import ModelsShowcase from "@/components/landingPage/ModelShowcase/ModelsShowcase";

import ModelsMarquee from "@/components/landingPage/ModelsMarquee";

import TestimonialsSection from "@/components/landingPage/TestimonialSection/TestimonialsSection";
import ModelGrid from "@/components/models/ModelGrid";
import { HOW_IT_WORKS } from "@/constants/landingPage";
import { DEFAULT_MODELS_MARQUEE, MODELS } from "@/constants/model";
import { MODEL_SHOWCASE } from "@/constants/modelShowcase";

export default function LandingPage() {

  return (
    <div className="w-full bg-white">
      <div className="w-full px-6 md:px-10 lg:px-16  pt-10 md:pt-20 lg:pt-32 md:pb-10">
        <SectionHero
          variant="heroB"
          titleParts={[
            { type: "text", value: "One " },
            { type: "highlight", value: "Subscription" },
            { type: "text", value: ".\nEvery AI Model." },
          ]}

          subtitle="Access 100+ chat, image, video, and AI agent tools, without juggling multiple subscriptions."
        />

        <ModelsMarquee
          items={DEFAULT_MODELS_MARQUEE}
          defaultActiveId="claude-sonnet"
          onSelect={(item) => {
            console.log("Selected:", item);
          }}
          speedSeconds={16}
          pauseOnHover
        />
        <ModelsShowcase onCtaClick={() => console.log("Explore models")} />;

        <div className="py-12">
          <ModelGrid
            items={MODELS}
            onTry={(id) => {
              console.log("Try model:", id);
            }}
          />
        </div>
        <div className="py-12">
          <ModelShowcaseList
            items={MODEL_SHOWCASE}
            onExplore={(id) => console.log("Explore:", id)}
          />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {HOW_IT_WORKS.map((item) => (
            <HowItWorksCard
              key={item.title}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
              iconAlt={item.title}
            />
          ))}
        </div>
        <TestimonialsSection />

        <GetStartedSection imageSrc="/model.png"
          eyebrow="Get Started With Vinony"
          title={
            <>
              Experience All Models <br className="hidden sm:block" />
              of AI
            </>
          }
          description="Based on the conversation with the AI chatbot, you will receive personalized recommendations." />
        <GuaranteeStrip />
        <VinonyFaq />
        <CtaBanner />;
      </div>

    </div>
  );
}
