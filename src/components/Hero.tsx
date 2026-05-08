'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const LOOK_IMAGES: Record<number, string[]> = {
  0: [
    '/look1/a (5).jpg',
    '/look1/a (6).jpg',
    '/look1/b (5).jpg',
    '/look1/b (6).jpg',
    '/look1/c (5).jpg',
    '/look1/d (5).jpg',
    '/look1/e (4).jpg',
    '/look1/e (6).jpg',
  ],
  1: [
    '/look2/a (1).jpg',
    '/look2/a (7).jpg',
    '/look2/a (8).jpg',
    '/look2/a (9).jpg',
    '/look2/b (8).jpg',
    '/look2/b (9).jpg',
    '/look2/c (7).jpg',
    '/look2/d (7).jpg',
    '/look2/d (8).jpg',
    '/look2/e (5).jpg',
    '/look2/e (9).jpg',
  ],
  2: [
    '/look3/a (2).jpg',
    '/look3/a (3).jpg',
    '/look3/a (4).jpg',
    '/look3/b (1).jpg',
    '/look3/b (2).jpg',
    '/look3/b (3).jpg',
    '/look3/b (4).jpg',
    '/look3/c (1).jpg',
    '/look3/c (3).jpg',
    '/look3/c (4).jpg',
    '/look3/d (1).jpg',
    '/look3/d (2).jpg',
    '/look3/d (4).jpg',
    '/look3/e (1).jpg',
    '/look3/e (2).jpg',
    '/look3/e (7).jpg',
    '/look3/e (8).jpg',
  ],
};

const Hero = () => {
  const [currentLook, setCurrentLook] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  const stats = [
    { label: 'AGE', value: '65' },
    { label: 'WEIGHT', value: '15 STONE' },
    { label: 'CHEST / WAIST', value: '44" / 38"' },
    { label: 'HAIR', value: 'GREY' },
    { label: 'EYES', value: 'HAZEL' },
    { label: 'GENDER', value: 'MALE' },
    { label: 'SHOE', value: '9' },
    { label: 'LOCATION', value: 'CHESTER' },
    { label: 'NATIONALITY', value: 'ITALIAN' },
  ];

  const looks = ['LOOK 1', 'LOOK 2', 'LOOK 3'];
  
  const currentImages = LOOK_IMAGES[currentLook] || Array(15).fill('/images/hero.png');
  const totalImages = currentImages.length;

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, totalImages]);

  const handleNext = () => {
    setDirection('next');
    setCurrentImageIndex((prev) => (prev + 3) % totalImages);
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentImageIndex((prev) => (prev - 3 + totalImages) % totalImages);
  };

  const handleLookClick = (index: number) => {
    setCurrentLook(index);
    setCurrentImageIndex(0);
    setDirection('next');
  };

  // Indices for the 3 images shown
  const idx1 = (currentImageIndex - 1 + totalImages) % totalImages;
  const idx2 = currentImageIndex;
  const idx3 = (currentImageIndex + 1) % totalImages;

  const formatCounter = () => {
    const start = currentImageIndex + 1;
    const end = Math.min(start + 2, totalImages);
    return `${start.toString().padStart(2, '0')}-${end.toString().padStart(2, '0')} / ${totalImages}`;
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.carouselContainer}>
        <div className={styles.statsOverlay}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statTag}>
              {stat.label} {stat.value}
            </div>
          ))}
        </div>

        <div className={styles.slideTrack}>
          {/* Previous Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`} onClick={() => openLightbox(idx1)}>
            <div key={`left-${idx1}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx1]} alt={`Look ${currentLook + 1} - Image ${idx1 + 1}`} fill className={`${styles.heroImage} ${styles.clickableImage}`} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx1]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
            <div className={styles.sideOverlay}></div>
          </div>

          {/* Current Slide */}
          <div className={styles.slide} onClick={() => openLightbox(idx2)}>
            <div key={`center-${idx2}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image 
                src={currentImages[idx2]} 
                alt={`Look ${currentLook + 1} - Image ${idx2 + 1}`}
                fill 
                className={`${styles.heroImage} ${styles.clickableImage}`}
                priority
              />
              <div className={styles.reflection}>
                <Image src={currentImages[idx2]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
          </div>

          {/* Next Slide */}
          <div className={`${styles.slide} ${styles.sideSlide}`} onClick={() => openLightbox(idx3)}>
            <div key={`right-${idx3}`} className={direction === 'next' ? styles.innerNext : styles.innerPrev}>
              <Image src={currentImages[idx3]} alt={`Look ${currentLook + 1} - Image ${idx3 + 1}`} fill className={`${styles.heroImage} ${styles.clickableImage}`} />
              <div className={styles.reflection}>
                <Image src={currentImages[idx3]} alt="" fill className={styles.reflectImage} />
              </div>
            </div>
            <div className={styles.sideOverlay}></div>
          </div>
        </div>

        <div className={styles.navbarPadding}></div>

        <div className={styles.blurBand}></div>

        <div className={styles.bottomControls}>
          <div className={styles.navigation}>
            <button onClick={handlePrev} className={styles.navBtn} aria-label="Previous images group">
              <span className={styles.arrowIcon}>‹</span>
            </button>
            <div className={styles.counter}>{formatCounter()}</div>
            <button onClick={handleNext} className={styles.navBtn} aria-label="Next images group">
              <span className={styles.arrowIcon}>›</span>
            </button>
          </div>

          <div className={styles.looksPagination}>
            {looks.map((look, index) => (
              <button 
                key={index} 
                onClick={() => handleLookClick(index)}
                className={`${styles.lookLink} ${index === currentLook ? styles.activeLook : ''}`}
              >
                {look}
              </button>
            ))}
          </div>
        </div>
        {isLightboxOpen && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxBg} onClick={closeLightbox}></div>
            
            <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
              &times;
            </button>
            
            <div className={styles.lightboxCounter}>
              {(lightboxImageIndex + 1).toString().padStart(2, '0')} / {totalImages.toString().padStart(2, '0')}
            </div>
            
            <button className={styles.lightboxNavLeft} onClick={prevLightboxImage} aria-label="Previous Image">
              &#8249;
            </button>
            
            <div className={styles.lightboxImageWrapper}>
              <Image 
                src={currentImages[lightboxImageIndex]} 
                alt={`Lightbox - Image ${lightboxImageIndex + 1}`}
                fill
                className={styles.lightboxImage}
              />
            </div>
            
            <button className={styles.lightboxNavRight} onClick={nextLightboxImage} aria-label="Next Image">
              &#8250;
            </button>
            
            <div className={styles.lightboxFooter}>
              ESC TO CLOSE - ARROWS TO NAVIGATE
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
