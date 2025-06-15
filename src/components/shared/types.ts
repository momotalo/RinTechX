import { ReactNode } from "react";

export interface SubMenuItem {
  id: string;
  label: string;
  href: string;
  icon?: ReactNode;
  iconColor?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon: ReactNode;
  iconColor: string;
  bgColor?: string;
  subItems?: SubMenuItem[];
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  sidebarColor?: string;
  sidebarType?: "white" | "dark";
}

export interface NavbarProps {
  onSidebarToggle: () => void;
  breadcrumb?: {
    category: string;
    page: string;
  };
  isNavbarFixed?: boolean;
  username?: string;
}

export interface DashboardLayoutProps {
  children: ReactNode;
  breadcrumb?: {
    category: string;
    page: string;
  };
  username?: string;
}

export interface FixedPluginProps {
  isOpen: boolean;
  onClose: () => void;
  onColorChange: (color: string) => void;
  onTypeChange: (type: "white" | "dark") => void;
  onNavbarFixedChange: (fixed: boolean) => void;
  onDarkModeChange: (white: boolean) => void;
  sidebarColor: string;
  sidebarType: "white" | "dark";
  isNavbarFixed: boolean;
  isDarkMode: boolean;
}
