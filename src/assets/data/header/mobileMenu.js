const Data = [
  {
    title: "Home",
    url: "#",
    subMenus: [
      {
        title: "Recruitment (IRM)",
        url: "/recruitment",
      },
      {
        title: "Core HR",
        url: "/core-hr",
      },
      {
        title: "Time & Attendance",
        url: "/attendance",
      },
      {
        title: "Leave Management",
        url: "/leave-management",
      },
      {
        title: "Employee Self-Service",
        url: "/employee-self-service",
        tag: "new",
      },
      {
        title: "Asset Management",
        url: "/assets",
      },
      {
        title: "Payroll & Compliance",
        url: "/payroll",
        tag: "hot",
      },
      {
        title: "Performance Management",
        url: "/performance",
      },
      {
        title: "Expense Management",
        url: "/expenses",
      },
      {
        title: "Benefits Administration",
        url: "#",
      },
    ],
  },
  {
    title: "Pricing",
    url: "/pricing-plan",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  {
    title: "Resources",
    url: "#",
    subMenus: [
      { title: "Blog", dataMenu: "sass2", url: "/blog" },
      {
        title: "PAYE Spreadsheet",
        dataMenu: "sass2",
        url: "/templates/paye-spreadsheet", // landing page (kept)
        file: "/downloads/tax_template.xlsx", // direct file
        download: true,
        downloadName: "CentaHR-PAYE-Spreadsheet.xlsx",
      },
      {
        title: "Pension Spreadsheet",
        dataMenu: "sass2",
        url: "/templates/pension-template",
        file: "/downloads/pension_template.xlsx",
        download: true,
        downloadName: "CentaHR-Pension-Template.xlsx",
      },
      {
        title: "N.H.F Spreadsheet",
        dataMenu: "sass2",
        url: "/templates/nhf-spreadsheet",
        file: "/downloads/nhf_template.xlsx",
        download: true,
        downloadName: "CentaHR-NHF-Spreadsheet.xlsx",
      },
    ],
  },
  {
    title: "Services",
    url: "/our-services",
  },
  {
    title: "Blogs",
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

export default Data;
