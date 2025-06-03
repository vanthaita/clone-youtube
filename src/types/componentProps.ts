import type { YouTubeVideo } from './video';
import type { SidebarNavItem, SidebarSubscriptionItem } from './navigation'; 


type SharedSidebarProps = {
  isSidebarExpanded: boolean;
  setIsSidebarExpanded?: (isExpanded: boolean) => void;
};

export type NavbarProps = SharedSidebarProps;
export type SidebarProps = SharedSidebarProps;

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
