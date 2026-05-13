'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <>
      {promoVisible && (
        <div className={styles.promo}>
          <span>🎁 <strong>Free eye test</strong> when you book before May 31</span>
          <Link href="#book">Book now →</Link>
          <span className={styles.close} onClick={() => setPromoVisible(false)}>✕</span>
        </div>
      )}
      <header className={styles.nav}>
        <div className="container">
          <div className={styles.navInner}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/logo.svg" 
                alt="Haven Eye Logo" 
                width={120} 
                height={32} 
                priority
              />
            </Link>
            <nav className={styles.navLinks}>
              <Link href="#services">Services</Link>
              <Link href="#eyewear">Eyewear</Link>
              <Link href="#location">Locations</Link>
              <Link href="#faq">FAQ</Link>
            </nav>
            <div className={styles.navCta}>
              <span className={styles.call}>📞 080-4567-8900</span>
              <Link href="#book" className="btn btn-primary">Book appointment</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
