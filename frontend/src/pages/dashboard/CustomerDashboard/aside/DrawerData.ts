// aside/DrawerData.ts
import { 
  AiOutlineDashboard, 
  AiOutlineCalendar, 
  AiOutlineBook, 
  AiOutlineEnvironment, 
  AiOutlineWallet, 
  AiOutlineBell,
  AiOutlineSetting
} from "react-icons/ai";

export type DrawerData = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
};

export const drawerData: DrawerData[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: AiOutlineDashboard,
  },
  {
    id: "book-service",
    label: "Book Service",
    icon: AiOutlineCalendar,
  },
  {
    id: "my-bookings",
    label: "My Bookings",
    icon: AiOutlineBook,
  },
  {
    id: "nearby-techs",
    label: "Nearby Techs",
    icon: AiOutlineEnvironment,
  },
  {
    id: "payments",
    label: "Payments",
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