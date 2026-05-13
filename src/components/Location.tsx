import Link from 'next/link';
import styles from './Location.module.css';

export default function Location() {
  return (
    <section id="location">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Visit us</p>
            <h2 className="section-title">Find us at Ridge.</h2>
          </div>
          <p className="section-sub">Convenient parking, accessible entry, open seven days a week.</p>
        </div>
        <div className={styles.location}>
          <div className={styles.info}>
            <h3>Haven Eye — Ridge</h3>
            <div className={styles.branch}>Our flagship clinic</div>
            <div className={styles.detail}>
              <div className={styles.icon}>📍</div>
              <div><strong>Address</strong><span>12 Ridge Road, Bangalore 560001</span></div>
            </div>
            <div className={styles.detail}>
              <div className={styles.icon}>🕒</div>
              <div><strong>Hours</strong><span>Mon–Sat 9:30am – 8:00pm · Sun 10am – 6pm</span></div>
            </div>
            <div className={styles.detail}>
              <div className={styles.icon}>📞</div>
              <div><strong>Phone</strong><span>080-4567-8900</span></div>
            </div>
            <div className={styles.detail}>
              <div className={styles.icon}>🅿️</div>
              <div><strong>Parking</strong><span>Free on-site parking, wheelchair accessible</span></div>
            </div>
            <div className={styles.actions}>
              <Link href="#book" className="btn btn-primary">Book at Ridge</Link>
              <Link href="#" className="btn btn-ghost">Get directions</Link>
            </div>
          </div>
          <div className={styles.map}>
            <div className={styles.mapPin}>📍 Haven Eye, Ridge</div>
          </div>
        </div>
      </div>
    </section>
  );
}
