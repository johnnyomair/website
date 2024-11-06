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
      <main className="pt-20 px-2 pb-4">
        <header className="flex flex-col justify-center items-center">
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

          <div className="flex gap-6">
            <a
              href="mailto:mail@johannesobermair.com"
              title="Send me an email"
              className="hover:fill-teal-700 transition-colors duration-300 ease-in-out"
            >
              <svg width="48" height="48">
                <use xlinkHref="/email.svg#root" />
              </svg>
            </a>
            <a
              href="https://x.com/johnnyomair"
              title="Follow me on X"
              className="hover:fill-teal-700 transition-colors duration-300 ease-in-out"
            >
              <svg width="48" height="48">
                <use xlinkHref="/x.svg#root" />
              </svg>
            </a>
            <a
              href="https://github.com/johnnyomair"
              title="View my code on GitHub"
              className="hover:fill-teal-700 transition-colors duration-300 ease-in-out"
            >
              <svg width="48" height="48">
                <use xlinkHref="/github.svg#root" />
              </svg>
            </a>
          </div>
        </header>
      </main>
    </>
  );
};

export default Home;
