import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.logo} ${className}`.trim()}>
      <Image
        src="/assets/logo/logo.png"
        alt="Credmais"
        width={200}
        height={120}
        priority
        className={styles.image}
      />
    </div>
  );
}
