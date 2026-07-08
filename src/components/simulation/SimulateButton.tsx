"use client";

import { useSimulationModal } from "@/context/SimulationModalContext";
import { Button } from "@/components/ui/Button";
import { CalculatorIcon } from "@/components/icons";

type SimulateButtonProps = {
  variant?: "orange" | "whatsapp" | "outline-white";
  className?: string;
};

export function SimulateButton({
  variant = "orange",
  className = "",
}: SimulateButtonProps) {
  const { openModal } = useSimulationModal();

  return (
    <Button
      variant={variant}
      icon={<CalculatorIcon />}
      className={className}
      onClick={openModal}
    >
      Simular agora
    </Button>
  );
}
