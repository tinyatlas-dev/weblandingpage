import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Support } from "@/components/sections/support";
import { Timeline } from "@/components/sections/timeline";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-x-clip">
        <Hero />
        <About />
        <Philosophy />
        <Timeline />
        <Support />
      </main>
      <Footer />
    </>
  );
}
