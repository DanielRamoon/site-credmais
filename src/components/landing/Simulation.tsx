import { simulationRows, WHATSAPP_URL } from "@/data/landing";
import { SimulateButton } from "@/components/simulation/SimulateButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CalculatorIcon, WhatsAppIcon } from "@/components/icons";
import styles from "./Simulation.module.css";

export function Simulation() {
  return (
    <section id="simulacao" className={styles.section}>
      <Container>
        <SectionTitle before="Simule seu " highlight="crédito" />
        <div className={styles.grid}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Valor</th>
                  <th>Parcelas</th>
                </tr>
              </thead>
              <tbody>
                {simulationRows.map((row) => (
                  <tr key={row.value}>
                    <td>{row.value}</td>
                    <td>{row.installments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.ctaBox}>
            <CalculatorIcon className={styles.ctaIcon} />
            <h3>
              Faça sua simulação
              <br />
              agora mesmo!
            </h3>
            <div className={styles.ctaActions}>
              <SimulateButton />
              <Button
                href={WHATSAPP_URL}
                variant="whatsapp"
                icon={<WhatsAppIcon />}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
