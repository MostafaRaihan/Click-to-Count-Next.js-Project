"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Mostafa Raihan</h2>
        <br/>
        <br/>
        <br/>

        <div>
        <h3>The Counter App Make Us Next.JS</h3>
          <hr></hr></div>
        <br/>
        <div>
          <h2>The Value Of The Counter {counter}</h2>
        <button onClick={() => setCounter(counter + 1)} className={styles.button}>Increase By 1</button>
        <button onClick={() => setCounter(counter - 1)} className={styles.button}>Decrease By 1</button>
        </div>
      </main>
    </div>
  );
}
