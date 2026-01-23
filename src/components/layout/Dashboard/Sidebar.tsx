// import React from 'react';
import { 
  MessageSquare, Image, Video, Users, 
  Receipt, Settings, ChevronDown, X, 
  ArrowUpRight
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

interface IProp{
  toggle: boolean;
}

const Sidebar = ({ toggle }: IProp) => {
  const menuItems = [
    {
      title: "Chat",
      icon: <MessageSquare className="w-5 h-5" />,
      subItems: ["Start New Chat", "My History"],
    },
    {
      title: "Images",
      icon: <Image className="w-5 h-5" />,
      subItems: ["My Creations"],
    },
    {
      title: "Videos",
      icon: <Video className="w-5 h-5" />,
      subItems: ["My Creations"],
    },
    {
      title: "Agents",
      icon: <Users className="w-5 h-5" />,
      subItems: ["My History"],
    },
  ];

  return (
    <div className={`fixed z-50 w-64 h-full bg-white border-r flex flex-col p-4 md:relative transform transition-transform duration-300 ease-in-out md:translate-x-0 ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-2 px-2 mt-5 mb-10">
        <p className="text-xl font-semibold text-primary">Logo Here</p>
      </div>

      <div className="text-[11px] font-normal text-accent tracking-widest px-2 mb-2">
        MAIN MENU
      </div>

      {/* Navigation with Shadcn Accordion */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full border-none">
          {menuItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-none group">
              <AccordionTrigger className="hover:no-underline py-3 px-2 mt-2 rounded-lg hover:bg-slate-50 transition-all data-[state=open]:bg-[#F3F4F8] data-[state=open]:text-primary data-[state=open]:rounded-b-none">
                <div className="flex items-center gap-3 text-accent font-medium group-data-[state=open]:text-primary ">
                  {item.icon}
                  <span className="text-sm transition-all duration-300 ease-in-out group-data-[state=open]:text-[16px] group-data-[state=open]:font-semibold">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-2 px-10 group-data-[state=open]:bg-[#F3F4F8] group-data-[state=open]:rounded-b-lg">
                <ul className="space-y-2">
                  {item.subItems.map((sub, i) => (
                    <li key={i}>
                      <button className="text-xs text-accent hover:text-primary block w-full text-left py-1">
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Static Links */}
        <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors mt-2">
          <Receipt className="w-5 h-5" />
          <span className="text-sm font-medium">Billings</span>
        </button>
        <button className="flex items-center gap-3 w-full px-2 py-3 text-accent hover:bg-slate-50 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </nav>

      {/* Free Plan Card (Bottom Section) */}
      <div className="mt-auto border rounded-xl p-4 bg-white shadow-sm relative overflow-hidden">
        <button className="absolute top-2 right-2 text-accent hover:text-slate-600">
          <X className="w-3 h-3" />
        </button>
        
        <h4 className="text-[16px] font-bold text-[#23272E] mb-1">Free Plan</h4>
        <p className="text-[14px] text-accent leading-tight mb-3">
          <span className="font-bold text-[#23272E]">0.00</span> of <span className="font-bold text-[#23272E]">100</span> free credits used.
          Add a payment method to prevent disruption.
        </p>

        <Progress value={50} className="h-1.5 mb-4 bg-slate-100" />
        
        <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
          Upgrade Plan
          <ArrowUpRight size={18}/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;