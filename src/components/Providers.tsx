"use client";

import { SimulationModalProvider } from "@/context/SimulationModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SimulationModalProvider>{children}</SimulationModalProvider>;
}
