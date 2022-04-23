import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import portraitPicture from "../../public/portrait-picture.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Johannes Obermair</title>
        <meta
          name="description"
          content="Personal homepage of Johannes Obermair."
        />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.portraitContainer}>
            <Image
              src={portraitPicture}
              alt="Picture of Johannes"
              width={200}
              height={200}
              placeholder="blur"
            />
          </div>

          <h1 className={styles.title}>Johannes Obermair</h1>

          <p className={styles.description}>
            Software developer from Salzburg, Austria.
          </p>

          <a href="mailto:mail@johannesobermair.com" className={styles.contact}>
            Contact
          </a>
        </header>
        <section className={styles.projects}>
          <h2 className={styles.titleProjects}>Currently working on</h2>
          <a href="https://weddember.com">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/weddember.svg"
              alt="Weddember logo"
              width="200"
              height="40"
            />
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
