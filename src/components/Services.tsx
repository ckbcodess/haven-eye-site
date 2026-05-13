import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    icon: '👁️',
    title: 'Comprehensive eye exam',
    description: 'Full vision check, retinal scan and prescription update.',
    price: '₹600',
    duration: '30 min'
  },
  {
    icon: '🔬',
    title: 'Contact lens fitting',
    description: 'Personal fitting, trial pair and care guidance.',
    price: '₹1,200',
    duration: '45 min'
  },
  {
    icon: '⚕️',
    title: 'Treatment & consultation',
    description: 'Dry eye, conjunctivitis and pre-surgery evaluation.',
    price: '₹900',
    duration: '30 min'
  },
  {
    icon: '🧒',
    title: 'Paediatric eye care',
    description: 'Child-friendly testing for ages 3 and up.',
    price: '₹500',
    duration: '30 min'
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">Services</p>
            <h2 className="section-title">Care for every part of your vision.</h2>
          </div>
          <p className="section-sub">From routine eye exams to specialised treatments, every service is bookable online and handled by qualified optometrists.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.price}>
                From <strong>{service.price}</strong> · {service.duration}
              </div>
              <Link href="#book" className={styles.cta}>Book this →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
