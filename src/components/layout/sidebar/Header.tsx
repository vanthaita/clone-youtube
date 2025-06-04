import YoutubeLogo from "@/components/common/YoutubeLogo";
import { Menu } from "lucide-react";

const SidebarHeader = ({ 
  setIsSidebarExpanded, 
  isSidebarExpanded 
}: { 
  setIsSidebarExpanded: (value: boolean) => void; 
  isSidebarExpanded: boolean; 
}) => (
    <div className='flex items-center gap-x-2 sm:gap-x-4'>
        <button 
        className='p-2 hover:bg-gray-200 rounded-full cursor-pointer group relative' 
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        >
        <Menu size={24} className='text-gray-400'/>
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            Menu
        </span>
        </button>
        <div className='flex gap-x-1 relative'>
        <YoutubeLogo />
        <span className='text-[#606060] absolute text-[9.5px] -top-1.5 -right-4 font-bold'>
            VN
        </span>
        </div>
    </div>
);

export default SidebarHeader