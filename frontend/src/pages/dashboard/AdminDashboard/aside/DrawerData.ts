// aside/DrawerData.ts
import { 
  AiOutlineDashboard, 
  AiOutlineUser, 
  AiOutlineTool, 
  AiOutlineBook, 
  AiOutlineWallet, 
  AiOutlineFileText,
  AiOutlineSetting
} from "react-icons/ai";

export type DrawerData = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
};

export const adminDrawerData: DrawerData[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: AiOutlineDashboard,
  },
  {
    id: "users",
    label: "Users",
    icon: AiOutlineUser,
  },
  {
    id: "fundis",
    label: "Fundis",
    icon: AiOutlineTool,
  },
  {
    id: "bookings",
    label: "Bookings",
    icon: AiOutlineBook,
  },
  {
    id: "payments",
    label: "Payments",
    icon: AiOutlineWallet,
  },
  {
    id: "reports",
    label: "Reports",
    icon: AiOutlineFileText,
  },
  {
    id: "settings",
    label: "Settings",
    icon: AiOutlineSetting,
  },
];