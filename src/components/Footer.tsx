import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image 
                src="/logo.svg" 
                alt="Haven Eye Logo" 
                width={120} 
                height={32} 
              />
            </div>
            <p>Expert eye care at Ridge. Clear vision, honest advice, every visit.</p>
          </div>
          <div className={styles.col}>
            <h5>Services</h5>
            <Link href="#">Eye exams</Link>
            <Link href="#">Contact lens fitting</Link>
            <Link href="#">Treatment</Link>
            <Link href="#">Paediatric care</Link>
          </div>
          <div className={styles.col}>
            <h5>Eyewear</h5>
            <Link href="#">Prescription glasses</Link>
            <Link href="#">Sunglasses</Link>
            <Link href="#">Contact lenses</Link>
          </div>
          <div className={styles.col}>
            <h5>Visit</h5>
            <Link href="#location">Locations</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#">Contact</Link>
            <Link href="#book">Book appointment</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Haven Eye. All rights reserved.</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
