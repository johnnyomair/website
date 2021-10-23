import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import portraitPicture from "../../public/portrait-picture.jpg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Johannes Obermair</title>
        <meta
          name="description"
          content="Personal homepage of Johannes Obermair."
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.portraitContainer}>
          <Image
            src={portraitPicture}
            alt="Picture of Johannes"
            width={200}
            height={200}
            placeholder="blur"
            className={styles.portrait}
          />
        </div>

        <h1 className={styles.title}>Johannes Obermair</h1>

        <p className={styles.description}>
          Software developer from Salzburg, Austria.
        </p>

        <a href="mailto:mail@johannesobermair.com" className={styles.contact}>
          Contact
        </a>
      </main>
    </div>
  );
};

export default Home;
