"use client";

import Image from "next/image";
import { audiences } from "@/data/landing";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";
import styles from "./TargetAudience.module.css";

export function TargetAudience() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ""}`}
    >
      <Container>
        <div className={styles.title}>
          <SectionTitle before="Para quem é o " highlight="crédito" after="?" />
        </div>
        <div className={styles.grid}>
          {audiences.map((item, index) => (
            <article
              key={item.label}
              className={styles.item}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
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
