import { FiShare2 } from "react-icons/fi";
import styles from "./index.module.css";

interface Props {
  lang: string;
  onUpdate: (lang: "ja" | "en") => void;
}

export default function Nav({ lang, onUpdate }: Props) {
  return (
    <nav className={styles.nav}>
      <h1>mmz_tools</h1>
      <div className={styles.right}>
        <a
          className={styles.share_button}
          target="_blank"
          href="http://twitter.com/share?url=https://m1m0zzz.github.io/mmz_tools&text=mmz_tools%20%7C%20Ableton%20Racks%20Pack">
          <FiShare2 size={"1rem"} />
        </a>
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
      </div>
    </nav>
  )
}
