import type { YouTubeVideo } from './video';
import type { SidebarNavItem, SidebarSubscriptionItem } from './navigation'; 


export type SidebarProps = {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded: (isExpanded: boolean) => void;
};


export interface SidebarNavItemComponentProps {
  item: SidebarNavItem;
  isExpanded: boolean;
  isHeader?: boolean;
}


export interface SidebarSubscriptionItemComponentProps {
  item: SidebarSubscriptionItem;
}


export interface VideoCardProps {
  video: YouTubeVideo;
}

export interface SectionProps {
  items: SidebarNavItemComponentProps[];
  isSidebarExpanded: boolean;
  Component?: React.ComponentType<{ item: SidebarNavItemComponentProps; isSidebarExpanded?: boolean }>;
}