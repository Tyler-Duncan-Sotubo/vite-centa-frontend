// Import your images using the correct paths
import clockIcon from "../../../assets/images/icons/intelligence.svg";
import calendarIcon from "../../../assets/images/icons/calendar-2.svg";
import locationIcon from "../../../assets/images/icons/map.svg";
import payrollIcon from "../../../assets/images/icons/star.svg";

export const home2FeaturesData = [
  {
    delay: 200,
    class: "contents-text contents-text1",
    icon: clockIcon,
    title: "Real-Time Tracking",
    description:
      "Monitor employee check-ins, check-outs, and shifts live across all locations.",
  },
  {
    delay: 220,
    class: "contents-text contents-text2",
    icon: calendarIcon,
    title: "Leave Integration",
    description:
      "Seamlessly link attendance with leave management for complete oversight.",
  },
  {
    delay: 240,
    class: "contents-text contents-text3",
    icon: locationIcon,
    title: "Geo-Location Support",
    description:
      "Enable location-based check-ins to verify remote or on-site attendance accurately.",
  },
  {
    delay: 260,
    class: "contents-text contents-text4",
    icon: payrollIcon,
    title: "Payroll Ready",
    description:
      "Sync attendance data directly with payroll to simplify processing and reduce errors.",
  },
];
