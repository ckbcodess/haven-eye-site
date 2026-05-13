import Link from 'next/link';
import styles from './Eyewear.module.css';

const collection = [
  {
    icon: '👓',
    title: 'Prescription glasses',
    description: 'Single vision, bifocal, progressive — all available.',
    meta: '200+ frames'
  },
  {
    icon: '🕶️',
    title: 'Sunglasses',
    description: 'UV protection, polarised and prescription options.',
    meta: '80+ styles'
  },
  {
    icon: '💧',
    title: 'Contact lenses',
    description: 'Daily, monthly and toric lenses from trusted brands.',
    meta: 'Top brands'
  }
];

export default function Eyewear() {
  return (
    <section id="eyewear">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Eyewear</p>
            <h2 className="section-title">Browse our collection — try on in-store.</h2>
          </div>
          <p className="section-sub">200+ frames and lens options curated by our team. Step in to try them on, or book a consultation to bring your prescription.</p>
        </div>
        <div className={styles.grid}>
          {collection.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.img}>{item.icon}</div>
              <div className={styles.body}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.meta}>
                  <span>{item.meta}</span>
                  <Link href="#" className={styles.cta}>Browse →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
