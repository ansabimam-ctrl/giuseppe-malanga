import Image from 'next/image';
import styles from './Work.module.css';

const Work = () => {
  const categories = [
    'Lifestyle Campaigns', 'Commercial Projects', 'Editorial Features', 
    'Brand Partnerships', 'E-Commerce', 'Catalog Modeling', 
    'Product Showcasing', 'Senior Living Brands', 'Fashion Editorials', 
    'Wellness & Beauty'
  ];

  return (
    <section id="work" className={styles.work}>
      <span className={styles.subtitle}>PORTFOLIO</span>
      <h2 className={styles.title}>SELECTED WORKS</h2>
      
      <div className={styles.gallery}>
        <div className={styles.galleryItem}>
           <Image src="/look2/a (1).jpg" alt="Work 1" fill className={styles.img} />
        </div>
        <div className={styles.galleryItem}>
           <Image src="/look3/a (2).jpg" alt="Work 2" fill className={styles.img} />
        </div>
      </div>

      <div className={styles.collabHeader}>
        <span className={styles.subtitle}>OPEN TO</span>
        <h2 className={styles.smallTitle}>READY TO COLLABORATE</h2>
      </div>

      <div className={styles.categories}>
        {categories.map((cat, index) => (
          <button key={index} className={styles.tag}>{cat}</button>
        ))}
      </div>

      <div className={styles.bookingNow}>
        <div className={styles.status}>
          <span className={styles.dot}></span>
          <span className={styles.statusText}>CURRENTLY AVAILABLE</span>
        </div>
        <h2 className={styles.bookingTitle}>BOOKING NOW</h2>
        <p className={styles.bookingDescription}>
          Open to new opportunities across the UK. Available for <br />
          lifestyle, commercial, and editorial projects.
        </p>
      </div>
    </section>
  );
};

export default Work;
