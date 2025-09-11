import { useMemo, useState } from "react";
import { PlanPricingCalculatorStyle } from "./PlanPricingCalculator.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

/** ---------- Config ---------- */
const ALL_MODULES = [
  "Recruitment (IRM)",
  "Core HR",
  "Time & Attendance",
  "Leave Management",
  "Employee Self-Service",
  "Asset Management",
  "Payroll & Compliance",
  "Performance Management",
  "Expense Management",
  "Benefits Administration",
];

const PLAN_DEFS = {
  essential: {
    label: "Essential",
    modules: ["Core HR", "Leave Management", "Employee Self-Service"],
  },
  growth: {
    label: "Growth",
    modules: [
      "Core HR",
      "Leave Management",
      "Employee Self-Service",
      "Time & Attendance",
      "Performance Management",
      "Expense Management",
      "Asset Management",
    ],
  },
  enterprise: {
    label: "Enterprise",
    modules: [...ALL_MODULES],
  },
};

const BASE_MODULE = "Core HR";
const usdToNgn = 1500; // adjust for live rate
const annualDiscount = 0.1;

/** ---------- Pricing Logic ---------- */
function computeYearlyUSD(employees, includedModules) {
  const E = Math.max(1, Math.floor(employees) || 1);
  const staffOnly = 0.5 * E; // base
  const allMods = 7 * E + 38; // everything
  const pool = Math.max(0, allMods - staffOnly);

  const totalAddons = ALL_MODULES.filter((m) => m !== BASE_MODULE).length;
  const includedAddons = includedModules.filter(
    (m) => m !== BASE_MODULE
  ).length;

  if (includedAddons <= 0) return staffOnly;
  if (includedAddons >= totalAddons) return allMods;

  const share = (includedAddons / totalAddons) * pool;
  return staffOnly + share;
}

const money = (n) => n.toLocaleString();

/** ---------- Component ---------- */
export default function PlanPricingCalculator() {
  const [employees, setEmployees] = useState(10);
  const [planKey, setPlanKey] = useState("growth"); // selected plan for pricing
  const [expandedPlan, setExpandedPlan] = useState("growth"); // accordion open state
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("NGN");

  const plan = PLAN_DEFS[planKey];

  const yearlyUSD = useMemo(
    () => computeYearlyUSD(employees, plan.modules),
    [employees, plan.modules]
  );
  const yearlyUSDDiscounted =
    Math.round(yearlyUSD * (1 - annualDiscount) * 100) / 100;
  const monthlyUSD = Math.round((yearlyUSD / 12) * 100) / 100;
  const perEmpMonthlyUSD =
    Math.round((monthlyUSD / Math.max(1, employees)) * 100) / 100;

  const toCurrency = (usd) =>
    currency === "USD" ? usd : Math.round(usd * usdToNgn);
  const totalDisplayed =
    billing === "monthly"
      ? toCurrency(monthlyUSD)
      : toCurrency(yearlyUSDDiscounted);
  const perEmpMonthlyDisplayed = toCurrency(perEmpMonthlyUSD);

  const onPlanClick = (key) => {
    setPlanKey(key); // select for pricing
    setExpandedPlan((prev) => (prev === key ? "" : key)); // toggle accordion
  };

  // Put these helpers near your component top (under useState)
  const MIN_EMP = 1;
  const MAX_EMP = 100000;
  const clamp = (n) => Math.min(MAX_EMP, Math.max(MIN_EMP, n || MIN_EMP));

  const handleEmployeesChange = (e) => {
    const n = parseInt(e.target.value, 10);
    setEmployees(clamp(isNaN(n) ? MIN_EMP : n));
  };

  const inc = (e) => {
    const step = e?.shiftKey ? 5 : e?.altKey ? 25 : 1; // Shift=+5, Alt=+25
    setEmployees((prev) => clamp((parseInt(prev, 10) || MIN_EMP) + step));
  };

  const dec = (e) => {
    const step = e?.shiftKey ? 5 : e?.altKey ? 25 : 1;
    setEmployees((prev) => clamp((parseInt(prev, 10) || MIN_EMP) - step));
  };

  const onEmpKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      inc();
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      dec();
    }
  };

  return (
    <PlanPricingCalculatorStyle>
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="fieldset">
            <h3 className="text-white">Price Plan Calculator</h3>
          </div>
          <div className="layout">
            {/* LEFT: Plans (accordion) */}
            <div className="left">
              <div className="fieldset">
                <div className="plan-list">
                  {Object.entries(PLAN_DEFS).map(([key, def]) => {
                    const isActive = planKey === key;
                    const isExpanded = expandedPlan === key;
                    return (
                      <div
                        key={key}
                        className={`plan-card ${isActive ? "active" : ""} ${
                          isExpanded ? "expanded" : ""
                        }`}
                      >
                        <div
                          className="plan-head"
                          onClick={() => onPlanClick(key)}
                          role="button"
                          aria-expanded={isExpanded}
                        >
                          <div className="bullet" />
                          <div className="plan-title">{def.label}</div>
                        </div>

                        <div className="plan-body" aria-hidden={!isExpanded}>
                          <div className="plan-inner">
                            <ul className="features list-none">
                              {def.modules.map((m) => (
                                <li key={m}>
                                  <p>{m}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Price (sticky) */}
            <div className="right">
              <div className={`pricing-plan-card ${planKey}-card`}>
                <div className={`pricing-plan-card-header ${planKey}`}>
                  <h6>{PLAN_DEFS[planKey].label}</h6>
                  <div className="meta">
                    <p>Choose employees • Billing • Currency</p>
                  </div>
                </div>

                {/* Employees */}
                <div className="fieldset">
                  <span className="label">Employees</span>

                  <div
                    className="stepper"
                    role="group"
                    aria-label="Employee count"
                  >
                    <button
                      type="button"
                      className="step minus"
                      onClick={dec}
                      aria-label="Decrease employees"
                      disabled={employees <= MIN_EMP}
                      title="Click (−1), Shift-click (−5), Alt-click (−25)"
                    >
                      −
                    </button>

                    <input
                      className="step-input"
                      type="number"
                      inputMode="numeric"
                      min={MIN_EMP}
                      max={MAX_EMP}
                      step={1}
                      value={employees}
                      onChange={handleEmployeesChange}
                      onKeyDown={onEmpKeyDown}
                      aria-live="polite"
                    />

                    <button
                      type="button"
                      className="step plus"
                      onClick={inc}
                      aria-label="Increase employees"
                      disabled={employees >= MAX_EMP}
                      title="Click (+1), Shift-click (+5), Alt-click (+25)"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Billing */}
                <div className="fieldset">
                  <span className="label">Billing</span>
                  <div className="toggle" role="tablist">
                    <button
                      className={billing === "monthly" ? "active" : ""}
                      onClick={() => setBilling("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className={billing === "annual" ? "active" : ""}
                      onClick={() => setBilling("annual")}
                    >
                      Annual · 10% off
                    </button>
                  </div>
                </div>

                {/* Currency */}
                <div className="fieldset">
                  <span className="label">Currency</span>
                  <div className="toggle" role="tablist">
                    <button
                      className={currency === "USD" ? "active" : ""}
                      onClick={() => setCurrency("USD")}
                    >
                      USD
                    </button>
                    <button
                      className={currency === "NGN" ? "active" : ""}
                      onClick={() => setCurrency("NGN")}
                    >
                      NGN
                    </button>
                  </div>
                </div>

                {/* Summary */}
                <div className="moneyArea">
                  <div className="summary">
                    <div className="price">
                      <h2>
                        {currency === "USD" ? "$" : "₦"}
                        {money(totalDisplayed)}
                      </h2>
                    </div>
                    <div className="unit">
                      {billing === "monthly"
                        ? "per month"
                        : "per year (10% off)"}
                    </div>
                  </div>
                  <div className="per-emp">
                    ≈ {currency === "USD" ? "$" : "₦"}{" "}
                    {money(perEmpMonthlyDisplayed)} / employee / month
                  </div>
                </div>

                <div className="fieldset" style={{ marginTop: 18 }}>
                  <button className="btn">Get started</button>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </PlanPricingCalculatorStyle>
  );
}
