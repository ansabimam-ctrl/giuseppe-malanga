import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <div className="fade-in">
        <Stats />
      </div>
      <div className="fade-in">
        <About />
      </div>
      <div className="fade-in">
        <Work />
      </div>
      <div className="fade-in">
        <Contact />
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GIUSEPPE MALANGA. ALL RIGHTS RESERVED.</p>
        {/* <div className={styles.socials}>
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
        </div> */}
      </footer>
    </main>
  );
}
