
import SectionHero from "@/components/common/section-hero/SectionHero";
import VinonyFaq from "@/components/contactUs/VinonyFaq";
import CtaBanner from "@/components/landingPage/CtaBanner";
import GetStartedSection from "@/components/landingPage/GetStarted/GetStartedShowcase";
import GetStartedPreview from "@/components/landingPage/GetStartedPreview";
import GuaranteeStrip from "@/components/landingPage/guarantee-strip/GuaranteeStrip";
import HowItWorksCard from "@/components/landingPage/HowItWork/HowItWorksCard";
import ModelShowcaseList from "@/components/landingPage/ModelShowcase/ModelShowcaseList";
import ModelsShowcase from "@/components/landingPage/ModelShowcase/ModelsShowcase";

import ModelsMarquee from "@/components/landingPage/ModelsMarquee";

import TestimonialsSection from "@/components/landingPage/TestimonialSection/TestimonialsSection";
import { HOW_IT_WORKS } from "@/constants/landingPage";
import { DEFAULT_MODELS_MARQUEE } from "@/constants/model";
import { MODEL_SHOWCASE } from "@/constants/modelShowcase";
import Container from "@/lib/Container";

export default function LandingPage() {

  return (
    <div className="w-full bg-white">
      <Container>
        <SectionHero
          variant="heroB"
          titleParts={[
            { type: "text", value: "All " },
            { type: "highlight", value: "AI Models" },
            { type: "text", value: ".\nOne Subscription." },
          ]}

          subtitle="Access 100+ chat, image, video, and AI agent tools,
without juggling multiple subscriptions."
        />
        <GetStartedPreview
          imageSrc="/overlay-bg.svg"
          onGetStarted={() => console.log("clicked")}
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


        <div className="py-12">
          <ModelShowcaseList
            items={MODEL_SHOWCASE}
            onExplore={(id) => console.log("Explore:", id)}
          />
        </div>
      </Container>

      <ModelsShowcase onCtaClick={() => console.log("Explore models")} />;

      <Container>
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
        <TestimonialsSection />

        <VinonyFaq />
        <CtaBanner />;
      </Container>

    </div>

  );
}
