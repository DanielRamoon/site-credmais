import { advantages } from "@/data/landing";
import { DynamicIcon, type IconName } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./Advantages.module.css";

export function Advantages() {
  return (
    <section id="vantagens" className={styles.section}>
      <Container>
        <SectionTitle before="Por que escolher a " highlight="Credmais" after="?" />
        <div className={styles.grid}>
          {advantages.map((item) => (
            <article key={item.title} className={styles.card}>
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
