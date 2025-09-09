// Import images
import cardImg1 from "../../../assets/images/chatbot/card-img1.svg";
import cardImg2 from "../../../assets/images/chatbot/card-img2.svg";

export const suportCardData = [
  {
    delay: 200,
    title: "Performance Overview",
    subtitle: "Cycles, KPIs & Outcomes at a glance",
    paragraph:
      "Track active appraisal cycles with real-time KPIs—completion rate, on-time reviews, average time, and outcomes—plus radar views of core competencies.",
    listItems: [
      "Appraisal Cycle Overview (name, dates, status)",
      "KPI Cards: Total Appraisals, Completion Rate, On-Time, Avg Time",
      "Appraisal Outcomes & Recommendations (Promote / Hold / Exit)",
      "Competency Radar: Attendance, Communication, Leadership, Skills, Teamwork",
    ],
    imgUrl: cardImg1,
    cardClassName: "chatbot-customers-suport-card1",
  },
  {
    delay: 300,
    title: "Reviews, Goals & Feedback",
    subtitle: "1:1s, appraisals, goals, and 360° feedback",
    paragraph:
      "Run structured reviews, align goals, and encourage continuous feedback. Use quick actions to create cycles, reviews, and goals in seconds.",
    listItems: [
      "1:1 Check-Ins & Appraisals (structured workflows)",
      "Goals: Completed vs Overdue vs Incomplete tracking",
      "360° Feedback: Peer, Manager, Self with activity analytics",
      "Quick Actions: Create Cycle, New Review, New Goal",
    ],
    imgUrl: cardImg2,
    cardClassName: "chatbot-customers-suport-card2",
  },
];
