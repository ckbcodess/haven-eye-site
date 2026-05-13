import styles from './WhyHaven.module.css';

const reasons = [
  {
    num: "01",
    title: "Qualified specialists",
    description: "Optometrists with 10+ years experience handle every appointment personally."
  },
  {
    num: "02",
    title: "Same-day bookings",
    description: "Walk-in friendly, but book ahead and skip the wait entirely."
  },
  {
    num: "03",
    title: "One-stop care",
    description: "Exam, prescription and eyewear fitting in a single visit."
  },
  {
    num: "04",
    title: "Insurance accepted",
    description: "We work with all major providers, so you pay less out of pocket."
  }
];

const reviews = [
  {
    text: "\"Booked online, seen in 20 minutes. The optometrist explained everything clearly. Got my new glasses the same week.\"",
    author: "Priya R.",
    role: "Ridge resident",
    initials: "PR"
  },
  {
    text: "\"Took my 7-year-old here for his first eye test. The staff were so patient. He didn't want to leave.\"",
    author: "Arjun K.",
    role: "Parent",
    initials: "AK"
  },
  {
    text: "\"Finally an optical store that doesn't push the most expensive frames. Honest advice, fair prices.\"",
    author: "Meera S.",
    role: "Long-time patient",
    initials: "MS"
  }
];

export default function WhyHaven() {
  return (
    <section>
      <div className="container">
        <div className={styles.why}>
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <div>
              <p className="section-label">Why Haven Eye</p>
              <h2 className="section-title">Built for trust, designed for comfort.</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.num}>{reason.num}</div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.reviews}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.review}>
                <div className={styles.stars}>★★★★★</div>
                <p>{review.text}</p>
                <div className={styles.reviewer}>
                  <span className={styles.avatar}>{review.initials}</span>
                  <div className={styles.reviewerMeta}>
                    <strong>{review.author}</strong>
                    {review.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
