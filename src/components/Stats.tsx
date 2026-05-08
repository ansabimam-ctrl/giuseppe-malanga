import styles from './Stats.module.css';

const Stats = () => {
  const data = [
    { label: 'AGE', val: '65' },
    { label: 'CHEST', val: '44"' },
    { label: 'WAIST', val: '38"' },
    { label: 'WEIGHT', val: '15 STONE' },
    { label: 'SHOE SIZE', val: '9' },
    { label: 'GENDER', val: 'MALE' },
    { label: 'NATIONALITY', val: 'ITALIAN' },
    { label: 'LOCATION', val: 'CHESTER' },
    { label: 'HAIR', val: 'GREY' },
    { label: 'EYES', val: 'HAZEL' },
    { label: "DRIVING LICENCE", val: 'YES' },
  ];

  return (
    <section id="profile" className={styles.stats}>
      <h2 className={styles.sectionTitle}>STATS</h2>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.value}>{item.val}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
