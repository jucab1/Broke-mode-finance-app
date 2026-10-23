"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { goals as initialGoals, groupPlans as initialPlans, transactions as initialTransactions, type Goal, type GroupPlan, type Transaction } from "@/lib/data";

type PrototypeContextValue = {
  savedActivities: string[];
  toggleActivity: (id: string) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  goals: Goal[];
  addGoal: (goal: Goal) => void;
  plans: GroupPlan[];
  addPlan: (plan: GroupPlan) => void;
  vote: (planId: string, optionIndex: number) => void;
  notice: string | null;
  setNotice: (notice: string | null) => void;
};

const PrototypeContext = createContext<PrototypeContextValue | null>(null);

export function PrototypeProvider({ children }: { children: ReactNode }) {
  const [savedActivities, setSavedActivities] = useState<string[]>([]);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [goals, setGoals] = useState(initialGoals);
  const [plans, setPlans] = useState(initialPlans);
  const [notice, setNotice] = useState<string | null>(null);

  const value = useMemo(() => ({
    savedActivities,
    toggleActivity: (id: string) => setSavedActivities((current) => current.includes(id) ? current.filter((saved) => saved !== id) : [...current, id]),
    transactions,
    addTransaction: (transaction: Transaction) => setTransactions((current) => [transaction, ...current]),
    goals,
    addGoal: (goal: Goal) => setGoals((current) => [goal, ...current]),
    plans,
    addPlan: (plan: GroupPlan) => setPlans((current) => [plan, ...current]),
    vote: (planId: string, optionIndex: number) => setPlans((current) => current.map((plan) => plan.id === planId ? { ...plan, options: plan.options.map((option, index) => index === optionIndex ? { ...option, votes: option.votes + 1 } : option) } : plan)),
    notice,
    setNotice,
  }), [goals, notice, plans, savedActivities, transactions]);

  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const context = useContext(PrototypeContext);
  if (!context) throw new Error("usePrototype must be used within PrototypeProvider");
  return context;
}
