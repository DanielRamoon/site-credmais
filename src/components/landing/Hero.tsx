import Image from "next/image";
import { HERO_IMAGE, WHATSAPP_URL } from "@/data/landing";
import { SimulateButton } from "@/components/simulation/SimulateButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  MoneyIcon,
  OnlineIcon,
  SecurityIcon,
  WhatsAppIcon,
} from "@/components/icons";
import styles from "./Hero.module.css";

const badges = [
  { icon: SecurityIcon, label: "Segurança e transparência" },
  { icon: OnlineIcon, label: "100% online" },
  { icon: MoneyIcon, label: "Dinheiro na conta em poucas horas" },
];

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Crédito consignado</span>
            <br />
            e empréstimo pessoal
          </h1>
          <p className={styles.subtitle}>
            Aprovação rápida, taxas reduzidas e dinheiro na conta em poucas
            horas!
          </p>
          <div className={styles.actions}>
            <SimulateButton />
            <Button
              href={WHATSAPP_URL}
              variant="whatsapp"
              icon={<WhatsAppIcon />}
            >
              Falar no WhatsApp
            </Button>
          </div>
          <ul className={styles.badges}>
            {badges.map((badge) => (
              <li key={badge.label}>
                <badge.icon className={styles.badgeIcon} />
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.circle}>
            <Image
              src={HERO_IMAGE}
              alt="Consultora Credmais"
              width={500}
              height={600}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
