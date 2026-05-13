import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span>
          Now accepting appointments at Ridge
        </div>
        <h1 className={styles.title}>
          Clear vision,<br /><em>expert care.</em>
        </h1>
        <p className={styles.lede}>
          Trusted optometrists offering eye exams, glasses, contact lenses and treatment — all under one roof, at Ridge.
        </p>
        <div className={styles.actions}>
          <Link href="#book" className="btn btn-primary btn-lg arrow">Book an appointment</Link>
          <Link href="#services" className="btn btn-ghost btn-lg">Explore services</Link>
        </div>
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <span className={styles.stars}>★★★★★</span>
            <span><strong>4.8</strong> on Google</span>
          </div>
          <div className={styles.trustItem}><strong>10,000+</strong> patients served</div>
          <div className={styles.trustItem}><strong>15+ years</strong> at Ridge</div>
          <div className={styles.trustItem}><strong>Insurance</strong> accepted</div>
        </div>
      </div>
    </section>
  );
}
