'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'Do I need an appointment, or can I walk in?',
    a: 'Walk-ins are welcome, but booking ahead means no wait. We recommend booking for comprehensive exams and contact lens fittings.'
  },
  {
    q: 'Which insurance providers do you accept?',
    a: 'We accept all major providers including Star Health, ICICI Lombard, HDFC Ergo and corporate plans. Bring your card to your appointment.'
  },
  {
    q: 'How long does an eye exam take?',
    a: 'A standard comprehensive exam takes about 30 minutes. Contact lens fittings take 45 minutes including a trial pair.'
  },
  {
    q: 'Can I get my glasses the same day?',
    a: 'For single-vision lenses in stock, yes — within 2 hours. Progressive and specialty lenses take 3–5 days.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <p className="section-label">Questions</p>
            <h2 className="section-title" style={{ maxWidth: '100%' }}>Things people often ask.</h2>
          </div>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <div 
                className={styles.question} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className={styles.answer}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
