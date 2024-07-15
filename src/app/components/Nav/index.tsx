import styles from "./index.module.css";

interface Props {
  lang: string;
  onUpdate: (lang: "ja" | "en") => void;
}

export default function Nav({ lang, onUpdate }: Props) {
  return (
    <nav className={styles.nav}>
      <h1>mmz_tools</h1>
      <div className={styles.lang}>
        <button
          className={styles.lang_button}
          style={lang == "ja" ? {color: "blue"} : {}}
          disabled={lang == "ja"}
          onClick={() => onUpdate("ja")}
        >JA</button>
        <span> / </span>
        <button
          className={styles.lang_button}
          style={lang == "en" ? {color: "blue"} : {}}
          disabled={lang == "en"}
          onClick={() => onUpdate("en")}
        >EN</button>
      </div>
    </nav>
  )
}
