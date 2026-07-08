"use client";

import { useState } from "react";
import { navLinks, WHATSAPP_URL } from "@/data/landing";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/icons";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          <Logo />
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={WHATSAPP_URL}
            variant="whatsapp"
            icon={<WhatsAppIcon />}
            className={styles.cta}
          >
            Falar no WhatsApp
          </Button>
        </nav>
      </Container>
    </header>
  );
}
