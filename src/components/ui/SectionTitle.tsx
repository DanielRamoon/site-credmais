import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  before?: string;
  highlight: string;
  after?: string;
  light?: boolean;
  className?: string;
};

export function SectionTitle({
  before = "",
  highlight,
  after = "",
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`${styles.title} ${light ? styles.light : ""} ${className}`.trim()}
    >
      {before}
      <span className={styles.highlight}>{highlight}</span>
      {after}
    </h2>
  );
}
