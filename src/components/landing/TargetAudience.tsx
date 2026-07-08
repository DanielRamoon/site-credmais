import Image from "next/image";
import { audiences } from "@/data/landing";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./TargetAudience.module.css";

export function TargetAudience() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle before="Para quem é o " highlight="crédito" after="?" />
        <div className={styles.grid}>
          {audiences.map((item) => (
            <article key={item.label} className={styles.item}>
              <div className={styles.avatar}>
                <Image
                  src={item.image}
                  alt={item.label}
                  width={120}
                  height={120}
                  className={styles.image}
                />
              </div>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
