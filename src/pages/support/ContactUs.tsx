import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfoPanel from "@/components/contactUs/ContactInfoPanel";
import VinonyFaq from "@/components/contactUs/VinonyFaq";
import ModelShowcaseList from "@/components/landingPage/ModelShowcaseList";
import ModelGrid from "@/components/models/ModelGrid";
import type { ContactSchemaValues } from "@/components/validations/contact.schema";
import { CONTACT_INFO } from "@/constants/contact";
import { MODELS } from "@/constants/model";
import { MODEL_SHOWCASE } from "@/constants/modelShowcase";

export default function ContactUs() {
  const handleSubmit = async (values: ContactSchemaValues) => {
    console.log("Contact submit:", values);
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full  px-6 md:px-10 lg:px-14 xl:px-28 pt-10 md:pt-20 lg:pt-32 md:pb-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-[1.05] text-gray-900 md:text-[56px] lg:text-[72px]">
            Contact <span className="text-primary">Us</span>
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-base font-medium leading-7 text-gray-900 md:mt-6 md:text-[20px] lg:mt-8 lg:text-[24px]">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="mt-4 rounded-2xl bg-white shadow-[0_16px_80px_rgba(0,0,0,0.10)] md:mt-10 lg:mt-12 ">
          <div className="grid overflow-hidden rounded-2xl md:grid-cols-12">
            <div className="md:col-span-5 md:p-0 lg:p-8">
              <ContactInfoPanel info={CONTACT_INFO} ballsImageSrc="/balls.svg" />
            </div>

            {/* Right */}
            <div className="md:col-span-7 md:p-0 lg:p-8">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>

        <VinonyFaq />
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
      </div>
    </div>
  );
}
