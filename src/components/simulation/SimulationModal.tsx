"use client";

import { useEffect, useState } from "react";
import {
  buildSimulationWhatsAppUrl,
  simulationAmounts,
  simulationInstallments,
  type SimulationFormData,
} from "@/lib/simulation";
import { WhatsAppIcon } from "@/components/icons";
import styles from "./SimulationModal.module.css";

type SimulationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialForm: SimulationFormData = {
  name: "",
  phone: "",
  amount: "",
  installments: "",
};

export function SimulationModal({ isOpen, onClose }: SimulationModalProps) {
  const [form, setForm] = useState<SimulationFormData>(initialForm);

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildSimulationWhatsAppUrl(form);
    window.open(url, "_blank", "noopener,noreferrer");
    setForm(initialForm);
    onClose();
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="simulation-modal-title"
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>

        <h2 id="simulation-modal-title" className={styles.title}>
          Simule seu <span>crédito</span>
        </h2>
        <p className={styles.subtitle}>
          Preencha os dados abaixo e envie sua simulação pelo WhatsApp.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>Nome completo</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </label>

          <label className={styles.field}>
            <span>WhatsApp</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Valor desejado</span>
            <select
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um valor</option>
              {simulationAmounts.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span>Quantidade de parcelas</span>
            <select
              name="installments"
              value={form.installments}
              onChange={handleChange}
              required
            >
              <option value="">Selecione as parcelas</option>
              {simulationInstallments.map((item) => (
                <option key={item} value={item}>
                  {item}x
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className={styles.submit}>
            <WhatsAppIcon />
            Enviar simulação
          </button>
        </form>
      </div>
    </div>
  );
}
