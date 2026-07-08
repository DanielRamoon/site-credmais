import { WHATSAPP_URL } from "@/data/landing";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

const institutional = [
  { label: "Sobre nós", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Uso", href: "#" },
];

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo className={styles.logo} />
            <p>
              Soluções em crédito consignado e empréstimo pessoal com
              aprovação rápida, taxas competitivas e atendimento humanizado.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Atendimento</h3>
            <ul>
              <li>
                <PhoneIcon className={styles.icon} />
                <span>(11) 99999-9999</span>
              </li>
              <li>
                <PhoneIcon className={styles.icon} />
                <span>(11) 3333-3333</span>
              </li>
              <li>
                <MailIcon className={styles.icon} />
                <span>contato@credmais.com.br</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Institucional</h3>
            <ul>
              {institutional.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Siga-nos</h3>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.bottom}>
        <Container>
          <p>
            &copy; {new Date().getFullYear()} Credmais. Todos os direitos
            reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
