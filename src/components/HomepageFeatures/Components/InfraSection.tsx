import Link from "@docusaurus/Link";

const InfraSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-componentDarkMode">
      <div className="sectionA mx-auto flex max-w-screen-3xl flex-col place-items-center justify-center gap-5 bg-gray-100 px-8 py-8 lg:py-20">
        <div className="flex w-[100%] flex-col items-center justify-center md:mt-3 md:block lg:w-[60%] 2xl:w-[53%]">
          <div className="mb-5 flex flex-col items-center justify-center text-center md:mt-3">
            <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
              Powered by AWS
            </h1>
            <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
              <em>Cerebellum</em> is a cloud-native solution built on AWS,
              providing a scalable and resource-efficient architecture out of
              the box
            </p>
          </div>
          <div className="flex max-w-full justify-center">
            <img
              src="/img/Cerebellum-FullInfra.drawio.png"
              alt="Cerebellum architecture diagram"
              className="my-10 rounded align-top shadow-[0_0_10px_grey] dark:shadow-none"
            />
          </div>
          <div>
            <p className="text-large mb-2 text-center font-semibold uppercase tracking-wide text-gray-600 dark:text-slate-100">
              Technologies
            </p>
            <div className="grid grid-cols-3 items-center justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-6">
              <div className="flex h-14 w-14 justify-center rounded border-2 align-middle dark:bg-white">
                <img
                  className="my-auto rounded border-2"
                  src="/img/Amazon_Web_Services-Logo.wine.svg"
                  alt="AWS Logo"
                />
              </div>
              <img
                className="w-14 rounded border-2"
                src="/img/CloudDevelopmentKit.png"
                alt="CDK Logo"
              />
              <img
                className="w-14"
                src="/img/typescript.svg"
                alt="TypeScript Logo"
              />
              <img className="w-14" src="/img/docker.svg" alt="Docker Logo" />
              <img className="w-14" src="/img/react.png" alt="React Logo" />
              <img className="w-14" src="/img/redis.png" alt="Redis Logo" />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse items-center justify-center gap-2 p-8 md:flex-row">
          <Link
            className="rounded-xl border-2 border-solid px-5 pb-3 pt-3 text-2xl text-cerebellumPurple-500 antialiased transition hover:scale-110 hover:text-cerebellumPurple-500 hover:no-underline dark:text-white sm:text-xl"
            to="/case-study"
          >
            Read Case Study
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfraSection;
