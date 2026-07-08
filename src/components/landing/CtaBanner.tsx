import { WHATSAPP_URL } from "@/data/landing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CalculatorIcon, WhatsAppIcon } from "@/components/icons";
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
          <Button
            href="#simulacao"
            variant="outline-white"
            icon={<CalculatorIcon />}
          >
            Simular agora
          </Button>
        </div>
      </Container>
    </section>
  );
}
