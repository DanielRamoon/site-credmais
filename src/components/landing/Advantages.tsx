"use client";

import { advantages } from "@/data/landing";
import { DynamicIcon, type IconName } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";
import styles from "./Advantages.module.css";

export function Advantages() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="vantagens"
      ref={ref}
      className={`${styles.section} ${isInView ? styles.visible : ""}`}
    >
      <Container>
        <div className={styles.title}>
          <SectionTitle
            before="Por que escolher a "
            highlight="Credmais"
            after="?"
          />
        </div>
        <div className={styles.grid}>
          {advantages.map((item, index) => (
            <article
              key={item.title}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <DynamicIcon
                name={item.icon as IconName}
                className={styles.icon}
              />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
