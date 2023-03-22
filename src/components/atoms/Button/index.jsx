import styles from "./styles.module.scss";
import Link from "next/link";


export default function Button({
  href,
  size,
  color,
  fontsize,
  className,
  label,
  handleClick,
}) {
  const classList = [];
  classList.push(styles[`button--${size}`]);
  classList.push(styles[`button--${color}`]);
  classList.push(styles[`button--${fontsize}`]);
  
  classList.push(styles[`button`]);

  return (
    <Link href={`${href}`}>
      <button
        className={`${classList.join(" ")} ${className}`}
        onClick={handleClick}
      >
        
      {label}
      </button>
    </Link>
  );
}