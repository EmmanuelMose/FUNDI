// aside/DrawerData.ts
import { 
  AiOutlineDashboard, 
  AiOutlineCalendar, 
  AiOutlineBook, 
  AiOutlineWallet, 
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineSearch
} from "react-icons/ai";

export type DrawerData = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
};

export const technicianDrawerData: DrawerData[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: AiOutlineDashboard,
  },
  {
    id: "available-jobs",
    label: "Available Jobs",
    icon: AiOutlineSearch,
  },
  {
    id: "my-jobs",
    label: "My Jobs",
    icon: AiOutlineBook,
  },
  {
    id: "earnings",
    label: "Earnings",
    icon: AiOutlineWallet,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: AiOutlineBell,
  },
  {
    id: "settings",
    label: "Settings",
    icon: AiOutlineSetting,
  },
];