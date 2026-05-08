'use client';

import Image from 'next/image';
import Script from 'next/script';
import styles from './Contact.module.css';

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, url: string) => void;
  }
}

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <Image src="/look1/a (6).jpg" alt="Contact Portrait" fill className={styles.img} />
        </div>
        <div className={styles.formSide}>
          <span className={styles.subtitle}>GET IN TOUCH</span>
          <h2 className={styles.title}>LET&apos;S WORK TOGETHER</h2>
          
          <iframe
            id="JotFormIFrame-261165444532050"
            title="Form Contact"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/261165444532050"
            frameBorder="0"
            style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            scrolling="no"
          />
          
          <div className={styles.emailContainer}>
            <a href="mailto:stewartmorris@rocketmail.com" className={styles.emailLink}>
              stewartmorris@rocketmail.com
            </a>
          </div>
          
          <Script 
            src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
            strategy="afterInteractive"
            onLoad={() => {
              if (window.jotformEmbedHandler) {
                window.jotformEmbedHandler("iframe[id='JotFormIFrame-261165444532050']", "https://form.jotform.com/");
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
