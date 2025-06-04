/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SubscriptionItem = ({ item }: { item: any }) => {
  return (
    <div className="hover:bg-gray-100 rounded-lg p-2 w-52 transition-all duration-200">
      <div className="flex flex-row items-center cursor-pointer">
        <div className="w-6 h-6 mr-4.5 ml-3 flex-shrink-0">
          {typeof item.icon === 'string' ? (
            <img 
              src={item.icon}
              alt={item.label}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-6 h-6">
              {item.icon}
            </div>
          )}
        </div>
        <span className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>
          {item.label}
        </span>
      </div>
    </div>
  );
};

export default SubscriptionItem