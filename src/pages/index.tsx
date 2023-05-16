import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Edward Shinwoo Sohn</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.cdnfonts.com/css/futura-pt"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/courier-prime-sans"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <Link href="/">
              <Image width={32} height={32} src="/favicon.png" alt="logo" />
            </Link>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl text-gray-600 dark:text-gray-100"
                />
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-[#03C1FF] to-[#5011FF] text-white px-4 py-2 rounded-md ml-8"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-[#11A1FF] font-medium md:text-6xl">
              Edward Shinwoo Sohn
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-100">
              I{"'"}m a developer and designer with a huge passion for creating
              amazing products. Combining my skills in both areas, I{"'"}m
              thrilled to craft innovative solutions that go above and beyond
              what{"'"}s expected. Let{"'"}s work together to build something
              truly special!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-100">
            <a href="https://www.linkedin.com/in/shinwoosohn/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/shinwoosohn" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://gitlab.com/esohn96" target="_blank">
              <AiFillGitlab />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-[#11A1FF] w-80 h-80 rounded-full mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src="/self_portrait.png"
              layout="fill"
              objectFit="cover"
              alt="Self Portrait"
            />
          </div>
        </section>
        <section className="flex justify-center">
          <div className="lg:flex lg:justify-center lg:gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-[#273759]">
              <Image
                className="mx-auto"
                src="/design.png"
                width={100}
                height={100}
                alt="Design Render"
              />
              <h3 className="text-lg text-[#11A1FF] font-medium pt-8 pb-2">
                Front-end Development
              </h3>
              <p className="text-gray-800 py-1 dark:text-gray-100">
                {["React.js", "Javascript ES6+", "HTML", "CSS", "Redux"].join(
                  " | "
                )}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-[#273759]">
              <Image
                className="mx-auto"
                src="/code.png"
                width={100}
                height={100}
                alt="Code Render"
              />
              <h3 className="text-lg text-[#11A1FF] font-medium pt-8 pb-2">
                Back-end Development
              </h3>
              <p className="text-gray-800 py-1 dark:text-gray-100">
                {["Python 3", "PostgreSQL", "Django", "FastAPI"].join(" | ")}
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-[#273759]">
              <Image
                className="mx-auto"
                src="/thumb.png"
                width={100}
                height={100}
                alt="Thumb Render"
              />
              <h3 className="text-lg text-[#11A1FF] font-medium pt-8 pb-2">
                UX/UI Design
              </h3>
              <p className="text-gray-800 py-1 dark:text-gray-100">
                {["Photoshop", "Illustrator", "Figma"].join(" | ")}
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src="/byob.png"
                className="rounded-lg object-cover"
                width={1920}
                height={1080}
                alt="first portfolio piece"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src="/placeholder.jpg"
                className="rounded-lg object-cover"
                width={1920}
                height={1080}
                alt="second portfolio piece"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src="/placeholder.jpg"
                className="rounded-lg object-cover"
                width={1920}
                height={1080}
                alt="third portfolio piece"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://dribbble.com/esohn96" target="_blank">
                <Image
                  src="/casa.png"
                  className="rounded-lg object-cover"
                  width={1920}
                  height={1080}
                  alt="dribbble link"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
