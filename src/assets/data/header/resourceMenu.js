import MoreDemoShapeImg from "../../images/mega-menu/more-demo-shape.svg";
import AppImg from "../../images/app/banner-mockup.png";

const Data = [
  {
    column: 1,
    menuList: [
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
    column: 2,
    menuList: [],
  },
  {
    column: 3,
    demoCard: {
      title: "All-in-one HR & Payroll",
      title2: "Everything you need",
      img: MoreDemoShapeImg,
    },
    menuList: [],
  },
  {
    column: 4,
    demoImgList: [{ dataMenu: "sass2", img: AppImg }],
  },
];

export default Data;
