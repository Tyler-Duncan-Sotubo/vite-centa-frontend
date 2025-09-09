import AppScreenI from "../../images/app/app_screen_i.png";
import AppScreenII from "../../images/app/app_screen_ii.png";
import AppScreenIII from "../../images/app/app_screen_iii.png";
import AppScreenIV from "../../images/app/app_screen_iv.png";
import LinkBox from "../../images/app/link-box-icon.svg";
import ShareIcon from "../../images/app/share-icon.svg";

const Data = [
  {
    id: 1,
    imgSrc: AppScreenI,
    number: "one",
    navTitle: "Multi-Connect",
    title: "Access HR anytime, anywhere",
    description:
      "Log in seamlessly from multiple devices—whether mobile, tablet, or desktop. Employees and managers stay connected to HR tools wherever they work.",
    buttonText: "Start Free",
    iconify: "akar-icons:arrow-right",
  },
  {
    id: 2,
    imgSrc: AppScreenII,
    number: "two",
    navTitle: "Super Fast",
    title: "Instant updates, zero delays",
    description:
      "Real-time syncing ensures leave requests, approvals, and payslip access happen without lag. Keep your workforce updated instantly.",
    stats: [
      { percentage: "50%", label: "Faster Requests" },
      { percentage: "99.9%", label: "System Uptime" },
    ],
  },
  {
    id: 3,
    imgSrc: AppScreenIII,
    number: "three",
    navTitle: "Self-Service",
    title: "Secure and simple self-service",
    description:
      "Give employees control to view payslips, request leave, update personal details, and track attendance—securely and without HR bottlenecks.",
    features: [
      "View & download payslips",
      "24/7 leave and attendance requests",
      "Self-updating employee records",
    ],
  },
  {
    id: 4,
    imgSrc: AppScreenIV,
    number: "four",
    navTitle: "Data Security",
    title: "Protect sensitive employee data",
    description:
      "Enterprise-grade security keeps payroll, compliance, and employee information safe from unauthorized access or breaches.",
    protectData: [
      { imgSrc: LinkBox, text: "End-to-end encryption" },
      { imgSrc: ShareIcon, text: "Role-based data access" },
    ],
  },
];

export default Data;
