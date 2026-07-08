import { WHATSAPP_URL } from "@/data/landing";

export const simulationAmounts = [
  { label: "R$ 2.000,00", value: "2000" },
  { label: "R$ 3.000,00", value: "3000" },
  { label: "R$ 5.000,00", value: "5000" },
  { label: "R$ 10.000,00", value: "10000" },
  { label: "R$ 15.000,00", value: "15000" },
  { label: "R$ 20.000,00", value: "20000" },
] as const;

export const simulationInstallments = [24, 36, 48, 60, 72, 84] as const;

export type SimulationFormData = {
  name: string;
  phone: string;
  amount: string;
  installments: string;
};

export function buildSimulationWhatsAppUrl(data: SimulationFormData) {
  const amountLabel =
    simulationAmounts.find((item) => item.value === data.amount)?.label ??
    data.amount;

  const message = `Olá! Meu nome é ${data.name}. Gostaria de simular um crédito de ${amountLabel} em ${data.installments}x. Meu WhatsApp: ${data.phone}`;

  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
