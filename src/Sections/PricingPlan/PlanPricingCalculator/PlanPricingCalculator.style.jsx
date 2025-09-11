import styled from "styled-components";

export const PlanPricingCalculatorStyle = styled.section`
  background: transparent;
  margin-top: -550px;
  position: relative;
  z-index: 2;

  .layout {
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }

  /* LEFT = Plans (accordion) */
  .left {
    flex: 1 1 54%;
  }

  /* RIGHT = Price (sticky, always visible) */
  .right {
    flex: 1 1 46%;
    position: sticky;
    top: 24px;
  }

  .pricing-plan-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 15px;
    padding: 32px 28px;
    position: relative;
    min-height: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

    &::before {
      content: "";
      border-radius: 15px 15px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background: rgba(0, 206, 201, 0.3); /* default */
    }
    &.essential-card::before {
      background: rgba(14, 195, 107, 0.3);
    }
    &.growth-card::before {
      background: rgba(0, 206, 201, 0.3);
    }
    &.enterprise-card::before {
      background: rgba(249, 81, 140, 0.3);
    }
  }

  .pricing-plan-card-header {
    h6 {
      font-weight: 800;
      text-transform: uppercase;
      margin: 0;
    }
    &.essential h6 {
      color: ${({ theme }) => theme.colors.iconColor2};
    }
    &.growth h6 {
      color: ${({ theme }) => theme.colors.heroimg1Bg};
    }
    &.enterprise h6 {
      color: ${({ theme }) => theme.colors.primary};
    }
    .meta {
      color: ${({ theme }) => theme.colors.title};
      font-size: 14px;
      margin-top: 6px;
    }
  }

  .fieldset {
    margin-top: 18px;
  }
  .moneyArea {
    margin-top: 30px;
  }
  .label {
    display: block;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.badgeColor};
    margin-bottom: 8px;
  }

  .input,
  select {
    width: 100%;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 14px 12px;
    font-size: 18px;
    outline: none;
  }
  .input:focus,
  select:focus {
    border-color: #c7cbd3;
    box-shadow: 0 0 0 3px rgba(11, 99, 246, 0.12);
  }

  /* Plan list */
  .plan-list {
    display: grid;
    gap: 12px;
  }

  .plan-card {
    border: 1px solid rgba(14, 195, 107, 0.3);
    border-radius: 14px;
    background: #fff;
    transition: 0.2s;
    overflow: hidden;
  }
  .plan-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  }
  .plan-card.active {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  .plan-head {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    cursor: pointer;
  }
  .bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.25;
  }
  .plan-card.active .bullet {
    opacity: 1;
  }

  .plan-title {
    font-weight: 800;
  }
  .plan-includes {
    font-size: 12px;
    color: #6b7280;
    margin-left: auto;
  }

  /* Stepper (plus / input / minus) */
  .stepper {
    display: grid;
    grid-template-columns: 44px 1fr 44px;
    align-items: center;
    gap: 8px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 6px;
    background: #fff;
    max-width: 320px; /* tweak or remove if you want full width */
  }

  .step {
    height: 44px;
    width: 44px;
    border: 1px solid ${({ theme }) => theme.colors.primary}4d;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
  }
  .step:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.whiteColor};
  }
  .step:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .step-input {
    width: 100%;
    border: 0;
    outline: none;
    text-align: center;
    font-weight: 800;
    font-size: 30px;
    background: transparent;
    padding: 8px 6px;
    /* Hide native spinners */
  }
  .step-input::-webkit-outer-spin-button,
  .step-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .step-input[type="number"] {
    -moz-appearance: textfield;
  }

  /* Accordion body (modules) */
  .plan-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
    background: #fafafa;
  }
  .plan-card.expanded .plan-body {
    grid-template-rows: 1fr;
  }
  .plan-inner {
    overflow: hidden;
  }

  .features {
    padding: 12px 16px 16px;
    list-style: none;
    margin-left: 14px;
  }
  .features li {
    font-size: 13px;
    color: #374151;
    padding-left: 16px;
    position: relative;
  }
  .features li + li {
    margin-top: 6px;
  }
  .features li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 9px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blackColor}1f;
  }

  /* Price summary */
  .summary {
    display: flex;
    align-items: baseline;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 14px;
  }
  .price {
    font-weight: 800;
    font-size: 28px;
  }
  .unit {
    color: #6b7280;
  }
  .per-emp {
    color: #6b7280;
    margin-top: 4px;
  }

  .toggle {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    background: #f3f4f6;
    border-radius: 999px;
    padding: 4px;
  }
  .toggle button {
    border: 0;
    background: transparent;
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
  }
  .toggle button.active {
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .btn {
    appearance: none;
    border: 1px solid ${({ theme }) => theme.colors.primary}4d;
    background: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.primary};
    padding: 12px 16px;
    border-radius: 50px;
    font-weight: 800;
    cursor: pointer;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
  }
  .btn:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.whiteColor};
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 991px) {
    .layout {
      flex-direction: column;
      width: 100%;
    }
    .left,
    .right {
      position: static;
      width: 100%;
    }
  }
`;
