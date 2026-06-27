import { Transaction, ForecastItem } from '../types';

const STORAGE_KEY = 'pastel_budget_data';
const CURRENCY_KEY = 'pastel_budget_currency';
const HOUSEHOLD_EXPENSE_KEY = 'pastel_household_expense';
const SETTINGS_KEY = 'pennywise_settings';

export const saveTransactions = (transactions: Transaction[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const loadTransactions = (): Transaction[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse transactions', e);
    return [];
  }
};

export const saveCurrency = (currencyCode: string) => {
  localStorage.setItem(CURRENCY_KEY, currencyCode);
};

export const loadCurrency = (): string => {
  return localStorage.getItem(CURRENCY_KEY) || 'INR';
};

export const saveHouseholdExpense = (amount: number) => {
  localStorage.setItem(HOUSEHOLD_EXPENSE_KEY, amount.toString());
};

export const loadHouseholdExpense = (): number => {
  const val = localStorage.getItem(HOUSEHOLD_EXPENSE_KEY);
  return val ? parseFloat(val) : 0;
};

export const saveSettings = (settings: unknown) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export const loadSettings = (): unknown => {
  const val = localStorage.getItem(SETTINGS_KEY);
  return val ? JSON.parse(val) : null;
};

const FORECAST_KEY = 'pennywise_forecast';

export const saveForecastItems = (items: ForecastItem[]) => {
  localStorage.setItem(FORECAST_KEY, JSON.stringify(items));
};

export const loadForecastItems = (): ForecastItem[] => {
  const val = localStorage.getItem(FORECAST_KEY);
  if (!val) return [];
  try { return JSON.parse(val); } catch { return []; }
};
