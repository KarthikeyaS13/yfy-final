import styles from './TrustBar.module.css';

export default function TrustBar() {
  const stats = [
    { value: '22', label: 'PT rule packs' },
    { value: '16', label: 'LWF rule packs' },
    { value: '36', label: 'Jurisdictions published' },
    { value: '3', label: 'ISO certifications' },
    { value: 'Go-Live', label: 'Billing starts at go-live' },
  ];
  return (
    <div className={styles.bar}>
      <div className={`container-lg ${styles.inner}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
