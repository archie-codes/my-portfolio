import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About id="about" />
      <Services id="services" />
      <Portfolio />
      <TechStack />
      <Contact id="contact" />
    </div>
  );
}
