import Star1 from "../../images/shape/pricing-star1.svg";
import Star2 from "../../images/shape/pricing-star2.svg";
import Star3 from "../../images/shape/pricing-star3.svg";

export const pricingPlans = [
  {
    id: "essential",
    delay: 200,
    title: "Essential",
    tagDisplay: "none",
    icon: Star1,
    description: "Core HR & payroll for small teams",
    actionTitle: "Start for Free",
    actionLink: "https://app.centahr.com/auth/register",
    plans: {
      monthly: {
        price: "Starting ₦500/employee",
        features: [
          "Unlimited payroll runs",
          "Employee self-service portal",
          "Direct deposit",
          "Tax calculations & filings",
          "Employee onboarding",
          "Leave management",
          "Attendance tracking",
          "Basic HR reporting",
          "Email support",
        ],
      },
      yearly: {
        price: "Starting ₦5,000/employee",
        features: [
          "Everything in Essential (monthly)",
          "2 months free (effective)",
          "Priority email support",
        ],
      },
    },
  },
  {
    id: "growth",
    delay: 250,
    title: "Growth",
    tagDisplay: "block",
    icon: Star2,
    description: "Advanced HR & payroll automation",
    actionTitle: "Start Free Trial",
    actionLink: "https://app.centahr.com/auth/register",
    plans: {
      monthly: {
        price: "Starting ₦1,200/employee",
        features: [
          "All features in Essential",
          "Automated tax filings",
          "Advanced performance tracking",
          "HR document storage",
          "Custom workflows",
          "Dedicated support specialist",
          "Export payroll data in CSV",
          "Customizable analytics",
          "Priority support",
        ],
      },
      yearly: {
        price: "Starting ₦12,000/employee",
        features: [
          "Everything in Growth (monthly)",
          "2 months free (effective)",
          "Onboarding assistance",
        ],
      },
    },
  },
  {
    id: "enterprise",
    delay: 300,
    title: "Enterprise",
    tagDisplay: "none",
    icon: Star3,
    description: "For larger organizations with complex needs",
    actionTitle: "Contact Sales",
    actionLink: "https://app.centahr.com/auth/register",
    plans: {
      monthly: {
        price: "Custom pricing",
        features: [
          "Everything in Growth",
          "Custom integrations",
          "SSO & access controls",
          "HR compliance tracking",
          "Scalable infrastructure",
          "Dedicated account manager",
          "Custom SLA & onboarding",
        ],
      },
      yearly: {
        price: "Custom pricing",
        features: [
          "Everything in Enterprise (monthly)",
          "Volume discounts",
          "Tailored training",
        ],
      },
    },
  },
];
