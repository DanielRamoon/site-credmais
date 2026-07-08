import { testimonials } from "@/data/landing";
import { StarIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          before="O que nossos "
          highlight="clientes"
          after=" dizem"
        />
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={styles.star} />
                ))}
              </div>
              <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
