import Link from 'next/link';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section id="book">
      <div className="container">
        <div className={styles.cta}>
          <h2>Ready when you are.</h2>
          <p>Book your appointment online in under 60 seconds. No phone tag, no waiting room.</p>
          <Link href="#" className="btn btn-primary btn-lg arrow">Book an appointment</Link>
        </div>
      </div>
    </section>
  );
}
