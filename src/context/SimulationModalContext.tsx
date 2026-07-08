"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { SimulationModal } from "@/components/simulation/SimulationModal";

type SimulationModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const SimulationModalContext = createContext<SimulationModalContextValue | null>(
  null,
);

export function SimulationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <SimulationModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <SimulationModal isOpen={isOpen} onClose={closeModal} />
    </SimulationModalContext.Provider>
  );
}

export function useSimulationModal() {
  const context = useContext(SimulationModalContext);
  if (!context) {
    throw new Error(
      "useSimulationModal must be used within SimulationModalProvider",
    );
  }
  return context;
}
