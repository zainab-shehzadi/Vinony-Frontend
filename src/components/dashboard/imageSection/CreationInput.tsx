import { useState } from "react";
import {
  CircleDollarSign,
  Plus,
} from "lucide-react";
import { Image_Actions } from "@/constants/aiModelData";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

interface IProp{
  setReqGenerate: (a: Boolean)=> void;
}

export default function CreationInput({setReqGenerate}: IProp) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="w-full mx-auto p-4 rounded-xl bg-white">
      <p className="font-bold text-[16px] text-primaryDark mb-2">Prompt</p>

      <div className="bg-[#F8FAFC] rounded-lg p-2 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)]">
        {/* Upper Part: Input and Paperclip */}
        <div className="flex items-start w-full px-3 py-2">
          <label className="mt-2 cursor-pointer hover:opacity-70 transition-opacity">
            <input type="file" className="hidden" />
          </label>

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe the image you want to generate... e.g., A futuristic cityscape at sunset"
            className="w-full py-2 bg-transparent border-none focus:ring-0 text-primaryDark outline-none placeholder:text-accent text-sm resize-none min-h-[40px]"
          />
        </div>

        {/* Lower Part: Actions and Generate Button */}
        <div className="flex sm:flex-row items-center justify-between gap-4 mt-2 px-3 pb-1">
          {/* Action Buttons Group */}
          <div className="flex sm:hidden items-center gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-primaryDark rounded-full w-8 h-8 hover:bg-slate-50 ">
                <Plus size={20} strokeWidth={3} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Image_Actions.map((action, index)=>(
              <DropdownMenuItem>
                <ActionButton icon={action.icon} label={action.baseLabel} key={index} />
              </DropdownMenuItem>
            ))}
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <div className="hidden sm:flex items-center gap-4 overflow-x-auto no-scrollbar w-full sm:w-auto py-1">
             {Image_Actions.map((action, index)=>(
              <ActionButton icon={action.icon} label={action.baseLabel} key={index} />
            ))}
          </div>

          {/* Generate Button */}
          <button
            disabled={!inputValue}
            onClick={() => {
              setInputValue(" ")
              setReqGenerate(true)
            }}
            className={`
              flex items-center justify-center gap-2 
              sm:w-44 px-5 py-2.5 
              rounded-xl font-bold transition-all duration-200 whitespace-nowrap
          ${
          inputValue
              ? "btn-gradient text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:brightness-110 active:scale-95 cursor-pointer"
             : "btn-gradient opacity-50 text-white cursor-not-allowed"
            }
          `}
          >
            Generate
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md">
              <CircleDollarSign size={16} strokeWidth={2.5} />
              <span className="text-sm">12</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

const ActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="flex items-center gap-2 text-accent whitespace-nowrap text-primaryDark">
    <span>{icon}</span>
    <span className="text-sm font-normal">{label}</span>
  </button>
);
