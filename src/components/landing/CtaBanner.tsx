import { WHATSAPP_URL } from "@/data/landing";
import { SimulateButton } from "@/components/simulation/SimulateButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/icons";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2>
          Precisa de dinheiro rápido
          <br />e com segurança?
        </h2>
        <div className={styles.actions}>
          <Button
            href={WHATSAPP_URL}
            variant="whatsapp"
            icon={<WhatsAppIcon />}
          >
            Falar no WhatsApp
          </Button>
          <SimulateButton variant="outline-white" />
        </div>
      </Container>
    </section>
  );
}
