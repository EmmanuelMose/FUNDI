// aside/DrawerData.ts
import { 
  AiOutlineDashboard, 
  AiOutlineSearch, 
  AiOutlineBook, 
  AiOutlineWallet, 
  AiOutlineBell,
  AiOutlineSetting
} from "react-icons/ai";

export type DrawerData = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  link: string;
};

export const technicianDrawerData: DrawerData[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: AiOutlineDashboard,
    link: "",
  },
  {
    id: "available-jobs",
    label: "Available Jobs",
    icon: AiOutlineSearch,
    link: "available-jobs",
  },
  {
    id: "my-jobs",
    label: "My Jobs",
    icon: AiOutlineBook,
    link: "my-jobs",
  },
  {
    id: "earnings",
    label: "Earnings",
    icon: AiOutlineWallet,
    link: "earnings",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: AiOutlineBell,
    link: "notifications",
  },
  {
    id: "settings",
    label: "Settings",
    icon: AiOutlineSetting,
    link: "settings",
  },
];