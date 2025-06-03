import React from 'react';


export interface SidebarNavItem {
  label: string;
  icon: React.ReactNode; 
  path: string;
  isHeader?: boolean;   
}


export interface SidebarSubscriptionItem {
  label: string;
  icon: string | React.ReactNode;
  path: string;
}


export interface ChipCategoryItem {
  name: string;
}


export interface SidebarNavigationStructure {
  default: SidebarNavItem[];
  // youHeader: SidebarNavItem; 
  you: SidebarNavItem[];
  subscriptions: (SidebarSubscriptionItem | SidebarNavItem)[]; 
  explore: SidebarNavItem[];
  more: SidebarNavItem[];
  settings: SidebarNavItem[];
}