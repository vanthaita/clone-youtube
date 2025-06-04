/* eslint-disable @typescript-eslint/no-explicit-any */

const NavItem = ({ item, isSidebarExpanded }: { item: any, isSidebarExpanded: boolean }) => {
  return (
    <div 
      className={`hover:bg-gray-100 rounded-lg p-2 ${isSidebarExpanded ? 'w-14 my-2' : 'w-52'} transition-all duration-200`}
    >
      <div className={`flex ${isSidebarExpanded ? 'flex-col items-center' : 'flex-row items-center'} cursor-pointer`}>
        <div className={`${isSidebarExpanded ? 'w-6 h-6' : 'w-6 h-6 mr-4.5 ml-3 font-medium'}`}>
          {item.icon}
        </div>
        {!isSidebarExpanded && (
          <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
            {item.label}
          </span>
        )}
        {isSidebarExpanded && (
          <span className='text-[10px] mt-2 text-center'>
            {item.label}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavItem