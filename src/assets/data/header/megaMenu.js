import MoreDemoShapeImg from "../../images/mega-menu/more-demo-shape.svg";
import AppImg from "../../images/app/banner-mockup.png";

const Data = [
  {
    column: 1,
    menuList: [
      {
        title: "Recruitment (IRM)",
        dataMenu: "sass2",
        url: "/recruitment",
      },
      {
        title: "Core HR",
        dataMenu: "sass2",
        url: "/core-hr",
      },
      {
        title: "Time & Attendance",
        dataMenu: "sass2",
        url: "/attendance",
      },
      {
        title: "Leave Management",
        dataMenu: "sass2",
        url: "/leave-management",
      },
      {
        title: "Employee Self-Service",
        dataMenu: "sass2",
        url: "/employee-self-service",
        tag: "new",
      },
      {
        title: "Asset Management",
        dataMenu: "sass2",
        url: "/assets",
      },
    ],
  },
  {
    column: 2,
    menuList: [
      {
        title: "Payroll & Compliance",
        dataMenu: "sass2",
        url: "/payroll",
        tag: "hot",
      },
      {
        title: "Performance Management",
        dataMenu: "sass2",
        url: "/performance",
      },
      {
        title: "Expense Management",
        dataMenu: "sass2",
        url: "/expenses",
      },
      {
        title: "Benefits Administration",
        dataMenu: "sass2",
        url: "#",
      },
    ],
  },
  {
    column: 3,
    demoCard: {
      title: "All-in-one HR & Payroll",
      title2: "Everything you need",
      img: MoreDemoShapeImg,
    },
    menuList: [
      // {
      //   title: "Document Management",
      //   dataMenu: "sass2",
      //   url: "/documents",
      // },
      // {
      //   title: "Announcements",
      //   dataMenu: "sass2",
      //   url: "/announcements",
      // },
      // {
      //   title: "Wallet Integration",
      //   dataMenu: "sass2",
      //   url: "/wallet",
      // },
    ],
  },
  {
    column: 4,
    demoImgList: [
      {
        dataMenu: "sass2",
        img: AppImg,
      },
    ],
  },
];

export default Data;
