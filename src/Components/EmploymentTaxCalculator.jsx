"use client";

import { useState } from "react";
import { CalculatePayroll } from "../utils/calculatePAYE";
import { formatCurrency } from "../utils/formatCurrency";

export default function EmploymentTaxCalculator() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = {
    type: "",
    msg: "",
  };
  const [result, setResult] = useState(null);

  const numberLike = (v) => /^\d+(\.\d+)?$/.test(v); // allow decimals

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    const form = e.currentTarget;

    const monthlySalary = form["monthlySalary"]?.value.trim();
    const basicAllowance = form["basicAllowance"]?.value.trim();
    const housingAllowance = form["housingAllowance"]?.value.trim();
    const transportAllowance = form["transportAllowance"]?.value.trim();
    const otherAllowances = form["otherAllowances"]?.value.trim();
    const pension = form["pension"]?.checked;
    const nhf = form["nhf"]?.checked;

    // Basic client-side validation (server/utility should still guard)
    if (
      !monthlySalary ||
      !basicAllowance ||
      !housingAllowance ||
      !transportAllowance
    ) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }
    if (
      !numberLike(monthlySalary) ||
      !numberLike(basicAllowance) ||
      !numberLike(housingAllowance) ||
      !numberLike(transportAllowance) ||
      (otherAllowances && !numberLike(otherAllowances))
    ) {
      setStatus({ type: "error", msg: "Amounts must be valid numbers." });
      return;
    }

    try {
      setSubmitting(true);

      // Build payload to match your previous CalculatePayroll input shape
      const payload = {
        monthlySalary, // strings are fine if your util parses them
        basicAllowance,
        housingAllowance,
        transportAllowance,
        otherAllowances: otherAllowances || "",
        pension: Boolean(pension),
        nhf: Boolean(nhf),
      };

      const calc = CalculatePayroll(payload);
      setResult(calc);
      setStatus({ type: "success", msg: "Calculation complete." });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Something went wrong running the calculation.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card w-full">
      <div className="card-header">
        <h3 className="card-title">Employment Income Tax Calculator</h3>
      </div>

      <div className="card-content">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="form-input mb-20">
            <label htmlFor="monthlySalary">Monthly Salary (₦) *</label>
            <input
              type="number"
              name="monthlySalary"
              id="monthlySalary"
              placeholder="Enter monthly salary"
              step="0.01"
              required
              disabled={submitting}
            />
          </div>

          <div className="form-input mb-20">
            <label htmlFor="basicAllowance">Basic Allowance (₦) *</label>
            <input
              type="number"
              name="basicAllowance"
              id="basicAllowance"
              placeholder="Enter basic allowance"
              step="0.01"
              required
              disabled={submitting}
            />
          </div>

          <div className="form-input mb-20">
            <label htmlFor="housingAllowance">Housing Allowance (₦) *</label>
            <input
              type="number"
              name="housingAllowance"
              id="housingAllowance"
              placeholder="Enter housing allowance"
              step="0.01"
              required
              disabled={submitting}
            />
          </div>

          <div className="form-input mb-20">
            <label htmlFor="transportAllowance">
              Transport Allowance (₦) *
            </label>
            <input
              type="number"
              name="transportAllowance"
              id="transportAllowance"
              placeholder="Enter transport allowance"
              step="0.01"
              required
              disabled={submitting}
            />
          </div>

          <div className="form-input mb-20">
            <label htmlFor="otherAllowances">Other Allowances (₦)</label>
            <input
              type="number"
              name="otherAllowances"
              id="otherAllowances"
              placeholder="Enter other allowances"
              step="0.01"
              disabled={submitting}
            />
          </div>

          <div className="form-input mb-20">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="pension"
                id="pension"
                defaultChecked
                disabled={submitting}
              />
              Pension
            </label>
          </div>

          <div className="form-input mb-20">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="nhf"
                id="nhf"
                defaultChecked
                disabled={submitting}
              />
              NHF
            </label>
          </div>

          {/* status */}
          <div aria-live="polite" className="mb-20">
            {status.msg && (
              <p
                style={{
                  color: status.type === "error" ? "#c0392b" : "#2ecc71",
                  marginBottom: 0,
                }}
              >
                {status.msg}
              </p>
            )}
          </div>

          <div className="item-button">
            <button
              type="submit"
              className="template-btn primary-bg w-full"
              disabled={submitting}
            >
              {submitting ? "Calculating..." : "Calculate"}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-lg font-semibold">
              Gross Salary (Monthly):{" "}
              <span className="text-brand">
                {formatCurrency(result.grossSalary)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Taxable Income:{" "}
              <span className="text-brand">
                {formatCurrency(result.taxableIncome)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              PAYE:{" "}
              <span className="text-brand">{formatCurrency(result.PAYE)}</span>
            </p>
            <p className="text-lg font-semibold">
              Pension (Monthly):{" "}
              <span className="text-brand">
                {formatCurrency(result.pension)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              NHF (Monthly):{" "}
              <span className="text-brand">{formatCurrency(result.NHF)}</span>
            </p>
            <p className="text-lg font-semibold">
              Net Salary:{" "}
              <span className="text-brand">
                {formatCurrency(result.netSalary)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Total Deductions:{" "}
              <span className="text-brand">
                {formatCurrency(result.totalDeductions)}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Effective Tax Rate:{" "}
              <span className="text-brand">{result.effectiveTaxRate}</span>
            </p>
            <p className="text-lg font-semibold">
              Average Tax Rate:{" "}
              <span className="text-brand">{result.averageTaxRate}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
