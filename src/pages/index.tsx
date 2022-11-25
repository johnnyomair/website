import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import portraitPicture from "../../public/portrait-picture.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Johannes Obermair</title>
        <meta
          name="description"
          content="Software developer from Salzburg, Austria."
        />
      </Head>
      <main className="py-20 px-2">
        <header className="flex flex-col justify-center items-center mb-20">
          <div className="pb-8">
            <Image
              className="rounded-full"
              src={portraitPicture}
              alt="Picture of Johannes"
              width={200}
              height={200}
              placeholder="blur"
              priority
            />
          </div>

          <h1 className="text-5xl text-center font-medium mb-6">
            Johannes Obermair
          </h1>

          <p className="text-2xl text-black/60 text-center mb-6">
            Software developer from Salzburg, Austria.
          </p>

          <a
            href="mailto:mail@johannesobermair.com"
            className="py-2 px-4 rounded border-2 border-solid border-black font-medium uppercase tracking-widest transition-colors duration-300 ease-in-out hover:bg-black/10"
          >
            Contact
          </a>
        </header>
        <section className="flex flex-col items-center">
          <h2 className="text-2xl text-center font-medium mb-6">
            Currently working on
          </h2>
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
