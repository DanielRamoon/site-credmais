import styles from "./Button.module.css";

type ButtonVariant = "orange" | "whatsapp" | "outline-white";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href = "#",
  variant = "orange",
  icon,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </a>
  );
}
