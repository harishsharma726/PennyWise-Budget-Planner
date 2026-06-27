import BudgetApp from './pages/BudgetApp';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  public?: boolean;
}

export const routes: RouteConfig[] = [
  {
    name: 'Budget Planner',
    path: '/',
    element: <BudgetApp />,
    public: true,
  }
];
