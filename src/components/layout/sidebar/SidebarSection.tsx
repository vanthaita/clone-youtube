/* eslint-disable @typescript-eslint/no-explicit-any */
import NavItem from "./NavItem";

const SidebarSection = ({ 
  items, 
  isSidebarExpanded, 
  Component = NavItem 
}: { 
  items: any[], 
  isSidebarExpanded: boolean, 
  Component?: React.ComponentType<any> 
}) => (
  <div className='flex flex-col space-y-1'>
    {items.map((item) => (
      <Component key={item.label} item={item} isSidebarExpanded={isSidebarExpanded} />
    ))}
  </div>
);


export default SidebarSection