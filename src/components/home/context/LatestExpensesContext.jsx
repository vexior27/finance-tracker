import { createContext, useContext } from "react";

export const LatestExpensesContext = createContext([]);

export const useLatestExpenses = () => useContext(LatestExpensesContext);