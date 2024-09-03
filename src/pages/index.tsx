import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const theme = useColorMode().colorMode;
  const CLASSES = 'text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 p-6 text-2xl sm:flex-col';
  const BG_LIGHT = ' bg-paisleyPurple';
  const BG_DARK = ' bg-[#0b0339ff]';

  return (
    <section
      id="hero"
      // className="text-8xll flex h-lvh scroll-mt-60 flex-col items-center justify-center gap-8 bg-gradient-to-br from-left via-middle to-right to-90% p-6 text-2xl sm:flex-col"
      className={theme === 'light' ? CLASSES + BG_LIGHT : CLASSES + BG_DARK}
    >
      <article className="relative max-w-full px-4 py-4 font-sans text-white antialiased md:py-1">
        <h1 className="font-main mx-auto mb-2 max-w-4xl text-center text-4xl font-medium leading-[48px] tracking-tighter text-white md:text-5xl md:leading-tight">
          {/* Paisley */}
          {/* <br />
          <em className="text-white"> </em> */}
          <img src={useBaseUrl('/img/tlogo.png')} alt="paisley logo" />
        </h1>
        <p className="md:text mx-auto mt-1 max-w-6xl text-center text-xl leading-normal text-white md:mt-2 md:leading-10">
          {/*<em>Paisley</em>*/}an open-source retrieval-based chatbot for your team.
        </p>
        <div className="mt-5 flex w-full flex-col-reverse items-center justify-center gap-2 p-6 md:flex-row">
          <Link
            className="rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-white antialiased transition hover:scale-110 hover:text-white hover:no-underline sm:text-xl"
            to="/case-study"
          >
            Read Case Study
          </Link>
        </div>
      </article>
    </section >
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
