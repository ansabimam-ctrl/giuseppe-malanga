import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/look1/a (5).jpg" 
              alt="Giuseppe Malanga Portrait" 
              fill 
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.textSide}>
          <span className={styles.subtitle}>ABOUT</span>
          <h2 className={styles.title}>GIUSEPPE MALANGA</h2>
          <p className={styles.quote}>
            &quot;Ready to bring authentic, mature character to commercial and lifestyle campaigns.&quot;
          </p>
          <div className={styles.description}>
            <p>
              Giuseppe is a confident, approachable model with a natural ease in front of the camera. 
              He is particularly interested in commercial modelling, lifestyle shoots and campaigns 
              for brands that value real, relatable characters.
            </p>
            <p>
              Reliable, easy to work with and comfortable taking direction, Giuseppe is keen to 
              build his portfolio and collaborate on adverts, catalogues, e-commerce and other commercial projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
