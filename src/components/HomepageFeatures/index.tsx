import FadeInSection from "./FadeInSection";
import SDKSection from "./Components/SDKSection";
import CLISection from "./Components/CLISection";
import InfraSection from "./Components/InfraSection";

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="mx-auto flex flex-col">
      <FadeInSection fadeDistance={350}>
        <CLISection />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <SDKSection />
      </FadeInSection>

      <FadeInSection fadeDistance={350}>
        <InfraSection />
      </FadeInSection>
    </div>
  );
}
