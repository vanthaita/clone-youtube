'use client'
import { SidebarProps } from "@/types";
import { useContext, createContext, useState, useMemo, useEffect } from "react";


const SidebarContext = createContext<SidebarProps>({} as SidebarProps);

const useSidebar = () => {
  const context = useContext(SidebarContext);
  return context;
};

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('sidebar');
    setIsSidebarExpanded(storedValue === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('sidebar', String(isSidebarExpanded));
  }, [isSidebarExpanded]);

  const value = useMemo(() => ({
    isSidebarExpanded,
    setIsSidebarExpanded
  }), [isSidebarExpanded]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, useSidebar };