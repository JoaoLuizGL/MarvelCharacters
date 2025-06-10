import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loading.module.css";

const characters = [
  { name: "Homem de Ferro", image: "/ironman.png" },
  { name: "Capitão América", image: "/captain.png" },
  { name: "Thor", image: "/thor.png" },
  { name: "Homem-Aranha", image: "/spiderman.png" },
  { name: "Hulk", image: "/hulk.png" }
];

export default function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % characters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = characters[index];

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current.name}
          src={current.image}
          alt={current.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className={styles.characterImage}
        />
      </AnimatePresence>

      <motion.div
        className={styles.loadingText}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Carregando...
      </motion.div>
    </div>
  );
}
