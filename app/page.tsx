import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageMascot } from "@/components/page-mascot";
import { About } from "@/components/sections/about";
import { Building } from "@/components/sections/building";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Products } from "@/components/sections/products";
import { Support } from "@/components/sections/support";
import { Timeline } from "@/components/sections/timeline";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-x-clip">
        <Hero />
        <Products />
        <About />
        <Philosophy />
        <Building />
        <Timeline />
        <Support />
      </main>
      <Footer />
      <PageMascot />
    </>
  );
}
