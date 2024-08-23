const CLISection = () => {
  return (
    <div className="bg-gray-100 dark:bg-componentDarkMode">
      <div className="section-mobile sectionA mx-auto flex max-w-screen-3xl flex-col-reverse place-items-center justify-between gap-5 bg-gray-100 px-8 py-8 lg:flex-row lg:py-20">
        <div className="shadow-l my-10 max-w-full bg-transparent 4xl:w-[60%]">
          <video
            loop
            autoPlay
            muted
            playsInline
            className="mx-auto my-0 w-[100%] rounded-lg shadow-[0_0_10px_grey] dark:shadow-none"
          >
            <source src="/cerebellum/cbdeployVersion2.webm" type="video/webm" />
            <source src="/cerebellum/cbdeployVersion2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-grow text-left">
          <h1 className="mt-0 text-4xl font-medium leading-tight tracking-tight text-gray-600 dark:text-slate-100 md:text-[44px] md:leading-[52px]">
            Hassle-free deployment with our CLI
          </h1>
          <p className="mb-2 text-xl tracking-wide text-gray-600 dark:text-slate-100">
            Deploy a scalable AWS infrastructure built specifically for
            WebSocket applications with minimal configuration
          </p>
        </div>
      </div>
    </div>
  );
};

export default CLISection;
