/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TransactionType = 'income' | 'expense';

export interface Currency {
  code: string;
  symbol: string;
  label: string;
}

export const CURRENCIES: Currency[] = [
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'GBP', symbol: '£', label: 'British Pound' },
  { code: 'JPY', symbol: '¥', label: 'Japanese Yen' },
];

export interface SalaryFormulas {
  basicPct: number;
  hraPct: number;
  specialAllowancePct: number;
  pfPct: number;
}

export interface DashboardMetric {
  id: string;
  label: string;
  type: 'total-salary' | 'other-income' | 'total-income' | 'household' | 'cc-expense' | 'total-expense' | 'investments' | 'charts' | 'transaction-list' | 'budget-plan' | 'health-score' | 'balance-card';
  color: string;
  textColor?: string;
  size: 'sm' | 'md' | 'lg';
  icon: string;
}

export type AppTheme = 'frosted' | 'minimal' | 'warm' | 'dark' | 'glass' | 'midnight' | 'minimalist';

export interface AppSettings {
  appName: string;
  userName: string;
  primaryColor: string;
  theme: AppTheme;
  salaryFormulas: SalaryFormulas;
  totalCTC: number;
  criticalIllness: number;
  exGratia: number;
  dashboardMetrics: DashboardMetric[];
  pageTitles: Record<string, string>;
  customCategories: Category[];
  /** Full managed category list (defaults + custom). null = not yet initialized (use BUDGET_CATEGORIES). */
  allManagedCategories: Category[] | null;
}

export const DEFAULT_METRICS: DashboardMetric[] = [
  { id: 'm1', label: 'Total Income', type: 'total-income', color: 'bg-emerald-600', size: 'md', icon: 'arrow-up-circle' },
  { id: 'm2', label: 'Total Savings', type: 'investments', color: 'bg-cyan-50/10', size: 'md', icon: 'piggy-bank' },
  { id: 'm3', label: 'Total CC Expense', type: 'cc-expense', color: 'bg-pink-50/10', size: 'md', icon: 'credit-card' },
  { id: 'm4', label: 'Total Expense', type: 'total-expense', color: 'bg-rose-50/10', size: 'md', icon: 'arrow-down-circle' },
  { id: 'm5', label: 'Financial Analytics', type: 'charts', color: 'bg-white', size: 'lg', icon: 'pie-chart' },
  { id: 'm6', label: 'Available Balance', type: 'balance-card', color: 'bg-indigo-600', size: 'md', icon: 'wallet' },
  { id: 'm7', label: 'Health Score', type: 'health-score', color: 'bg-emerald-50', size: 'md', icon: 'target' },
  { id: 'm8', label: 'Recent Transactions', type: 'transaction-list', color: 'bg-white', size: 'lg', icon: 'list' },
  { id: 'm9', label: 'Expense Planner', type: 'budget-plan', color: 'bg-white', size: 'lg', icon: 'target' },
];

export const DEFAULT_SETTINGS: AppSettings = {
  appName: 'PennyWise Budget Planner',
  userName: 'Harish Sharma',
  primaryColor: '#6366f1',
  theme: 'frosted',
  salaryFormulas: {
    basicPct: 40.01,
    hraPct: 50.00,
    specialAllowancePct: 10.0036,
    pfPct: 12.00
  },
  totalCTC: 2783000,
  criticalIllness: 2000,
  exGratia: 80,
  dashboardMetrics: DEFAULT_METRICS,
  pageTitles: {
    overview: 'Dashboard Overview',
    plan: 'Monthly Expense Tracker',
    tax: 'Take-Home Salary Calculator',
    reports: 'Financial Reports',
    history: 'Transaction Ledger'
  },
  customCategories: [],
  allManagedCategories: null
};

// ── Forecast ──────────────────────────────────────────────────────────────────
export type ForecastCategory =
  | 'credit-card'
  | 'rent'
  | 'emi'
  | 'utility'
  | 'savings'
  | 'insurance'
  | 'groceries'
  | 'other';

export interface ForecastItem {
  id: string;
  name: string;
  amount: number;
  category: ForecastCategory;
  /** "YYYY-MM" e.g. "2025-06" */
  month: string;
  note?: string;
}

export const FORECAST_CATEGORY_LABELS: Record<ForecastCategory, string> = {
  'credit-card': 'Credit Card Bill',
  rent: 'Rent',
  emi: 'EMI',
  utility: 'Utility / Bill',
  savings: 'Savings',
  insurance: 'Insurance',
  groceries: 'Groceries',
  other: 'Other',
};

export const FORECAST_CATEGORY_COLORS: Record<ForecastCategory, string> = {
  'credit-card': '#f43f5e',
  rent: '#6366f1',
  emi: '#f59e0b',
  utility: '#06b6d4',
  savings: '#10b981',
  insurance: '#8b5cf6',
  groceries: '#f97316',
  other: '#94a3b8',
};

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  subCategory?: string; // For bank names in Credit Cards
  description: string;
  date: string; // ISO string
}

export type Category = {
  name: string;
  color: string;
  icon: string;
  group: 'expense' | 'savings' | 'income' | 'liability';
};

export const BANKS = [
  'Axis', 'Axis Select', 'Amex Membership', 'Amex Gold', 'BOB', 'One Card',
  'Amazon ICICI', 'Standard Chartered', 'HSBC', 'HDFC', 'SBI Paytm', 'SBI Save', 'Kotak'
];

export const BUDGET_CATEGORIES: Category[] = [
  // Income
  { name: 'Salary', color: '#BDECB6', icon: 'trending-up', group: 'income' },
  { name: 'Other Income Sources', color: '#B2E2F2', icon: 'plus-circle', group: 'income' },
  
  // Necessary Expenses
  { name: 'Rent', color: '#A7C7E7', icon: 'home', group: 'expense' },
  { name: 'Electricity', color: '#FDFD96', icon: 'zap', group: 'expense' },
  { name: 'Gas', color: '#B2E2F2', icon: 'flame', group: 'expense' },
  { name: 'Credit Card', color: '#E2E2E2', icon: 'credit-card', group: 'expense' },
  { name: 'Insurance (Him)', color: '#C5B4E3', icon: 'shield-check', group: 'expense' },
  { name: 'Insurance (Hey)', color: '#FFD1DC', icon: 'shield-check', group: 'expense' },
  { name: 'Broadband Bill', color: '#B2E2F2', icon: 'wifi', group: 'expense' },
  
  // Savings / Investments
  { name: 'Mutual Fund', color: '#BDECB6', icon: 'line-chart', group: 'savings' },
  { name: 'NPS', color: '#DEE2FF', icon: 'landmark', group: 'savings' },
  { name: 'RD', color: '#A7C7E7', icon: 'piggy-bank', group: 'savings' },
  { name: 'Backup', color: '#FADADD', icon: 'more-horizontal', group: 'savings' },
  
  // Other
  { name: 'Household Exp (Fixed)', color: '#DEE2FF', icon: 'shopping-cart', group: 'expense' },
  { name: 'Other', color: '#E2E2E2', icon: 'more-horizontal', group: 'expense' },
];
