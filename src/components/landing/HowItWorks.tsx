import { steps } from "@/data/landing";
import { DynamicIcon, ArrowRightIcon, type IconName } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <Container>
        <SectionTitle before="Como " highlight="funciona" after="?" />
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.stepWrapper}>
              <article className={styles.step}>
                <div className={styles.number}>{step.number}</div>
                <DynamicIcon
                  name={step.icon as IconName}
                  className={styles.icon}
                />
                <h3>{step.title}</h3>
              </article>
              {index < steps.length - 1 && (
                <ArrowRightIcon className={styles.arrow} />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
