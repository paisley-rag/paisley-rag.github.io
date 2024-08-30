import Layout from "@theme/Layout";
import Member from "../components/HomepageFeatures/Member";

const Team = () => {
  return (
    <Layout>
      <section className="sectionB" id="team">
        <article className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-6 py-20">
          <h2 className="lp-para mb-2 text-center text-3xl font-semibold tracking-wide text-gray-600 dark:text-gray-300">
            Developed by
          </h2>
          <div className="mx-auto flex flex-col gap-2 md:flex-row md:gap-8">
            <Member
              name="Ben Boinay"
              // image="img/team/ben"
              location="Alexandria, VA"
              // personalWebsite=""
              github="https://github.com/bboinay"
              linkedin="https://www.linkedin.com/in/benjamin-boinay/"
              email="ben.boinay@gmail.com"
            />
            <Member
              name="Grace Lim"
              // image="img/team/grace"
              location="Toronto, Canada"
              // personalWebsite="https://www.dylanspyer.com"
              github="https://github.com/dylanspyer"
              linkedin="https://www.linkedin.com/in/dylan-spyer/"
              email="dylanspyer@gmail.com"
            />
            <Member
              name="James Chew"
              // image="img/team/james"
              location="Calgary, Canada"
              // personalWebsite="https://jjmchew.github.io/"
              github="https://github.com/jjmchew"
              linkedin="https://www.linkedin.com/in/jjmchew/"
              email="jjmchew+ca@gmail.com"
            />
            <Member
              name="Thomas Lane"
              // image="img/team/thomas.png"
              location="Chattanooga, TN"
              // personalWebsite=""
              github="https://github.com/tlane25"
              linkedin=""
              email="tlane123@proton.me"
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Team;
